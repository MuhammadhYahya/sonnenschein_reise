# Sonnenschein Reise

Sonnenschein Reise is evolving from a marketing landing page into a full travel platform with:

- a CMS-backed public website
- inquiry capture
- booking management
- internal admin tools

The frontend is built with Next.js, React, TypeScript, and Tailwind CSS.

## Current State

Today the project contains:

- a landing page in the Next.js App Router
- reusable marketing components
- starter admin routes
- domain and schema planning for CMS and booking features

## Planned Architecture

- Sanity for content management
- PostgreSQL and Prisma for operational data
- Next.js App Router for public pages and admin pages
- future integrations for auth, email, and payments

More detail lives in:

- `docs/production-architecture.md`
- `docs/content-model.md`
- `prisma/schema.prisma`

## Getting Started

Install dependencies and start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Available Routes

- `/` marketing homepage
- `/admin` starter admin dashboard
- `/admin/inquiries` inquiry management placeholder
- `/admin/bookings` booking management placeholder
- `/admin/customers` customer management placeholder

## Environment Setup

Copy values from `.env.example` into your local `.env` file when you begin wiring services like PostgreSQL, Sanity, email, auth, and Stripe.

## Recommended Next Build Steps

1. Install and configure Sanity
2. Replace hardcoded homepage content with CMS-backed queries
3. Add Prisma and database migrations
4. Make the inquiry form submit real data
5. Build inquiry management inside `/admin`
6. Add bookings, departures, and traveler records

## Notes

- Sanity should manage content, not bookings
- inquiries and bookings should live in the app database
- the current admin screens are scaffolds, not finished features
