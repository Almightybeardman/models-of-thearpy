import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

const optionsHandler = httpAction(async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
});

http.route({
  path: "/pushStudyProfile",
  method: "OPTIONS",
  handler: optionsHandler,
});

http.route({
  path: "/pullStudyProfile",
  method: "OPTIONS",
  handler: optionsHandler,
});

http.route({
  path: "/pushStudyProfile",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const result = await ctx.runMutation(internal.studyProfiles.upsert, {
        shareCode: String(body.shareCode || ""),
        payload: body.payload,
      });
      return jsonResponse(result);
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not save study profile.",
      }, 400);
    }
  }),
});

http.route({
  path: "/pullStudyProfile",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const payload = await ctx.runQuery(internal.studyProfiles.get, {
        shareCode: String(body.shareCode || ""),
      });
      if (!payload) {
        return jsonResponse({ error: "No cloud copy found for that cloud ID." }, 404);
      }
      return jsonResponse({ payload });
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not load study profile.",
      }, 400);
    }
  }),
});

export default http;
