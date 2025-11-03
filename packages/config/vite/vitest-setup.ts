import { setProjectAnnotations } from '@storybook/react';
import * as matchers from '@testing-library/jest-dom/matchers';
import { beforeAll, expect, vi } from 'vitest';

import * as globalStorybookConfig from '../../../.storybook/preview-storybook';

import 'vitest-canvas-mock';

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
