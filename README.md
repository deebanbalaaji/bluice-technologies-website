# Bluice Technologies website

Corporate product-engineering website built with Next.js App Router, React, and TypeScript. Page and case-study content is statically rendered, while the lead endpoint remains ready for server-side email and CRM integrations.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

The repository includes OpenNext and Wrangler configuration for Cloudflare. Configure deployment secrets outside the repository; never expose email, CRM, or scheduling credentials in browser code.
