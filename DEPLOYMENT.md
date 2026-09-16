# Vercel Deployment

This document explains how to deploy this Vite React app to Vercel and includes a small vercel.json config.

Prerequisites
- Ensure repository contains a valid package.json with build scripts. This branch adds a minimal package.json if you don't have one.

Recommended Vercel settings (when connecting your GitHub repo):
- Framework Preset: Other (Vite will be detected)
- Root Directory: / (unless your app is in a subdirectory)
- Build Command: npm run build  (or yarn build)
- Output Directory: dist

vercel.json explanation
- Uses @vercel/static-build to build the app and serve the `dist` directory
- Routes all requests to index.html so client-side routing works for SPA

Quick steps to deploy
1. Go to https://vercel.com/new
2. Select "Import Git Repository" → connect your GitHub account → choose `vivekk-rajj/The-Registration-Wizard`
3. Accept the defaults OR set Build Command to `npm run build` and Output Directory to `dist`
4. Click Deploy

Notes
- If you use Yarn, Vercel will run `yarn build` automatically when it detects yarn.lock.
- If your project uses TypeScript and you want type-checking on CI, add a GitHub Action to run `tsc --noEmit` before merge. I can add that for you.

Optional next steps I can do for you
- Add a GitHub Action to run `npm run build` and `tsc --noEmit` on PRs.
- Configure Vercel environment variables or a custom domain.
- Open a PR that merges this branch into `main` and optionally enable Vercel auto-deploy on merge.
