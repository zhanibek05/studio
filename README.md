### `README.md`

```markdown
# Firebase Studio – Lichess Clone (Next.js)

A Next.js starter scaffolded in **Firebase Studio** with the goal of building a Lichess-like chess experience. Uses TypeScript, Tailwind CSS, and is set up for **Firebase App Hosting** deployment via `apphosting.yaml`.

> If you're here from Firebase Studio: welcome! This template is ready for local dev and GitHub-connected deploys to Firebase.

---

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Firebase App Hosting** (GitHub-connected deployments using `apphosting.yaml`)
- (Optional) **shadcn/ui** components (present if `components.json` exists)

---

## Project structure

```

.
├─ src/                  # Next.js app source
│  └─ app/               # App Router pages (see src/app/page.tsx)
├─ docs/                 # Project docs (optional)
├─ apphosting.yaml       # App Hosting config (env, scaling, etc.)
├─ next.config.ts        # Next.js config
├─ tailwind.config.ts    # Tailwind config
├─ postcss.config.mjs
├─ tsconfig.json
├─ package.json
└─ .gitignore

````

---

## Getting started

### Prerequisites
- **Node.js 20+** (recommended LTS)
- **npm** (or **pnpm/yarn**)
- A **Firebase project** with **App Hosting** enabled, and a GitHub repo connected

### Install & run

```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# run production build locally
npm start
````

The default page lives at `src/app/page.tsx`.

---

## Environment configuration

This project uses **Firebase App Hosting** configuration via `apphosting.yaml` to define environment variables and runtime/build settings.

**Example `apphosting.yaml`:**

```yaml
# apphosting.yaml
runConfig:
  minInstances: 0
  # maxInstances: 10
  # cpu: 1
  # memoryMiB: 512

env:
  - variable: NEXT_PUBLIC_APP_NAME
    value: "Lichess Clone"
    availability: [BUILD, RUNTIME]

  # Example: store your Lichess OAuth token in Secret Manager and reference it here.
  - variable: LICHESS_OAUTH_TOKEN
    secret: LICHESS_OAUTH_TOKEN
    availability: [RUNTIME]
```

Learn more about `apphosting.yaml` (scoping env to BUILD vs RUNTIME, etc.) in the Firebase docs. ([Firebase][1])

> Tip: For public client-side values use the `NEXT_PUBLIC_` prefix, which App Hosting also supports. ([Firebase][1])

---

## Deploying to Firebase App Hosting

1. Push your code to GitHub (this repo).
2. In the **Firebase Console → App Hosting**, connect this GitHub repo.
3. App Hosting builds and deploys on push; it reads `apphosting.yaml` for env and scaling.

If you’re using the older “Framework-aware Hosting” path, Firebase recommends **App Hosting** for full-stack Next.js. ([Firebase][2])

---

## Lichess integration options

You have two main paths:

1. **Use the public Lichess API** (recommended)

   * Fetch games, puzzles, profiles, etc., from Lichess without running their backend.
   * See the official API docs & examples. ([GitHub][3])

2. **Fork or clone Lichess (lila)**

   * Lichess server (“lila”) is a Scala/Play application under **AGPL-3.0**. If you copy/modify/host it, you **must** provide the complete corresponding source to users of your network service. Be sure you understand the implications before mixing lila code into this project. ([GitHub][4])

> Using the public API alone does **not** make your app AGPL, but copying Lichess code/assets does. When in doubt, stick to the API and attribute appropriately. ([GitHub][3])

---

## Example: calling Lichess from Next.js

```ts
// src/lib/lichess.ts
export async function fetchPuzzleOfTheDay(token?: string) {
  const res = await fetch("https://lichess.org/api/puzzle/daily", {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });
  if (!res.ok) throw new Error("Failed to fetch puzzle");
  return res.json();
}
```

For authenticated endpoints, create a personal token in your Lichess account and store it as a secret referenced by `apphosting.yaml` (`LICHESS_OAUTH_TOKEN`). ([GitHub][3])

---

## Scripts

Common npm scripts (check `package.json`):

* `dev` – start Next.js in development
* `build` – Next.js production build
* `start` – run the production server
* `lint` – run ESLint (if configured)
* `format` – run Prettier (if configured)

---

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for branch strategy, coding style, commit messages, and PR guidelines.

---

## License & attribution

* **This repository**: No license file yet. Consider adding one (MIT/Apache-2.0, etc.).
* **If you copy code/assets from Lichess (lila or related repos)**: your combined work will be under **AGPL-3.0** obligations, including offering complete source to users of your hosted service. ([GitHub][4])
* **If you only consume the public Lichess API**: your codebase can use your chosen license; still credit Lichess and follow API terms where applicable. ([GitHub][3])

---

## Acknowledgements

* **Firebase Studio** – agentic, cloud-based dev environment for full-stack apps. ([Firebase][5])
* **Firebase App Hosting** – recommended path for server-rendered Next.js apps. ([The Firebase Blog][6])
* **Lichess** – free/libre chess server and open API. ([GitHub][7])

````

---

### `CONTRIBUTING.md`

```markdown
# Contributing to Firebase Studio – Lichess Clone

