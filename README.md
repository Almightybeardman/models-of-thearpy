# LMFT Therapy Study Lab

Offline-first study app for Bowen Family Systems Therapy, EFT, LMFT/systemic roles, quizzes, real-life case practice, and clinical skill drills.

## Practice Modes

- Study Guide for model review
- Questionnaire with adjustable difficulty and question count
- Real Life Examples with guided and written case scoring
- Skill Lab with model comparison, therapist response practice, Bowen triangle/genogram drills, EFT cycle mapping, next-intervention choices, ethics/risk scanning, redo-with-feedback, and weak-area practice
- Bug Reports / Feature Requests inbox with learner submissions and a private admin view

## Run Locally

Open `index.html` in Chrome, Edge, Safari, or Firefox. No install is required unless you want to deploy Convex.

## Build Static Files

Vercel serves the generated `public` folder. To build it locally:

```sh
npm run build
```

## Make It A Website

This version is ready for Vercel plus Convex:

1. Vercel hosts the static app files.
2. Convex hosts the sync backend in `convex/`.
3. The app calls Convex HTTP actions through `assets/js/convex-sync.js`.

## Optional Convex Sync

Convex sync is off by default. To enable it:

1. Create a Convex project.
2. Run `npm install`.
3. Run `npx convex dev` locally, or deploy with `npx convex deploy`.
4. Copy the Convex HTTP Actions URL ending in `.convex.site`.
5. Edit `assets/js/convex-config.js`.
6. Set `enabled: true` and paste the `.convex.site` URL into `siteUrl`.
7. Host the app on Vercel. Progress saves automatically in the background.

The app stores each member's local study copy as one Convex `studyProfiles` document. The restore ID is created automatically and is only needed for support or device-transfer work.

Do not store sensitive clinical information in this app. Sync stores profile names, progress, quiz history, and written scenario reflections in Convex.

## Admin Request Inbox

The Bug Reports / Feature Requests tab uses Convex HTTP actions. To enable the admin login, set this Convex production environment variable:

```sh
FEEDBACK_ADMIN_PASSWORD=your-private-admin-password
```

Learners can submit requests without logging in. The admin password is checked by Convex and is not stored in the website files.

## Convex Config Example

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

## Vercel Build Command

For automatic Convex deployment from Vercel, set the Vercel build command to:

```sh
npx convex deploy --cmd "npm run build"
```

Then set `CONVEX_DEPLOY_KEY` in Vercel environment variables. The frontend is static, so `npm run build` only prepares the deploy folder.

The repository includes `vercel.json` with `outputDirectory` set to `public`, and `npm run build` copies `index.html` plus `assets/` into that folder.
