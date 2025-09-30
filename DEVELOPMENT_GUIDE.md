## Development Guide

This monorepo uses pnpm workspaces and Turborepo. It contains shared packages that power apps (e.g., `apps/web-app`). This guide explains what each package does and how to develop against them.

### Prerequisites

- Node 18+
- pnpm installed globally

```bash
npm i -g pnpm
pnpm install
```

### Turborepo tasks (root)

- Build all: `pnpm turbo run build`
- Dev a target: `pnpm turbo run dev --filter=<package|app>`
- Lint: `pnpm turbo run lint`
- Test: `pnpm turbo run test`
- Typecheck: `pnpm turbo run typecheck`

## Packages overview

### @collexworld/assets

Shared CSS, fonts and baseline Tailwind/PostCSS configs.

- Exports
  - `@collexworld/assets/fonts.css`
  - `@collexworld/assets/global.css`
  - `@collexworld/assets/tailwind.base.config` (TS)
  - `@collexworld/assets/postcss.base.config` (ESM)
- Peer deps required in consumers
  - `tailwindcss`, `autoprefixer`, `tailwindcss-animate`
- Typical usage in an app
  - Import global styles (e.g., top-level layout or global.css):
    ```css
    @import '@collexworld/assets/fonts.css';
    @import '@collexworld/assets/global.css';
    ```
  - Tailwind config extend:

    ```ts
    // tailwind.config.ts
    import base from '@collexworld/assets/tailwind.base.config';
    import type { Config } from 'tailwindcss';

    export default {
      ...base,
      content: ['./src/**/*.{ts,tsx}', '../../packages/ui/dist/**/*.{js,ts,tsx}'],
      theme: {
        ...base.theme,
        extend: {},
      },
    } satisfies Config;
    ```

  - PostCSS config reuse:
    ```js
    // postcss.config.mjs
    import base from '@collexworld/assets/postcss.base.config';
    export default base;
    ```

- Development guidance
  - Keep this package framework-agnostic and style-only.
  - When adding new tokens, utilities, or base components, prefer Tailwind plugin/config updates here rather than duplicating in apps.
  - Ensure additions are generic and won’t leak app-specific logic.

### @collexworld/ui

TypeScript React component library built on Tailwind and Radix primitives.

- Build outputs: `dist/` (ESM/JS + types)
- Scripts
  - `pnpm dev` → `tsc --watch`
  - `pnpm build` → `tsc`
  - `pnpm lint` → eslint for `.ts,.tsx`
- Peer deps to install in consumers
  - React 18, `react-dom`
  - Radix UI primitives (`@radix-ui/react-*`)
  - `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `date-fns`, `react-day-picker`, `next-themes`, `sonner`, `usehooks-ts`

- Consumption from apps/packages

  ```ts
  import { Button } from '@collexworld/ui';
  ```

- Live development workflow
  1. In `packages/ui`: `pnpm dev` to emit `dist/` on change.
  2. In the consumer app: run the dev server. Workspace linking will resolve `@collexworld/ui` to the local `dist`.
  3. Ensure Tailwind content globs include the built files if needed: `packages/ui/dist/**/*.{js,ts,tsx}`.

- UI development conventions
  - Prefer composing new UI using existing primitives from `@collexworld/ui`.
  - If you need a new shadcn-style component:
    - First, search `packages/ui` for an existing component with similar behavior.
    - If found, extend or compose it rather than duplicating.
    - If not found, implement it in `packages/ui` so it can be reused across apps.
  - Keep components accessible (A11y) and theme-aware; follow Tailwind tokens from `@collexworld/assets`.
  - Keep prop APIs small and composable. Favor composition over large prop surfaces.

- When to implement in an app vs in `@collexworld/ui`
  - App-only visuals with one-off logic → implement in the app.
  - Generic, reusable UI (buttons, menus, forms, overlays, cards, lists, etc.) → implement in `@collexworld/ui`.

### @collexworld/eslint-config (private)

Shared ESLint configuration. Consumers should import the preset rather than copy rules.

- Export: `@collexworld/eslint-config/react`
- Usage in `eslint.config.mjs`:
  ```js
  import collexworld from '@collexworld/eslint-config/react';
  export default collexworld;
  ```
- Development guidance
  - Keep rules minimal and consistent across packages.
  - Avoid app-specific overrides here; place them in the app if truly necessary.

### @collexworld/jest (private)

Shared Jest base configuration for packages/apps using React + TS + JSDOM.

- Export: `@collexworld/jest/jest.config.base`
- Usage in `jest.config.ts`:
  ```ts
  import base from '@collexworld/jest/jest.config.base';
  export default base;
  ```
- Development guidance
  - Centralize setup and common transforms here.
  - Keep the base strict; allow minimal per-app overrides only when required.

## General development workflow

1. Install dependencies

```bash
pnpm install
```

2. Develop packages

- UI library:
  ```bash
  pnpm turbo run dev --filter=@collexworld/ui
  ```
- Update assets (Tailwind/PostCSS):
  - Edit files in `packages/assets` and restart app dev server if required.

3. Run an app (example: web-app)

```bash
pnpm --filter ./apps/web-app dev
```

4. Build

```bash
pnpm turbo run build
```

5. Lint & Typecheck

```bash
pnpm turbo run lint
pnpm turbo run typecheck
```

6. Tests (if configured in an app/package)

```bash
pnpm turbo run test
```

## Conventions and best practices

- Search before adding
  - Before adding a new component, search `packages/ui` for an existing equivalent or composable primitives.
  - Before adding new utility classes/tokens, check `packages/assets` to avoid duplication.

- Keep shared concerns in packages
  - Reusable UI → `@collexworld/ui`
  - Styling tokens, base layers, and PostCSS/Tailwind setup → `@collexworld/assets`
  - Lint rules → `@collexworld/eslint-config`
  - Jest base setup → `@collexworld/jest`

- Tailwind in apps
  - Extend from `@collexworld/assets/tailwind.base.config`.
  - Ensure `content` globs include any imported built files (e.g., UI `dist`).

- Accessibility & Theming
  - Follow Radix accessibility patterns.
  - Respect theme variables defined by the base Tailwind config.

- Publishing (optional)
  - Public packages: `@collexworld/ui`, `@collexworld/assets`.
  - Private, not published: `@collexworld/eslint-config`, `@collexworld/jest`.
  - Example:
    ```bash
    cd packages/ui && pnpm build && npm publish --access public
    cd packages/assets && npm publish --access public
    ```

- Troubleshooting
  - Tailwind classes missing → check `content` globs and import order.
  - UI not reflecting changes → ensure `packages/ui` is running `pnpm dev` to emit `dist/`.
  - Peer dependency warnings → install peers in the consumer app/package.
  - Cache issues → consider `pnpm turbo run clean` then reinstall.

## Quick start (apps/web-app)

```bash
# 1) Install
pnpm install

# 2) Dev UI package in watch mode
pnpm turbo run dev --filter=@collexworld/ui

# 3) Run the app
pnpm --filter ./apps/web-app dev

# 4) Import shared assets and UI
# In the app entry/globals
@import '@collexworld/assets/fonts.css';
@import '@collexworld/assets/global.css';

# In components
import { Button } from '@collexworld/ui'
```
