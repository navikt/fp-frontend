import { createQueryClient } from './queryUtils';

describe('queryUtils', () => {
  beforeEach(() => {
    vi.stubEnv('MODE', 'production');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('skal ikke prøve en skrivende mutasjon på nytt', async () => {
    const mutationFn = vi.fn().mockRejectedValue(new Error('Skriving feilet'));
    const queryClient = createQueryClient(vi.fn());
    const mutation = queryClient.getMutationCache().build(queryClient, {
      mutationFn,
      retryDelay: 0,
    });

    await expect(mutation.execute(undefined)).rejects.toThrow('Skriving feilet');

    expect(mutationFn).toHaveBeenCalledTimes(1);
  });

  it('skal fortsatt prøve en lese-POST på nytt', async () => {
    const lesePost = vi.fn().mockRejectedValue(new Error('Lesing feilet'));
    const queryClient = createQueryClient(vi.fn());

    await expect(
      queryClient.fetchQuery({
        queryKey: ['lese-post'],
        queryFn: lesePost,
        retryDelay: 0,
      }),
    ).rejects.toThrow('Lesing feilet');

    expect(lesePost).toHaveBeenCalledTimes(4);
  });
});
