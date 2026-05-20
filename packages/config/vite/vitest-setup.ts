import { setProjectAnnotations } from '@storybook/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { beforeAll, expect, vi } from 'vitest';

import * as globalStorybookConfig from '../../../.storybook/preview-storybook';

// Node 26+ defines localStorage/sessionStorage as native getters on globalThis
// that return undefined (unless --localstorage-file is provided). Vitest's
// populateGlobal skips overriding properties already "in global", so jsdom's
// implementations never get exposed. Manually wire them up from the jsdom window.
const jsdomWindow = (globalThis as unknown as { jsdom?: { window: Window & typeof globalThis } }).jsdom?.window;
if (jsdomWindow) {
  for (const key of ['localStorage', 'sessionStorage'] as const) {
    if (globalThis[key] === undefined) {
      Object.defineProperty(globalThis, key, {
        get: () => jsdomWindow[key],
        configurable: true,
        enumerable: true,
      });
    }
  }
}

expect.extend(matchers);

const annotations = setProjectAnnotations(globalStorybookConfig);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);

class MockResizeObserver {
  disconnect = vi.fn();
  observe = vi.fn();
  unobserve = vi.fn();
}

globalThis.ResizeObserver = globalThis.ResizeObserver || MockResizeObserver;
