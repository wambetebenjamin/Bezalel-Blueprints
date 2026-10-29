# Bezalel Blueprints

**Make it here. Share it far.**

Open library of frugal invention blueprints and local-material designs for water, energy,
agriculture, school kits and mobility aids that anyone can build and improve.

This repository is a production Next.js site. It carries the design system of the Intechnic
template (fonts, colours, CSS variables, spacing scale, layout components and animation
utilities) with all text, imagery, branding, metadata and page structure replaced for
Bezalel Blueprints.

## Contents

- [What the site does](#what-the-site-does)
- [Pages](#pages)
- [Stack](#stack)
- [Getting started](#getting-started)
- [Environment](#environment)
- [Internationalisation](#internationalisation)
- [Authentication](#authentication)
- [Forms and reCAPTCHA](#forms-and-recaptcha)
- [Accessibility and motion](#accessibility-and-motion)
- [Images and credits](#images-and-credits)
- [Security headers](#security-headers)
- [Project layout](#project-layout)
- [Quality gate](#quality-gate)
- [Disclaimers](#disclaimers)
- [Licence](#licence)

## What the site does

Bezalel Blueprints publishes build documentation for hardware that can be made from
materials a maker can actually find: scrap metal, reclaimed plastic, offcut timber, sand,
bicycle parts, fired clay, rope and cloth. Every blueprint carries a bill of materials,
ordered build steps, the safety notes its contributors reported, field notes from later
builds and an open licence.

The site has no shop, no analytics dashboards and no charts. Accounts exist only so a
visitor can keep a saved list and see the status of their own submissions.

## Pages

| Route | What it holds |
| --- | --- |
| `/` | Hero, why frugal open design matters, featured blueprints, how to use and contribute, category tiles, call to action, safety disclaimer |
| `/blueprints` | Filterable library (category, skill level, materials, search, sort) |
| `/blueprints/[slug]` | Bill of materials, tools, ordered steps, safety notes, licence, related builds |
| `/categories` | The six invention areas with field notes, plus rural and urban guidance |
| `/build` | Getting started for schools, makerspaces and sole inventors |
| `/contribute` | Submission form with reCAPTCHA and clear intellectual property framing |
| `/schools` | Curriculum linked kits, teacher notes, supervision rules, budget notes |
| `/about` | Why the project exists, principles, independence statement |
| `/license` | CERN OHL 2 Permissive for hardware, CC BY 4.0 for text, Pexels License for press photographs |
| `/safety` | Safety and responsibility, including medical, electrical and water specific warnings |
| `/contact` | WhatsApp and email contact plus a message form |
| `/privacy` | What the site stores and how to remove it |
| `/terms` | Terms of use, licensing, warranty and liability limits |
| `/saved` | Saved blueprints and contribution status on this device or account |

## Stack

Pinned versions, no ranges:

- `next@16.4.2`
- `react@19.2.0`, `react-dom@19.2.0`
- `next-auth@5.0.0-beta.32` (Credentials provider, JWT sessions)
- `tailwindcss@4.1.10` with `@tailwindcss/postcss@4.1.10`
- `lenis@1.3.27` (smooth scrolling)
- `js-cookie@3.0.8` (language, consent and saved list)
- `typescript@5.7.3`, `eslint@9.20.1`, `eslint-config-next@16.4.2`

Node: `>=24.0.0` (see `.nvmrc`).

`next-auth` is held at `5.0.0-beta.32`, the first release in the v5 beta line that clears the
critical advisories affecting `5.0.0-beta.31` and below. The API is unchanged for the
Credentials provider and JWT sessions used here.

## Getting started

```bash
nvm use            # reads .nvmrc, Node 24
npm ci
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

Scripts:

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

`.npmrc` sets `legacy-peer-deps=true`. The `next-auth` v5 beta peer range does not yet list
Next 16, and this keeps the install deterministic.

## Environment

Copy `.env.example` to `.env.local`. Nothing secret is required for a local run.

- `NEXT_PUBLIC_WHATSAPP_NUMBER` defaults to `254112272061` and drives every WhatsApp link.
- `NEXT_PUBLIC_SITE_URL` is used for canonical links and metadata.
- `NEXT_PUBLIC_LOCALES` and `NEXT_PUBLIC_DEFAULT_LOCALE` drive the language switcher.
- `RECAPTCHA_SECRET_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_MIN_SCORE` enable
  reCAPTCHA v3. When they are empty, forms stay submit-ready and skip verification.
- `NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY` and `RECAPTCHA_V2_SECRET_KEY` enable the v2 checkbox
  that appears when a v3 score falls below `RECAPTCHA_MIN_SCORE` (default `0.5`).
- `AUTH_SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL` and `AUTH_TRUST_HOST` configure Auth.js.
- `AUTH_DEMO_EMAIL` and `AUTH_DEMO_PASSWORD` enable the light Credentials sign in. When they
  are empty, sign in is disabled and the saved list stays in the browser.

## Internationalisation

Three locales: English (`en`), Swahili (`sw`) and French (`fr`). Messages live in
`src/lib/i18n/messages/`. The active locale is held in a cookie and mirrored onto
`<html lang>` in the root layout, so the switcher, the document language and the voice tour
always agree.

## Authentication

`next-auth` v5 is used for one thing only: a saved list that follows the account, and the
status of that account's submissions. There are no analytics views, no dashboards and no
charts. Without an account the saved list is stored in the `bezalel-blueprints-saved` cookie.

## Forms and reCAPTCHA

`/contribute` and `/contact` post to `/api/contribute` and `/api/contact`. Each route
validates the fields, then verifies a reCAPTCHA v3 token server side. A score below
`RECAPTCHA_MIN_SCORE` returns `fallback: true`, and the client raises the v2 checkbox
challenge before the visitor sends again.

## Accessibility and motion

- 44px minimum touch targets across buttons, links and form controls.
- Mobile-first layout with no horizontal overflow, verified from 320px upward.
- Filters open as a bottom sheet on small screens and sit in a sticky sidebar on desktop.
- Safe-area insets are honoured through `viewport-fit=cover`, with zoom left enabled.
- `prefers-reduced-motion` disables Lenis smooth scrolling and the reveal animations.
- Skip link, labelled landmarks, focus-visible outlines and a screen-reader-only utility.

## Images and credits

Every photograph is a real, free-to-use Pexels photograph. No images are generated and none
are watermarked. Files are served from `public/images/` as optimised progressive JPEGs.
Photographer names, source URLs and alt text for all 24 images are listed in
[`image-credits.md`](./image-credits.md).

## Security headers

`next.config.ts` and `vercel.json` both set `X-Frame-Options: DENY`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`,
`Strict-Transport-Security` and a restrictive `Permissions-Policy`. Deployments run in the
`cdg1` region.

## Project layout

```
auth.ts                        Auth.js v5 configuration (root, per v5 convention)
public/images/                 Optimised Pexels photographs
src/app/                       App Router routes and API handlers
src/app/globals.css            Design tokens and template component classes
src/components/                Header, footer, cards, filters, forms, floating actions
src/components/pages/          Client views rendered by each route
src/lib/blueprints.ts          Blueprint content, localised in three languages
src/lib/materials.ts           Material filters and their localised labels
src/lib/site.ts                Navigation, categories, WhatsApp and site constants
src/lib/i18n/                  Locale resolution and message catalogues
```

## Quality gate

```bash
npm ci && npx tsc --noEmit && npm run build && npm audit --audit-level=high
```

## Disclaimers

Bezalel Blueprints is an independent open knowledge platform. Designs are contributed by
the community. Verify safety, test locally, and follow your local regulations. We are not a
manufacturer, we do not sell or certify anything, and nothing here is medical or
engineering certification.

## Licence

- Hardware designs: CERN Open Hardware Licence Version 2, Permissive.
- Text and original photographs: Creative Commons Attribution 4.0 International.
- Press photographs: Pexels License. See [`image-credits.md`](./image-credits.md).
- This repository's own source code inherits the licence of the original template.
