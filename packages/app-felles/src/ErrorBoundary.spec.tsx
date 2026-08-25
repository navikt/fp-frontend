import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from './ErrorBoundary';
import { ErrorType, type FpError } from './restApiError/errorType';

const TestComponent = () => {
  throw new Error('Testfeil');
};

describe('ErrorBoundary', () => {
  it('skal kalle callback og vise fallback utan å rapportere feilen sjølv', () => {
    const errorMessageCallback = vi.fn<(error: FpError) => void>();

    const { rerender } = render(
      <ErrorBoundary key="feil" errorMessage="Noko gjekk gale" errorMessageCallback={errorMessageCallback}>
        <TestComponent />
      </ErrorBoundary>,
      { onCaughtError: () => undefined },
    );

    expect(screen.getByText('Noko gjekk gale')).toBeInTheDocument();

    expect(errorMessageCallback).toHaveBeenCalledTimes(1);
    const callbackError = errorMessageCallback.mock.calls[0]![0];
    expect(callbackError.type).toBe(ErrorType.GENERAL_ERROR);
    if (callbackError.type !== ErrorType.GENERAL_ERROR) {
      throw new Error('Forventa generell feil');
    }
    expect(callbackError.message).toContain('TestComponent');

    rerender(
      <ErrorBoundary key="reset" errorMessage="Noko gjekk gale" errorMessageCallback={errorMessageCallback}>
        <div>Innhald etter reset</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Innhald etter reset')).toBeInTheDocument();
  });
});
