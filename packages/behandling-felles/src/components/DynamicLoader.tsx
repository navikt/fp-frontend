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
    const BeregningFaktaIndex = React.lazy(importPackageComp);
    return (
      <ErrorBoundary errorMessageCallback={addErrorMessage}>
        <Suspense fallback={<LoadingPanel />}>
          <BeregningFaktaIndex
            {...props}
          />
        </Suspense>
      </ErrorBoundary>
    );
  }

  const BeregningFaktaIndex = React.lazy(importModuleFederationComp);

  return (
    <ErrorBoundary
      errorMessageCallback={(error: any) => {
        addErrorMessage(error);
      }}
      doNotShowErrorMessageWhenScriptLoadError
      fallback={() => {
        const Test = React.lazy(importPackageComp);
        return (
          <Suspense fallback={<LoadingPanel />}>
            <Test
              {...props}
            />
          </Suspense>
        );
      }}
    >
      <Suspense fallback={<LoadingPanel />}>
        <Element style={{ color: 'red' }}>Micro frontend</Element>
        <BeregningFaktaIndex
          {...props}
        />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DynamicLoader;
