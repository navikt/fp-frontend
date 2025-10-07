import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorMessage } from '@navikt/ds-react';
import { captureException, withScope } from '@sentry/browser';

import { ErrorPage } from '@navikt/fp-sak-infosider';

import { ErrorType, type FpError } from './restApiError/errorType';

const isDevelopment = import.meta.env.MODE === 'development';

interface Props {
  errorMessageCallback: (error: FpError) => void;
  children: ReactNode;
  errorMessage?: string;
  showChild?: boolean;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  static defaultProps = {
    showChild: false,
  };

  constructor(props: Props) {
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
        for (const entry of Object.entries(info)) {
          scope.setExtra(entry[0], entry[1]);
          captureException(error);
        }
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

    errorMessageCallback({ type: ErrorType.GENERAL_ERROR, message: errorStrings });

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
