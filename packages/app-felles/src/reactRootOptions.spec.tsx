import { createRoot } from 'react-dom/client';

import { captureException } from '@nais/apm';
import { act } from '@testing-library/react';

import { ErrorBoundary } from './ErrorBoundary';
import { reactRootOptions } from './reactRootOptions';

vi.mock('@nais/apm', () => ({
  captureException: vi.fn(),
}));

const TestComponent = () => {
  throw new Error('Testfeil');
};

describe('reactRootOptions', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    document.body.replaceChildren();
  });

  const renderCaughtError = () => {
    const app = document.createElement('div');
    document.body.append(app);
    const root = createRoot(app, reactRootOptions);

    act(() => {
      root.render(
        <ErrorBoundary errorMessage="Noko gjekk gale" errorMessageCallback={vi.fn()}>
          <TestComponent />
        </ErrorBoundary>,
      );
    });

    return root;
  };

  it('skal rapportere ein fanga renderfeil til konsollen i lokal utvikling', () => {
    vi.stubEnv('DEV', true);
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    const root = renderCaughtError();

    expect(consoleError).toHaveBeenCalledTimes(1);
    expect(consoleError.mock.calls[0]?.[0]).toMatchObject({ message: 'Testfeil' });
    expect(captureException).not.toHaveBeenCalled();

    act(() => root.unmount());
  });

  it('skal rapportere ein fanga renderfeil nøyaktig éin gong til APM med React-kontekst', () => {
    vi.stubEnv('DEV', false);
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    const root = renderCaughtError();

    expect(captureException).toHaveBeenCalledTimes(1);
    const [reportedError, options] = vi.mocked(captureException).mock.calls[0]!;
    expect(reportedError).toBeInstanceOf(Error);
    expect((reportedError as Error).message).toBe('Testfeil');
    expect(String(options?.context?.['componentStack'])).toContain('TestComponent');
    expect(options?.context?.['errorBoundary']).toBe('ErrorBoundary');
    expect(consoleError).not.toHaveBeenCalled();

    act(() => root.unmount());
  });
});
