import React, { FunctionComponent } from 'react';

import HeaderWithErrorPanel, { QueryStrings } from '@fpsak-frontend/sak-dekorator';
import { useRestApiError, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';

interface OwnProps {
  queryStrings: QueryStrings;
  hideErrorMessages?: boolean;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
}

const Dekorator: FunctionComponent<OwnProps> = ({
  queryStrings,
  setSiteHeight,
  crashMessage,
  hideErrorMessages = false,
}) => {
  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  return (
    <HeaderWithErrorPanel
      navAnsattName={navAnsatt?.navn}
      removeErrorMessage={removeErrorMessages}
      hideErrorMessages={hideErrorMessages}
      setSiteHeight={setSiteHeight}
      errorMessages={errorMessages}
      queryStrings={queryStrings}
      crashMessage={crashMessage}
    />
  );
};

export default Dekorator;
