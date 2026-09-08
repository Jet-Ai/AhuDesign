# AHU Design

Interior and retail design portfolio, built with React and Vinext.

## Local development

Run `pnpm install`, then `pnpm dev`.
Run `pnpm build` for the Cloudflare deployment build.

## Content

Project photographs are web-optimised copies of assets supplied in the parent AhuDesign folder. Portfolio titles are editorial descriptions, not verified formal project names. Contact: hasan.alibeyli@outlook.com / +421 944 693 002.

Public website: https://ahudesign.eu. Canonical, language and social sharing metadata use this domain. Internal navigation stays on the domain the visitor opened.

## Cloudflare Workers deployment

Use repository root `/`, build command `pnpm run build`, and deploy command `pnpm exec wrangler deploy --config dist/server/wrangler.json`. Alternatively, `pnpm run deploy` builds and deploys in one command. Do not use the automatically generated workspace filter. The generated Worker serves the SK, AZ and EN routes; static assets come from `dist/client`.

The root Wrangler configuration also supports `pnpm exec wrangler deploy` from a fresh checkout by running the build first.
