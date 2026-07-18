# Northline product engineering website template

A five-page Next.js website with a corporate precision-editorial visual system, Sanity content schemas, case studies, qualified lead capture and Calendly handoff.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The website works with seeded content without external services. Add Sanity credentials to enable CMS case studies. Configure either `CRM_WEBHOOK_URL` or the Resend variables before accepting production enquiries. Replace the placeholder company name, email, case-study evidence and Calendly URL before launch.

## Quality checks

```bash
npm run typecheck
npm run build
```
