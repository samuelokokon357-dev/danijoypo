# Danijoy Pocket Money Portal — starter scaffold

Branded starter for a school pocket-money management portal for Danijoy International Schools.

## Brand system

- Deep navy: `#102048`
- Gold: `#F0C000`
- White and cool light-grey surfaces
- School crest: `public/danijoy-school-logo.jpg`
- Motion: short entrance/hover transitions with a `prefers-reduced-motion` fallback

The logo and palette are used in the home, sign-in and authenticated placeholder dashboard. The promotional student photos/posters are intentionally not used in this financial portal scaffold.

## Stack

- Next.js App Router + React + TypeScript
- Tailwind CSS v4
- shadcn/ui-compatible configuration and starter UI primitives
- Supabase Auth using `@supabase/ssr` cookie-based clients

## Requirements

- Node.js 20.9 or later
- npm
- A Supabase project

## Setup

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and set:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## shadcn/ui

The project includes `components.json`, Tailwind v4, the `cn()` utility and starter UI primitives. To add or regenerate official shadcn/ui components, run commands from the project root, for example:

```bash
npx shadcn@latest add button card input label badge dialog dropdown-menu table
```

## Supabase Auth notes

- Browser and server clients are separated under `src/lib/supabase/`.
- `proxy.ts` refreshes the cookie-backed session using `auth.getClaims()`.
- Sign-in uses Supabase email/password authentication.
- `/dashboard` is protected by a verified claims check.
- There is no service-role key in the browser or `.env.example`.
- Role-based authorization is deliberately not wired yet. It must be enforced by database RLS and trusted server/database functions, not by hiding UI controls.

Create users and profiles through a trusted provisioning process after the final profile schema and RLS policies exist. Do not allow users to self-assign `admin` roles.

## Important database note

The SQL in the project discussion is not yet production-safe. Read `docs/ledger-design-review.md` before creating tables. In particular, the current proposal combines mutable withdrawal-request status with the supposedly immutable ledger, and its insert-only trigger can be bypassed by updates and concurrent requests.

## Current scope

This is a frontend/authentication scaffold, not a deployed financial application. The dashboard cards are placeholders. No wallet, withdrawal, parent/student relationship or money movement is connected yet.
