# Sonnenschein Reise Production Architecture

## Product Direction

The current project is a marketing landing page. The target product is a full travel platform with:

- a CMS-backed public website
- inquiry capture and follow-up workflows
- booking management
- admin tools for staff
- future payment and availability features

This project should use two separate data systems:

1. Sanity for editorial content
2. A relational database for operational data

Sanity should manage:

- homepage content
- destinations
- experiences
- tour packages
- blog posts
- testimonials
- FAQs
- legal pages
- SEO settings
- reusable marketing content

The app database should manage:

- inquiries
- bookings
- travelers
- departures and availability
- payments
- admin notes
- staff users and roles
- booking status history

## Recommended Stack

- Next.js App Router for the website and internal dashboard
- Sanity as the headless CMS
- PostgreSQL as the operational database
- Prisma as the database ORM
- Auth provider later: NextAuth or Clerk
- Email provider later: Resend
- Payments later: Stripe

## Folder Strategy

This repo should gradually move toward this shape:

```text
app/
  (marketing)/
    page.tsx
    tours/
    blog/
    destinations/
  admin/
    page.tsx
    inquiries/
    bookings/
    customers/
  api/
    inquiries/
    bookings/
components/
  marketing/
  admin/
  ui/
lib/
  cms/
  db/
  bookings/
  inquiries/
  validation/
  constants/
prisma/
sanity/
docs/
```

## Delivery Phases

### Phase 1: CMS Foundation

- move hardcoded marketing copy out of React components
- create content models for homepage, tours, blog, reviews, FAQs
- define reusable sections and SEO fields
- fetch content server-side in the marketing app

### Phase 2: Inquiry Platform

- replace the static contact form with a validated inquiry form
- store inquiries in the database
- send confirmation emails to travelers
- send notification emails to staff
- add admin views for inquiry tracking

### Phase 3: Booking Platform

- create real tour detail pages
- model departures, prices, traveler counts, and booking statuses
- allow staff to convert inquiries into bookings
- optionally add online deposits or full payments

### Phase 4: Admin Features

- dashboard with counts and recent activity
- inquiry queue
- booking list and detail views
- customer profiles
- status changes and internal notes
- role-based access later

## Initial Data Models

### CMS models

- siteSettings
- homepage
- destination
- experience
- tourPackage
- blogPost
- testimonial
- faq
- legalPage

### App database models

- User
- Inquiry
- Tour
- Departure
- Booking
- Traveler
- Payment
- AdminNote

## Key Rules

- content editing belongs in Sanity
- bookings and inquiries do not belong in Sanity
- public content should be server-rendered where possible
- admin actions should run on the server
- validation should exist both client-side and server-side
- booking status changes should be auditable

## Suggested Build Order

1. Introduce shared domain types and folders
2. Add CMS schema design and content contracts
3. Replace static homepage content with CMS-ready data loading
4. Implement inquiry submission pipeline
5. Add admin dashboard and inquiry management
6. Add bookings and departures
7. Add payments and advanced workflows
