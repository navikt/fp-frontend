import React, { ErrorInfo, LazyExoticComponent } from 'react';
import { captureException, withScope } from '@sentry/browser';
import { Element } from 'nav-frontend-typografi';
import { RestApiErrorDispatchContext } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

type State = { hasError: boolean; };

class DynamicLoader<Props> extends React.Component<Props, State> {
  static contextType = RestApiErrorDispatchContext;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (error?.name === 'ScriptExternalLoadError') {
      return;
    }

    withScope((scope) => {
      Object.keys(info).forEach((key) => {
        scope.setExtra(key, info[key]);
        captureException(error);
      });
    });

    const dispatch = this.context;
    const message = [
      error.toString(),
      info.componentStack
        .split('\n')
        .map((line) => line.trim())
        .find((line) => !!line),
    ].join(' ');
    dispatch({ type: 'add', data: message });

    // eslint-disable-next-line no-console
    console.error(error);
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  doRender(Comp: LazyExoticComponent<any>, CompMF: LazyExoticComponent<any>) {
    const { hasError } = this.state;
    const isProd = process.env.NODE_ENV !== 'development';
    const visPublisertModul = hasError || isProd;
    const SelectedComp = visPublisertModul ? Comp : CompMF;
    return (
      <React.Suspense fallback={<LoadingPanel />}>
        {!visPublisertModul && (<Element style={{ color: 'red' }}>Micro frontend</Element>)}
        <SelectedComp {...this.props} />
      </React.Suspense>
    );
  }
}

export default DynamicLoader;
