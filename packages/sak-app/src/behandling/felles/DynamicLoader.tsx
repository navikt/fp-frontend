import React, {
  Component, ErrorInfo, ComponentType, useState, useCallback,
} from 'react';
import { Label } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { ErrorPage } from '@navikt/ft-sak-infosider';
import { captureException, withScope } from '@sentry/browser';
import { RestApiErrorDispatchContext } from '@fpsak-frontend/rest-api-hooks';

interface OwnPropsErrorBoundary {
  children: JSX.Element;
}

interface StateErrorBoundary {
  hasError: boolean;
}

class ErrorBoundary extends Component<OwnPropsErrorBoundary, StateErrorBoundary> {
  static contextType = RestApiErrorDispatchContext;

  constructor(props: OwnPropsErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    withScope((scope) => {
      Object.keys(info).forEach((key) => {
        // @ts-ignore Fiks
        scope.setExtra(key, info[key]);
        captureException(error);
      });
    });

    const message = [
      error.toString(),
      info.componentStack
        .split('\n')
        .map((line) => line.trim())
        .find((line) => !!line),
    ].join(' ');
    const dispatch = this.context;
    // @ts-ignore Fiks
    dispatch({ type: 'add', data: message });

    // eslint-disable-next-line no-console
    console.error(error);
  }

  render(): JSX.Element {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <ErrorPage /> : children;
  }
}

interface OwnPropsDynamicLoader {
  packageCompFn: () => Promise<any>
  federatedCompFn: () => Promise<any>
}

const DynamicLoader = <Props, >({
  packageCompFn,
  federatedCompFn,
  ...props
}: OwnPropsDynamicLoader & Props) => {
  const [hasError, setError] = useState(false);

  const pageLoader = useCallback((
    loadComponent: () => Promise<{ default: ComponentType<any> }>,
  ) => (): Promise<{ default: ComponentType<any> }> => new Promise((resolve, reject) => {
    loadComponent()
      .then((module) => resolve(module))
      .catch((error: Error) => {
        if (error?.name === 'ScriptExternalLoadError') {
          setError(true);
          return Promise.resolve();
        }
        return reject(error);
      });
  }), []);

  const visPublisertModul = hasError || federatedCompFn === undefined;
  const SelectedComp = visPublisertModul
    ? React.lazy(packageCompFn)
    : React.lazy(pageLoader(federatedCompFn));

  return (
    <React.Suspense fallback={<LoadingPanel />}>
      <>
        {!visPublisertModul && (<Label size="small" style={{ color: 'red' }}>Micro frontend</Label>)}
        <ErrorBoundary>
          <SelectedComp {...props} />
        </ErrorBoundary>
      </>
    </React.Suspense>
  );
};

export default DynamicLoader;
