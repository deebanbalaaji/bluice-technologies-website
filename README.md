# Bluice Technologies website

Corporate product-engineering website built with Next.js App Router, React, and TypeScript. Pages, services, industries, sectors, regional content, and corporate-responsibility content are statically rendered. The lead endpoint remains ready for server-side email and CRM integration.

## Repository layout

- `app/`: routes, metadata, sitemap, and lead endpoint
- `components/`: shared navigation, media, regional, industry, and Bluice NXT interfaces
- `lib/`: structured website, industry, search, and regional content
- `public/`: optimized brand film and approved website imagery

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

Deploy from the repository root. Configure email, CRM, analytics, and scheduling credentials only in the hosting provider; never expose them in browser code or commit environment files.
