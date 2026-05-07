import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";
import type { Id } from "./_generated/dataModel";
import type { MutationCtx, QueryCtx } from "./_generated/server";

const SESSION_TTL_MS = 12 * 60 * 60 * 1000;
const STATUSES = ["new", "reviewing", "planned", "done", "closed"] as const;

type Status = typeof STATUSES[number];

function optionalText(value: string | undefined, maxLength: number) {
  const text = String(value || "").trim();
  return text ? text.slice(0, maxLength) : undefined;
}

function assertLength(value: string, label: string, min: number, max: number) {
  if (value.length < min || value.length > max) {
    throw new Error(`${label} must be ${min}-${max} characters.`);
  }
}

function assertStatus(status: string): asserts status is Status {
  if (!STATUSES.includes(status as Status)) {
    throw new Error("Unsupported request status.");
  }
}

function adminPassword() {
  const password = process.env.FEEDBACK_ADMIN_PASSWORD || "";
  if (!password) {
    throw new Error("Admin login is not configured yet.");
  }
  return password;
}

function createToken() {
  const cryptoApi = globalThis.crypto;
  if (cryptoApi && "getRandomValues" in cryptoApi) {
    const bytes = new Uint8Array(32);
    cryptoApi.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}

async function requireAdmin(ctx: QueryCtx | MutationCtx, token: string) {
  const session = await ctx.db
    .query("adminSessions")
    .withIndex("by_token", (q) => q.eq("token", token))
    .unique();

  if (!session || session.expiresAt < Date.now()) {
    throw new Error("Admin session expired. Log in again.");
  }

  return session;
}

export const create = internalMutation({
  args: {
    type: v.string(),
    title: v.string(),
    details: v.string(),
    contact: v.optional(v.string()),
    pageUrl: v.optional(v.string()),
    userAgent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const type = args.type === "feature" ? "feature" : "bug";
    const title = args.title.trim();
    const details = args.details.trim();
    const contact = optionalText(args.contact, 140);
    const pageUrl = optionalText(args.pageUrl, 300);
    const userAgent = optionalText(args.userAgent, 300);

    assertLength(title, "Title", 4, 120);
    assertLength(details, "Details", 10, 2000);

    const now = Date.now();
    const id = await ctx.db.insert("feedbackItems", {
      type,
      title,
      details,
      contact,
      pageUrl,
      userAgent,
      status: "new",
      createdAt: now,
      updatedAt: now,
    });

    return { id, createdAt: now };
  },
});

export const login = internalMutation({
  args: {
    password: v.string(),
  },
  handler: async (ctx, args) => {
    if (args.password !== adminPassword()) {
      throw new Error("Incorrect admin password.");
    }

    const now = Date.now();
    const token = createToken();
    const expiresAt = now + SESSION_TTL_MS;

    await ctx.db.insert("adminSessions", {
      token,
      createdAt: now,
      expiresAt,
    });

    return { token, expiresAt };
  },
});

export const list = internalQuery({
  args: {
    token: v.string(),
    status: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);

    const status = args.status || "all";
    let items;
    if (status !== "all") {
      assertStatus(status);
      items = await ctx.db
        .query("feedbackItems")
        .withIndex("by_status", (q) => q.eq("status", status))
        .order("desc")
        .take(100);
    } else {
      items = await ctx.db.query("feedbackItems").order("desc").take(100);
    }

    return items;
  },
});

export const update = internalMutation({
  args: {
    token: v.string(),
    id: v.id("feedbackItems"),
    status: v.string(),
    adminNote: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx, args.token);
    assertStatus(args.status);

    const existing = await ctx.db.get(args.id as Id<"feedbackItems">);
    if (!existing) {
      throw new Error("Request not found.");
    }

    const adminNote = optionalText(args.adminNote, 1000);
    await ctx.db.patch(args.id, {
      status: args.status,
      adminNote,
      updatedAt: Date.now(),
    });

    return { id: args.id, status: args.status };
  },
});
