import React, {
  Suspense,
} from 'react';
import { Element } from 'nav-frontend-typografi';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import ErrorBoundary from './ErrorBoundary';

interface OwnProps {
  importModuleFederationComp: () => Promise<any>;
  importPackageComp: () => Promise<any>;
}

const DynamicLoader = <COMPONENT_PROPS, >({
  importModuleFederationComp,
  importPackageComp,
  ...props
}: OwnProps & COMPONENT_PROPS) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  if (process.env.NODE_ENV !== 'development') {
    const PackageComp = React.lazy(importPackageComp);
    return (
      // @ts-ignore Fiks cannot be used as a JSX component
      <ErrorBoundary errorMessageCallback={addErrorMessage}>
        <Suspense fallback={<LoadingPanel />}>
          <PackageComp {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  }

  const ModuleFedComp = React.lazy(importModuleFederationComp);

  return (
    // @ts-ignore Fiks cannot be used as a JSX component
    <ErrorBoundary
      errorMessageCallback={(error: any) => {
        addErrorMessage(error);
      }}
      doNotShowErrorMessageWhenScriptLoadError
      fallback={() => {
        const PackageComp = React.lazy(importPackageComp);
        return (
          <Suspense fallback={<LoadingPanel />}>
            <PackageComp {...props} />
          </Suspense>
        );
      }}
    >
      <Suspense fallback={<LoadingPanel />}>
        <Element style={{ color: 'red' }}>Micro frontend</Element>
        <ModuleFedComp {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DynamicLoader;
