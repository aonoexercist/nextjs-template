@AGENTS.md

## Claude-specific notes

- When changing marketing copy, brand or navigation, edit `src/config/site.ts` first and check whether any component needs changes at all.
- Before adding a page, say which route group it belongs in (`(marketing)` or `(auth)`) and why.
- When a task touches a Next.js API (routing, caching, server actions, metadata), read the matching guide in `node_modules/next/dist/docs/` first, as AGENTS.md requires.
- Keep changes small and in the existing style. Mention anything you noticed but didn't change (for example dead links) instead of fixing it silently.