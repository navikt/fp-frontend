import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';

import { doGetRequest, getOppgaverTilBehandling } from '../../../data/fplosSaksbehandlerApi';
import { useOppgavePolling } from './useOppgavePolling';

vi.mock('../../../data/fplosSaksbehandlerApi', () => ({
  getOppgaverTilBehandling: vi.fn(),
  doGetRequest: vi.fn(),
}));

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
);

describe('useOppgavePolling', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.mocked(getOppgaverTilBehandling).mockResolvedValue(
      new Response(null, { status: 202, headers: { location: 'https://www.test.com/api/result' } }) as Awaited<
        ReturnType<typeof getOppgaverTilBehandling>
      >,
    );
    vi.mocked(doGetRequest).mockResolvedValue([]);
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.resetAllMocks();
  });

  it('skal vente før neste runde når backend svarer med tom liste', async () => {
    const { unmount } = renderHook(() => useOppgavePolling(1), { wrapper });

    await vi.advanceTimersByTimeAsync(1000);
    expect(getOppgaverTilBehandling).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(5000);
    expect(getOppgaverTilBehandling).toHaveBeenCalledTimes(2);

    unmount();
    await vi.advanceTimersByTimeAsync(10_000);
    expect(getOppgaverTilBehandling).toHaveBeenCalledTimes(2);
  });
});
