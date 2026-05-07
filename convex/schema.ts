import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  studyProfiles: defineTable({
    shareCode: v.string(),
    payload: v.any(),
    updatedAt: v.number(),
  }).index("by_share_code", ["shareCode"]),
  feedbackItems: defineTable({
    type: v.union(v.literal("bug"), v.literal("feature")),
    title: v.string(),
    details: v.string(),
    contact: v.optional(v.string()),
    pageUrl: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    status: v.union(
      v.literal("new"),
      v.literal("reviewing"),
      v.literal("planned"),
      v.literal("done"),
      v.literal("closed"),
    ),
    adminNote: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_status", ["status"])
    .index("by_type", ["type"])
    .index("by_created", ["createdAt"]),
  adminSessions: defineTable({
    token: v.string(),
    createdAt: v.number(),
    expiresAt: v.number(),
  }).index("by_token", ["token"]),
});
