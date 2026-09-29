# Public membership verification

`/verify-membership?token=<card UUID>` displays only a member's name and current Active/Inactive status. It calls the existing Nazm `verify_card` RPC anonymously; there is no login, directory search or member detail endpoint.

`src/data/membership-public.json` contains the existing project's browser-safe **publishable** key and URL, not a service-role key. Optional Vercel build variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` override these values. The deployed database must retain its existing RLS and RPC grants.

Vercel configuration rewrites only `/verify-membership` to the React entry point. It applies no-referrer, noindex and no-store headers to that route. Do not add analytics that capture verification tokens or names. Other website routes are unchanged.

Checks: `npm run build`, `npm run lint`, `node --test tests/verifyMembership.test.mjs`.

After merging into the existing Vercel production branch, wait for a successful deployment and test a Nazm QR link on jklf.org. Missing/malformed links, unknown cards and connection failures have separate UI states. Changing the verification domain later requires keeping redirects for already-issued cards.
