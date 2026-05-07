import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";

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
  path: "/submitFeedback",
  method: "OPTIONS",
  handler: optionsHandler,
});

http.route({
  path: "/adminLogin",
  method: "OPTIONS",
  handler: optionsHandler,
});

http.route({
  path: "/adminListFeedback",
  method: "OPTIONS",
  handler: optionsHandler,
});

http.route({
  path: "/adminUpdateFeedback",
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

http.route({
  path: "/submitFeedback",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const result = await ctx.runMutation(internal.feedback.create, {
        type: String(body.type || "bug"),
        title: String(body.title || ""),
        details: String(body.details || ""),
        contact: body.contact ? String(body.contact) : undefined,
        pageUrl: body.pageUrl ? String(body.pageUrl) : undefined,
        userAgent: body.userAgent ? String(body.userAgent) : undefined,
      });
      return jsonResponse(result);
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not submit feedback.",
      }, 400);
    }
  }),
});

http.route({
  path: "/adminLogin",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const result = await ctx.runMutation(internal.feedback.login, {
        password: String(body.password || ""),
      });
      return jsonResponse(result);
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not log in.",
      }, 401);
    }
  }),
});

http.route({
  path: "/adminListFeedback",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const items = await ctx.runQuery(internal.feedback.list, {
        token: String(body.token || ""),
        status: body.status ? String(body.status) : undefined,
      });
      return jsonResponse({ items });
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not load requests.",
      }, 401);
    }
  }),
});

http.route({
  path: "/adminUpdateFeedback",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    try {
      const body = await request.json();
      const result = await ctx.runMutation(internal.feedback.update, {
        token: String(body.token || ""),
        id: String(body.id || "") as Id<"feedbackItems">,
        status: String(body.status || "new"),
        adminNote: body.adminNote ? String(body.adminNote) : undefined,
      });
      return jsonResponse(result);
    } catch (error) {
      return jsonResponse({
        error: error instanceof Error ? error.message : "Could not update request.",
      }, 400);
    }
  }),
});

export default http;
