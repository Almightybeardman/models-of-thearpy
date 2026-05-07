import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  studyProfiles: defineTable({
    shareCode: v.string(),
    payload: v.any(),
    updatedAt: v.number(),
  }).index("by_share_code", ["shareCode"]),
});
