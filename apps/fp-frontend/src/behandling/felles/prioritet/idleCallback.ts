/**
 * Tynn wrapper rundt requestIdleCallback/cancelIdleCallback med fallback til
 * setTimeout for nettlesarar som manglar API-et (t.d. Safari). Brukt til å
 * planlegge prefetching av panel-data i ledige stunder, i staden for å
 * konkurrere med rendring av det aktive panelet.
 */

const FALLBACK_TIMEOUT_MS = 300;
const IDLE_TIMEOUT_MS = 2000;

export type IdleHandle = number;

export const planleggPåIdle = (callback: () => void): IdleHandle => {
  if (typeof globalThis.requestIdleCallback === 'function') {
    return globalThis.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
  }
  return globalThis.setTimeout(callback, FALLBACK_TIMEOUT_MS) as unknown as number;
};

export const avbrytPlanlagtIdle = (handle: IdleHandle): void => {
  if (typeof globalThis.cancelIdleCallback === 'function') {
    globalThis.cancelIdleCallback(handle);
    return;
  }
  globalThis.clearTimeout(handle);
};
