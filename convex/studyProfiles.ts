import { v } from "convex/values";
import { internalMutation, internalQuery } from "./_generated/server";

function normalizeShareCode(shareCode: string) {
  return shareCode.trim().toLowerCase();
}

function assertShareCode(shareCode: string) {
  if (!/^[a-z0-9][a-z0-9_-]{2,63}$/.test(shareCode)) {
    throw new Error("Cloud ID must be 3-64 letters, numbers, dashes, or underscores.");
  }
}

export const upsert = internalMutation({
  args: {
    shareCode: v.string(),
    payload: v.any(),
  },
  handler: async (ctx, args) => {
    const shareCode = normalizeShareCode(args.shareCode);
    assertShareCode(shareCode);

    const existing = await ctx.db
      .query("studyProfiles")
      .withIndex("by_share_code", (q) => q.eq("shareCode", shareCode))
      .unique();

    const record = {
      shareCode,
      payload: args.payload,
      updatedAt: Date.now(),
    };

    if (existing) {
      await ctx.db.patch(existing._id, record);
    } else {
      await ctx.db.insert("studyProfiles", record);
    }

    return {
      shareCode,
      updatedAt: record.updatedAt,
    };
  },
});

export const get = internalQuery({
  args: {
    shareCode: v.string(),
  },
  handler: async (ctx, args) => {
    const shareCode = normalizeShareCode(args.shareCode);
    assertShareCode(shareCode);

    const existing = await ctx.db
      .query("studyProfiles")
      .withIndex("by_share_code", (q) => q.eq("shareCode", shareCode))
      .unique();

    return existing ? existing.payload : null;
  },
});
