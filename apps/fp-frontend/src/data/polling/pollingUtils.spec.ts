import { HTTPError, type KyResponse, type NormalizedOptions } from 'ky';

import { doGetRequest } from '../fagsakApi';
import { doPolling, PollingTimeoutError } from './pollingUtils';

vi.mock('../fagsakApi', () => ({
  doGetRequest: vi.fn(),
}));

const lagRespons = (status = 202, location: string | null = '/polling'): KyResponse =>
  new Response(null, {
    status,
    headers: location === null ? {} : { location },
  }) as KyResponse;

const lagHttpFeil = (data?: unknown) => {
  const feil = new HTTPError(
    new Response(null, { status: 500 }),
    new Request('https://www.test.com/polling'),
    {} as NormalizedOptions,
  );
  feil.data = data;
  return feil;
};

describe('pollingUtils', () => {
  const behandling = { status: 'OPPRETTET' };
  const ventestatus = { status: 'PENDING', pollIntervalMillis: 1 };

  beforeEach(() => {
    vi.resetAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('skal registrere én operasjon frem til data er hentet uten venting', async () => {
    const forespørsel = Promise.withResolvers<typeof behandling>();
    vi.mocked(doGetRequest).mockReturnValue(forespørsel.promise);
    const setPending = vi.fn();

    const polling = doPolling(lagRespons(), setPending);

    expect(setPending.mock.calls).toEqual([[true]]);
    forespørsel.resolve(behandling);

    await expect(polling).resolves.toEqual(behandling);
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it('skal registrere én operasjon gjennom flere pollingforsøk', async () => {
    vi.mocked(doGetRequest)
      .mockResolvedValueOnce(ventestatus)
      .mockResolvedValueOnce(ventestatus)
      .mockResolvedValueOnce(behandling);
    const setPending = vi.fn();

    const polling = doPolling(lagRespons(), setPending);
    await vi.runAllTimersAsync();

    await expect(polling).resolves.toEqual(behandling);
    expect(doGetRequest).toHaveBeenCalledTimes(3);
    expect(doGetRequest).toHaveBeenCalledWith('/polling');
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it.each([
    ['HTTP 500 uten responsdata', () => lagHttpFeil()],
    ['HTTP 500 med tekst', () => lagHttpFeil('Intern feil')],
    ['HTTP 500 med null', () => lagHttpFeil(null)],
    ['nettverksfeil', () => new TypeError('Failed to fetch')],
  ])('skal avslutte ventestatus og bevare %s etter polling', async (_, lagFeil) => {
    const feil = lagFeil();
    vi.mocked(doGetRequest).mockResolvedValueOnce(ventestatus).mockRejectedValueOnce(feil);
    const setPending = vi.fn();

    const polling = doPolling(lagRespons(), setPending);
    await Promise.all([expect(polling).rejects.toBe(feil), vi.runAllTimersAsync()]);

    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it('skal avslutte ventestatus ved feil i første pollingforespørsel', async () => {
    const feil = lagHttpFeil();
    vi.mocked(doGetRequest).mockRejectedValueOnce(feil);
    const setPending = vi.fn();

    await expect(doPolling(lagRespons(), setPending)).rejects.toBe(feil);

    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it.each(['HALTED', 'DELAYED'])('skal beholde ventestatus til fallback for %s er ferdig', async status => {
    const fallback = Promise.withResolvers<typeof behandling>();
    vi.mocked(doGetRequest)
      .mockRejectedValueOnce(lagHttpFeil({ status, location: '/behandling' }))
      .mockReturnValueOnce(fallback.promise);
    const setPending = vi.fn();

    const polling = doPolling(lagRespons(), setPending);
    await vi.runAllTimersAsync();

    expect(doGetRequest).toHaveBeenLastCalledWith('/behandling');
    expect(setPending.mock.calls).toEqual([[true]]);

    fallback.resolve(behandling);
    await expect(polling).resolves.toEqual(behandling);
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it('skal avslutte ventestatus og bevare feil fra fallback', async () => {
    const feil = new TypeError('Failed to fetch');
    vi.mocked(doGetRequest)
      .mockRejectedValueOnce(lagHttpFeil({ status: 'HALTED', location: '/behandling' }))
      .mockRejectedValueOnce(feil);
    const setPending = vi.fn();

    await expect(doPolling(lagRespons(), setPending)).rejects.toBe(feil);

    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it.each(['HALTED', 'DELAYED'])('skal bevare %s-feil uten fallbackadresse', async status => {
    const feil = lagHttpFeil({ status });
    vi.mocked(doGetRequest).mockRejectedValueOnce(feil);
    const setPending = vi.fn();

    await expect(doPolling(lagRespons(), setPending)).rejects.toBe(feil);

    expect(doGetRequest).toHaveBeenCalledTimes(1);
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it.each([
    [200, '/polling', 'Responderte ikke med 202 - Accepted'],
    [202, null, 'Location i response er ikke angitt'],
  ])('skal avslutte ventestatus ved ugyldig startrespons (%s, %s)', async (status, location, melding) => {
    const setPending = vi.fn();

    await expect(doPolling(lagRespons(status, location), setPending)).rejects.toThrow(melding);

    expect(doGetRequest).not.toHaveBeenCalled();
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });

  it('skal avslutte ventestatus ved pollingtimeout', async () => {
    vi.mocked(doGetRequest).mockResolvedValue(ventestatus);
    const setPending = vi.fn();

    const polling = doPolling(lagRespons(), setPending);
    await Promise.all([expect(polling).rejects.toEqual(new PollingTimeoutError('/polling')), vi.runAllTimersAsync()]);

    expect(doGetRequest).toHaveBeenCalledTimes(201);
    expect(setPending.mock.calls).toEqual([[true], [false]]);
  });
});
