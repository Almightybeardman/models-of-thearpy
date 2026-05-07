# Website Setup

This app can be hosted on Vercel with Convex handling optional shared progress sync.

## 1. Create Convex Backend

1. Create a Convex account and project.
2. Run `npm install` in this folder.
3. Run `npx convex dev` for local setup, or `npx convex deploy` for production.
4. In the Convex dashboard, copy the HTTP Actions URL ending in `.convex.site`.

The backend files are:

- `convex/schema.ts`
- `convex/studyProfiles.ts`
- `convex/http.ts`

## 2. Configure The App

Edit `assets/js/convex-config.js`:

```js
window.CONVEX_CONFIG = {
  enabled: true,
  siteUrl: "https://your-deployment.convex.site",
  endpoints: {
    push: "/pushStudyProfile",
    pull: "/pullStudyProfile"
  }
};
```

## 3. Deploy To Vercel

Vercel can host the static app and deploy Convex functions.

Recommended Vercel settings:

- Framework preset: Other
- Build command: `npx convex deploy --cmd "npm run build"`
- Output directory: `public` (already configured in `vercel.json`)
- Environment variable: `CONVEX_DEPLOY_KEY`

Get `CONVEX_DEPLOY_KEY` from the Convex dashboard production deployment settings.

## 4. Use Sync

Open the hosted site and use the app normally. When Convex is configured:

- New profiles and study progress save to Convex automatically.
- Members do not need to press a push/sync button or create an ID.
- Restore tools are only surfaced as a support fallback if automatic sync needs attention.

Do not store sensitive clinical information. The restore ID protects casual access, but this is still an educational study tool, not a clinical record system.
