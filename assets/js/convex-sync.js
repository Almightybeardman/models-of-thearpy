(function () {
  "use strict";

  var config = window.CONVEX_CONFIG || {};

  function hasRealValue(value) {
    return Boolean(value && String(value).indexOf("YOUR_") === -1);
  }

  function isConfigured() {
    return Boolean(
      config.enabled &&
      hasRealValue(config.siteUrl) &&
      /^https:\/\/.+\.convex\.site\/?$/.test(String(config.siteUrl))
    );
  }

  function normalizeShareCode(shareCode) {
    var code = String(shareCode || "").trim().toLowerCase();
    if (!/^[a-z0-9][a-z0-9_-]{2,63}$/.test(code)) {
      throw new Error("Restore ID must be 3-64 letters, numbers, dashes, or underscores.");
    }
    return code;
  }

  function endpoint(kind) {
    var endpoints = config.endpoints || {};
    var path = endpoints[kind] || (kind === "push" ? "/pushStudyProfile" : "/pullStudyProfile");
    var base = String(config.siteUrl || "").replace(/\/+$/, "");
    return base + (path.charAt(0) === "/" ? path : "/" + path);
  }

  async function request(kind, body) {
    if (!isConfigured()) {
      throw new Error("Convex is not configured yet.");
    }
    var response;
    try {
      response = await fetch(endpoint(kind), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
    } catch (error) {
      throw new Error("Could not reach Convex. Check your Convex site URL and internet connection.");
    }

    var data = null;
    try {
      data = await response.json();
    } catch (error) {
      data = null;
    }

    if (!response.ok) {
      throw new Error((data && data.error) || "Convex sync failed.");
    }
    return data;
  }

  async function push(shareCode, payload) {
    var code = normalizeShareCode(shareCode);
    return request("push", {
      shareCode: code,
      payload: payload
    });
  }

  async function pull(shareCode) {
    var code = normalizeShareCode(shareCode);
    var data = await request("pull", {
      shareCode: code
    });
    if (!data || !data.payload) {
      throw new Error("Cloud copy is missing profile data.");
    }
    return data.payload;
  }

  window.STUDY_SYNC = {
    provider: "convex",
    isConfigured: isConfigured,
    push: push,
    pull: pull
  };
})();
