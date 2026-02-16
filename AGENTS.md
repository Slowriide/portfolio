# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React frontend project.

- `src/main.jsx`: app bootstrap.
- `src/App.jsx`: main page composition.
- `src/components/ui/`: reusable UI primitives (shadcn-style components such as `button.jsx`, `card.jsx`).
- `src/lib/utils.js`: shared helpers (`cn` for class merging).
- `src/index.css`: global styles and Tailwind layers.
- `public/`: static assets served as-is.
- `dist/`: production output from `vite build` (do not edit manually).

Use the `@` alias for imports from `src` (configured in `vite.config.js`), for example: `@/components/ui/button`.

## Build, Test, and Development Commands

- `npm run dev`: start local dev server with hot reload.
- `npm run build`: create optimized production bundle in `dist/`.
- `npm run preview`: serve the production build locally for verification.

Recommended workflow:

1. Run `npm run dev` while developing.
2. Run `npm run build` before opening a PR.
3. Run `npm run preview` to smoke-test the built output.

## Coding Style & Naming Conventions

- Use 2-space indentation and semicolons.
- Prefer double quotes in JS/JSX to match current code.
- Component files: PascalCase for app-level components (`App.jsx`), lowercase for shadcn UI files (`button.jsx`) to stay consistent with existing structure.
- Keep shared utility logic in `src/lib/`; keep presentational UI in `src/components/ui/`.
- Prefer small, composable React components and descriptive class names.
- install shadcn components if you needed.

## Testing Guidelines

No automated test framework is configured yet in this repository. Until one is added:

- Validate changes through `npm run dev` and `npm run preview`.
- Manually test navigation links, responsive layout, and interactive buttons.
- For bug fixes, include clear reproduction and verification steps in the PR.

## Commit & Pull Request Guidelines

Git history is not available in this workspace snapshot, so use Conventional Commits:

- `feat: add contact card hover state`
- `fix: correct footer encoding`
- `chore: update dependencies`

PRs should include:

- concise summary of changes,
- linked issue (if applicable),
- screenshots or short video for UI changes,
- confirmation that `npm run build` succeeds.
