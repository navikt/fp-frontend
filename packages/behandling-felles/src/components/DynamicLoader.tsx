import React, {
  LazyExoticComponent, Component, ReactNode, ErrorInfo,
} from 'react';
import { Element } from 'nav-frontend-typografi';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { captureException, withScope } from '@sentry/browser';
import { RestApiErrorDispatchContext } from '@fpsak-frontend/rest-api-hooks';
import { ErrorPage } from '@fpsak-frontend/sak-infosider';

interface OwnPropsErrorBoundary {
  children: ReactNode;
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

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    const isScriptLoadError = error?.name === 'ScriptExternalLoadError';
    return { hasError: !isScriptLoadError };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (error?.name === 'ScriptExternalLoadError') {
      return;
    }
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
    dispatch({ type: 'add', data: message });

    // eslint-disable-next-line no-console
    console.error(error);
  }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <ErrorPage /> : children;
  }
}

type StateDynamicLoader = {
  hasError: boolean;
};

class DynamicLoader<Props> extends Component<Props, StateDynamicLoader> {
  static contextType = RestApiErrorDispatchContext;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  doRender(Comp: LazyExoticComponent<any>, CompMF: LazyExoticComponent<any>) {
    const { hasError } = this.state;
    const isProd = process.env.NODE_ENV !== 'development';
    const visPublisertModul = hasError || isProd;
    const SelectedComp = visPublisertModul ? Comp : CompMF;
    return (
      <React.Suspense fallback={<LoadingPanel />}>
        <>
          {!visPublisertModul && (<Element style={{ color: 'red' }}>Micro frontend</Element>)}
          <ErrorBoundary>
            <SelectedComp {...this.props} />
          </ErrorBoundary>
        </>
      </React.Suspense>
    );
  }
}

export default DynamicLoader;
