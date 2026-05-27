# Copilot Instructions for fp-frontend

Monorepo for NAV's foreldrepenger saksbehandler frontend (FPSAK). Built with Yarn workspaces + Turborepo.

## Team context

- [fp-context](https://github.com/navikt/fp-context) — Team Foreldrepenger
  domain, architecture, conventions. Source of truth for shared context.
- GitHub Copilot Space: `navikt/TeamForeldrepenger` — same content attached
  for AI grounding (chat, IDE agent, CLI).
- Backend counterparts: [fp-sak](https://github.com/navikt/fp-sak) and
  fplos; types are generated from the fpsak and fplos OpenAPI specs (see
  `yarn generate`).

## Setup

- Node version is pinned in `.tool-versions` (currently Node 24); package manager is Yarn 4 (declared via `packageManager` in `package.json`).
- Internal `@navikt/*` packages are pulled from GitHub Packages. A `~/.yarnrc.yml` with `npmAuthToken` for the `navikt` scope is required before `yarn install`. See README for the snippet.

## Commands

```bash
# From repo root (runs across all packages via Turborepo)
yarn build          # Build all packages
yarn test           # Run all tests
yarn tsc            # Type-check all packages
yarn eslint         # Lint all packages
yarn eslint:fix     # Lint and autofix
yarn prettier:fix   # Format all packages
yarn stylelint      # Lint CSS modules

# Dev servers (from root)
yarn dev                    # fp-frontend (main app) on localhost:9010
yarn dev-avdelingsleder     # fp-avdelingsleder
yarn dev-journalforing      # fp-journalforing

# From within a specific package directory
yarn test                   # Run tests for that package only
yarn test MyComponent       # Run tests matching a name pattern (Vitest)
yarn storybook              # Start Storybook for that package

# Type generation
yarn generate               # Sync TS types from deployed fpsak/fplos OpenAPI specs
yarn generate:local         # Sync from local fpsak (port 8080) and fplos (port 8071)
```

## Architecture

### Monorepo layout

```
apps/
  fp-frontend/         # Main saksbehandler UI (@navikt/fp-frontend)
  fp-avdelingsleder/   # Avdelingsleder UI
  fp-journalforing/    # Journalføring UI
packages/
  fakta/*/             # Fakta panels — one package per domain (e.g. arbeid-og-inntekt, medlemskap)
  prosess/*/           # Prosess panels — one package per process step (e.g. uttak, vedtak)
  sak/*/               # Sak-level UI (visittkort, historikk, meny-*, dekorator, etc.)
  types/               # Auto-generated TypeScript types from fpsak and fplos OpenAPI specs
  kodeverk/            # Enum-style code values (AksjonspunktKode, etc.)
  konstanter/          # Shared constants
  ui-komponenter/      # Shared custom UI components
  storybook-utils/     # Story decorators and helpers (withPanelData, withMellomlagretFormData, lagArbeidsgiver, etc.)
  utils/               # Shared utilities
  utils-test/          # Test utilities
  config/
    eslint/            # Shared ESLint flat config (packages/config/eslint/eslint.config.mjs)
    typescript/        # Shared tsconfig.json
    vite/              # Shared vite.config.mjs (createSharedAppConfig, createSharedPackagesConfig)
```

### How panels connect to the main app

Each `fakta/*` and `prosess/*` package exports a single index component (e.g. `ArbeidOgInntektFaktaIndex`). The main app (`apps/fp-frontend/src/behandling/`) assembles these into behandling views per ytelsetype (foreldrepenger, engangsstonad, klage, anke, etc.). API calls are defined centrally in `apps/fp-frontend/src/data/behandlingApi.ts` and `fagsakApi.ts` using TanStack Query's `queryOptions`.

### TypeScript types

All DTO types from upstream services are in `packages/types`. The files `src/fpsak.gen.ts` and `src/los/fplos.gen.ts` are auto-generated from OpenAPI specs — do not edit either manually. Run `yarn generate` to update from the live dev environment, or `yarn generate:local` when fpsak (port 8080) and fplos (port 8071) run locally.

## Key conventions

### No default exports

All exports must be named exports. ESLint enforces `import/no-default-export` everywhere except `.stories.tsx` files and `eslint.config.mjs`.

### Component definition style

Use arrow function components. The `FC` and `FunctionComponent` types from React are banned by ESLint.

```tsx
// ✅ Correct
const MyComponent = ({ prop }: Props) => <div>{prop}</div>;

// ❌ Wrong
const MyComponent: FC<Props> = ({ prop }) => <div>{prop}</div>;
```

### Non-null assertions

Prefer non-null assertions only on array/object index access (`arr[0]!`, `obj[key]!`). ESLint bans them on plain variables and direct property access (`value!`, `obj.prop!`).

### Import order (enforced by ESLint via `simple-import-sort`)

1. `react`
2. External packages (including `@navikt/fp-*`, `@storybook/*`, etc.)
3. Internal alias imports (`@/...`)
4. Relative imports
5. CSS modules (`*.module.css`)
6. JSON files

### Testing pattern — stories as test fixtures

Tests use `composeStories` from `@storybook/react` to render story variants rather than duplicating test data setup. The `describe` block name must match the filename (enforced by a custom ESLint rule).

```tsx
// MyComponent.spec.tsx
import { composeStories } from '@storybook/react';
import * as stories from './MyComponent.stories';

const { Default, WithError } = composeStories(stories);

describe('MyComponent', () => {
  // must match filename base
  it('should ...', async () => {
    render(<Default />);
    // ...
  });
});
```

### Stories pattern

Story files use `withPanelData` and `withMellomlagretFormData` decorators from `@navikt/fp-storybook-utils`. Callback props typed as `() => Promise<void>` should use `action(...)` from `storybook/actions`.

### CSS

CSS Modules with `.module.css` files. Class names accessed via camelCase (`styles.myClass`). Stylelint with `@navikt/aksel-stylelint` is enforced.

### UI components

Use NAV Aksel Design System (`@navikt/ds-react`, `@navikt/aksel-icons`). Tailwind CSS v4 is available for layout utilities.

### Forms

`react-hook-form` combined with `@navikt/ft-form-hooks` and `@navikt/ft-form-validators`.

### Internationalisation

`react-intl`. Message strings for each app live under the `i18n/` folder in that app.

### Vite mode (local development against deployed backend)

Run `yarn dev` in `apps/fp-frontend`, then visit the deployed dev environment (e.g. `https://fpsak.intern.dev.nav.no/vite-on`) to set the cookie that redirects the server to serve JS from `localhost:9010`.

### Turborepo dependency placement

Install dependencies in the package(s) that actually use them, not at the repo root. This keeps Turborepo's caching and task graph correct. See https://turborepo.com/docs/crafting-your-repository/managing-dependencies.
