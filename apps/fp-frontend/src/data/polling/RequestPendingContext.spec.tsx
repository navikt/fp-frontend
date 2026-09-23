import { act, renderHook } from '@testing-library/react';
import type { KyResponse } from 'ky';

import { doGetRequest } from '../fagsakApi';
import { doPolling } from './pollingUtils';
import { RequestPendingProvider, useRequestPendingContext } from './RequestPendingContext';

vi.mock('../fagsakApi', () => ({
  doGetRequest: vi.fn(),
}));

const renderContext = () =>
  renderHook(useRequestPendingContext, {
    wrapper: ({ children }) => (
      <RequestPendingProvider>
        <>{children}</>
      </RequestPendingProvider>
    ),
  });

describe('RequestPendingContext', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('skal ha en stabil funksjon for å registrere aktive operasjoner', () => {
    const { result, rerender } = renderContext();
    const { setIsRequestPending } = result.current;

    expect(result.current.isRequestPending).toBe(false);

    act(() => setIsRequestPending(true));
    rerender();

    expect(result.current.isRequestPending).toBe(true);
    expect(result.current.setIsRequestPending).toBe(setIsRequestPending);

    act(() => setIsRequestPending(false));

    expect(result.current.isRequestPending).toBe(false);
    expect(result.current.setIsRequestPending).toBe(setIsRequestPending);
  });

  it.each([false, true])(
    'skal beholde ventestatus til begge operasjoner er ferdige (første feiler: %s)',
    async førsteFeiler => {
      const behandling = { status: 'OPPRETTET' };
      const første = Promise.withResolvers<typeof behandling>();
      const andre = Promise.withResolvers<typeof behandling>();
      vi.mocked(doGetRequest).mockReturnValueOnce(første.promise).mockReturnValueOnce(andre.promise);
      const { result } = renderContext();
      const respons = new Response(null, { status: 202, headers: { location: '/polling' } }) as KyResponse;
      let førstePolling: ReturnType<typeof doPolling>;
      let andrePolling: ReturnType<typeof doPolling>;

      act(() => {
        førstePolling = doPolling(respons, result.current.setIsRequestPending);
        andrePolling = doPolling(respons, result.current.setIsRequestPending);
      });

      expect(result.current.isRequestPending).toBe(true);

      await act(async () => {
        const feil = new TypeError('Failed to fetch');
        const ferdig = Promise.allSettled([førstePolling]);
        if (førsteFeiler) {
          første.reject(feil);
        } else {
          første.resolve(behandling);
        }
        expect(await ferdig).toEqual([
          førsteFeiler ? { status: 'rejected', reason: feil } : { status: 'fulfilled', value: behandling },
        ]);
      });

      expect(result.current.isRequestPending).toBe(true);

      await act(async () => {
        andre.resolve(behandling);
        await andrePolling;
      });

      expect(result.current.isRequestPending).toBe(false);
    },
  );
});
