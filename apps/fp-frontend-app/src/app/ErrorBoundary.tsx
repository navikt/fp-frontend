import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorMessage } from '@navikt/ds-react';
import { captureException, withScope } from '@sentry/browser';

import { ErrorPage } from '@navikt/fp-sak-infosider';

const isDevelopment = import.meta.env.MODE === 'development';

interface OwnProps {
  errorMessageCallback: (error: any) => void;
  children: ReactNode;
  errorMessage?: string;
  showChild?: boolean;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<OwnProps, State> {
  static defaultProps = {
    showChild: false,
  };

  constructor(props: OwnProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    const { errorMessageCallback } = this.props;

    if (!isDevelopment) {
      withScope(scope => {
        Object.keys(info).forEach(key => {
          // @ts-expect-error Fiks
          scope.setExtra(key, info[key]);
          captureException(error);
        });
      });
    }

    const errorStrings = info.componentStack
      ? [
          error.toString(),
          info.componentStack
            .split('\n')
            .map(line => line.trim())
            .find(line => !!line),
        ].join(' ')
      : error.toString();

    errorMessageCallback(errorStrings);

    // eslint-disable-next-line no-console
    console.error(error);
  }

  override render(): ReactNode {
    const { children, showChild, errorMessage } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      if (errorMessage) {
        return (
          <ErrorMessage size="small" style={{ margin: '20px' }}>
            {errorMessage}
          </ErrorMessage>
        );
      }
      return (
        <>
          {showChild && <div style={{ marginTop: '150px' }}>{children}</div>}
          <ErrorPage />
        </>
      );
    }

    return children;
  }
}
