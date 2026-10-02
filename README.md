# Next.js Starter Template

A minimalist [Next.js](https://nextjs.org) (App Router) starter with a marketing site (landing, pricing, about), an auth shell with a login page, and a single config file for branding and copy.

## Stack

- Next.js App Router, React, TypeScript
- Tailwind CSS with shadcn/ui components (`src/components/ui`)
- [lucide-react](https://lucide.dev) icons
- [Geist](https://vercel.com/font) fonts via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `yarn`, `pnpm` and `bun` work the same way.

Optional environment variable:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL used for metadata | `http://localhost:3000` |

## Rebrand in one file

All brand text, navigation, footer links and marketing copy live in `src/config/site.ts`. Change the name, tagline, nav, hero, features, pricing tiers, about stats and CTAs there, and every page updates.

Placeholder content to replace before launch:

- About-page stats (uptime, latency, task counts) are examples, not real figures.
- Footer links point to pages that don't exist yet (`/docs`, `/blog`, `/privacy`, ...). Create them or remove them from the config.
- The footer status indicator is off by default (`status.enabled`). Only enable it if it reads from a real status source.

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, <body> only
│   ├── (marketing)/          # Pages with navbar + footer
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Landing page
│   │   ├── pricing/
│   │   └── about/
│   └── (auth)/               # Pages inside the shared auth shell
│       ├── layout.tsx        # Centered column + brand
│       ├── login/page.tsx
│       └── register/page.tsx
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Hero, Features, Pricing, About, CTA
│   └── ui/                   # shadcn/ui primitives
├── config/site.ts            # Brand + content (single source of truth)
├── features/
│   └── auth/
│       ├── components/       # AuthCard (heading + card + footer link)
│       └── login/            # LoginDisplay, LoginForm, actions, types
└── lib/utils.ts              # cn() helper
```

Route groups such as `(marketing)` and `(auth)` organize layouts and do not appear in URLs.

## Adding an auth page

1. Create `src/app/(auth)/<name>/page.tsx` with `metadata` and render a display component.
2. In `src/features/auth/<name>/`, build the display with `<AuthCard title description footer>` and put the form inside it.
3. The brand header and centering come from `(auth)/layout.tsx`, so don't repeat them.

## Adding a marketing page

Create `src/app/(marketing)/<name>/page.tsx`. The navbar and footer come from `(marketing)/layout.tsx`. Add the link to `nav` or `footer` in `src/config/site.ts`.

## Scripts

```bash
npm run dev     # Start the dev server
npm run build   # Production build
npm run start   # Run the production build
npm run lint    # Lint
```

## Deploy

The easiest option is the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other hosts.