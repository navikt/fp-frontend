import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import 'vitest-canvas-mock';

expect.extend(matchers);

window.ResizeObserver =
  window.ResizeObserver ||
  vi.fn().mockImplementation(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    unobserve: vi.fn(),
  }));