Thanks for your interest in improving this project! This guide explains how to propose changes, run the project locally, and follow our conventions.

## Code of Conduct
Please be respectful and inclusive. If we adopt a formal covenant later, we’ll link it here.

## Development workflow

### 1) Fork & branch
- Fork the repo and create a **topic branch**:
  - `feature/<short-name>` for features
  - `fix/<short-name>` for bugfixes
  - `docs/<short-name>` for documentation

### 2) Install & run locally
```bash
npm install
npm run dev
````

### 3) Environment variables

Prefer **Firebase App Hosting** environment management via `apphosting.yaml`.

* Public client vars must be prefixed `NEXT_PUBLIC_`.
* Secrets (like `LICHESS_OAUTH_TOKEN`) should be stored in Google Secret Manager and referenced from `apphosting.yaml`.

See Firebase docs for `apphosting.yaml` semantics (BUILD vs RUNTIME availability). ([Firebase][1])

### 4) Coding standards

* **TypeScript** required for app code.
* **ESLint + Prettier** (use project config if present).
* **Accessibility**: aim for AA where possible; prefer semantic HTML and ARIA where needed.
* **UI**: Tailwind utility-first. If `shadcn/ui` is present (via `components.json`), follow its patterns.

### 5) Tests

Add or update tests when fixing bugs or adding features (framework TBD; if none yet, include at least unit tests for pure utilities).

### 6) Commits & PRs

* Commit messages: `<type>(scope): brief description`
  Examples: `feat(puzzles): add daily puzzle card`, `fix(api): handle 429 from lichess`
* Keep PRs focused and small; include screenshots for UI changes.
* Reference issues with `Fixes #123` where applicable.
* Fill out the PR checklist:

  * [ ] Local build passes: `npm run build`
  * [ ] Lint passes: `npm run lint` (if configured)
  * [ ] Added/updated tests & docs
  * [ ] No secrets or `.env` files in git
  * [ ] Verified pages render on Node 20+

### 7) Feature flags / config

* Use server-side env via `apphosting.yaml` when possible.
* Avoid committing environment-specific constants; prefer `process.env.*`.

### 8) Lichess usage guidelines

* If you **only call the Lichess API**, you can keep your own repo license; attribute Lichess appropriately. ([GitHub][3])
* If you **copy/modify Lichess code or assets** (e.g., from `lichess-org/lila`), the **AGPL-3.0** applies to the combined work. You must offer complete corresponding source to all network users of your deployment. Plan your licensing accordingly. ([GitHub][4])

### 9) Deployment

* Deploys are handled by **Firebase App Hosting** once the repo is connected in the Firebase Console.
* Update `apphosting.yaml` for env/scaling changes and push to `main` (or your configured branch).

Docs: App Hosting for Next.js / framework guidance. ([Firebase][2])

### 10) Release notes

For notable changes, add an entry to `docs/CHANGELOG.md` (if present) using Keep a Changelog format.

---

## Questions?

Open a GitHub Issue with details (include steps to reproduce, expected vs. actual, logs, and screenshots where helpful).

```

---

If you want, I can also add a small example page that fetches the Lichess “puzzle of the day” and renders it in `src/app/page.tsx`.
::contentReference[oaicite:16]{index=16}
```

[1]: https://firebase.google.com/docs/app-hosting/configure?utm_source=chatgpt.com "Configure and manage App Hosting backends - Firebase"
[2]: https://firebase.google.com/docs/hosting/frameworks/nextjs?utm_source=chatgpt.com "Integrate Next.js | Firebase Hosting - Google"
[3]: https://github.com/lichess-org/api?utm_source=chatgpt.com "Lichess API documentation and examples"
[4]: https://github.com/lichess-org/lila?utm_source=chatgpt.com "lichess-org/lila"
[5]: https://firebase.google.com/docs/studio?utm_source=chatgpt.com "Firebase Studio - Google"
[6]: https://firebase.blog/posts/2025/04/apphosting-general-availability/?utm_source=chatgpt.com "Deploy Angular & Next.js apps with App Hosting, now GA!"
[7]: https://github.com/lichess-org?utm_source=chatgpt.com "Lichess"
