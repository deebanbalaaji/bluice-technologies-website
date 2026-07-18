# Bluice Technologies website

A corporate product-engineering website built with Next.js, Sanity content schemas, case studies, qualified lead capture and Calendly handoff.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The website works with seeded content without external services. Add Sanity credentials to enable CMS case studies. Configure either `CRM_WEBHOOK_URL` or the Resend variables before accepting production enquiries. Replace placeholder email addresses, case-study evidence and the Calendly URL before launch.

## Quality checks

```bash
npm run typecheck
npm run build
```
