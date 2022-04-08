import React, {
  Suspense,
} from 'react';
import { Element } from 'nav-frontend-typografi';

import { useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import ErrorBoundary from './ErrorBoundary';

interface OwnProps {
  altComp1: () => Promise<any>;
  altComp2: () => Promise<any>;
}

const DynamicLoader = <COMPONENT_PROPS, >({
  altComp1,
  altComp2,
  ...props
}: OwnProps & COMPONENT_PROPS) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  if (process.env.NODE_ENV !== 'development') {
    const BeregningFaktaIndex = React.lazy(altComp2);
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

  const BeregningFaktaIndex = React.lazy(altComp1);

  return (
    <ErrorBoundary
      errorMessageCallback={(error: any) => {
        addErrorMessage(error);
      }}
      doNotShowErrorMessageWhenScriptLoadError
      fallback={() => {
        const Test = React.lazy(altComp2);
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
