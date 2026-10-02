<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project guide

Minimalist Next.js (App Router) starter: marketing site, auth shell, one config file for branding. See `README.md` for setup and structure.

## Commands

- `npm run dev`: dev server on http://localhost:3000
- `npm run build`: production build
- `npm run lint`: lint

Run `npm run lint` and `npm run build` before finishing a change.

## Conventions

- **Imports:** use the `@/` alias for everything under `src/`.
- **Branding and copy:** never hardcode the product name, nav links, footer links or marketing text in components. Read them from `siteConfig` in `src/config/site.ts` and add new fields there.
- **Server vs client:** components are Server Components by default. Add `"use client"` only for state, effects or browser APIs (for example `Navbar`, `LoginForm`).
- **Route groups:** `(marketing)` pages get the navbar and footer; `(auth)` pages get the centered auth shell. The root `app/layout.tsx` stays bare (fonts, metadata, `<body>`). Don't add the navbar or footer to the root layout.
- **Auth pages:** the brand header comes from `(auth)/layout.tsx`. Pages render `<AuthCard title description footer>` from `features/auth/components/` and put the form inside. Don't recreate the shell per page.
- **Features folder:** feature-specific code lives in `src/features/<feature>/` (components, server actions, types). Shared building blocks go in `src/components/`.
- **UI primitives:** use the shadcn/ui components in `src/components/ui`. Prefer `buttonVariants` with `Link` for link-styled buttons. Merge classes with `cn()` from `@/lib/utils`.
- **Styling:** Tailwind utilities with theme tokens (`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-card`). Don't hardcode colors, so light and dark themes keep working. Respect reduced motion (`motion-reduce:`) for looping animations.
- **Icons:** lucide-react only.
- **Metadata:** set `metadata` per page with a short title (the root title template adds the site name).
- **Links:** use `next/link`. Anchor links to home-page sections use `/#id` so they work from any page.
- **Accessibility:** label every form control, use one `h1` per page, and keep interactive elements keyboard reachable.

## Don'ts

- Don't invent figures, customer counts or compliance claims in copy. Placeholder stats in `site.ts` are marked as placeholders.
- Don't link to routes that don't exist without telling the user.
- Don't use `localStorage` for auth state; use server-side sessions or cookies.