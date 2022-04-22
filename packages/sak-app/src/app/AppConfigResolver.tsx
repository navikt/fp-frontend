import React, { FunctionComponent, ReactElement, useEffect } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { RestApiState, useRestApiErrorDispatcher } from '@fpsak-frontend/rest-api-hooks';

import { FpsakApiKeys, requestApi, restApiHooks } from '../data/fpsakApi';
import useHentInitLenker from './useHentInitLenker';
import useHentKodeverk from './useHentKodeverk';

interface OwnProps {
  children: ReactElement,
}

const NO_PARAMS = undefined;

/**
 * Komponent som henter backend-data som skal kunne aksesseres globalt i applikasjonen. Denne dataen blir kun hentet en gang.
 */
const AppConfigResolver: FunctionComponent<OwnProps> = ({
  children,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  useEffect(() => {
    requestApi.setAddErrorMessageHandler(addErrorMessage);
  }, []);

  const [harHentetFerdigInitLenker, harFpsakInitKallFeilet] = useHentInitLenker();

  const options = {
    suspendRequest: harFpsakInitKallFeilet || !harHentetFerdigInitLenker,
    updateTriggers: [harHentetFerdigInitLenker],
  };

  const { state: navAnsattState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.NAV_ANSATT, NO_PARAMS, options);
  const { state: behandlendeEnheterState } = restApiHooks.useGlobalStateRestApi(FpsakApiKeys.BEHANDLENDE_ENHETER, NO_PARAMS, options);

  const harHentetFerdigKodeverk = useHentKodeverk(harHentetFerdigInitLenker);

  const erFerdig = harHentetFerdigInitLenker
    && harHentetFerdigKodeverk
    && navAnsattState === RestApiState.SUCCESS
    && behandlendeEnheterState === RestApiState.SUCCESS;

  return harFpsakInitKallFeilet || erFerdig ? children : <LoadingPanel />;
};

export default AppConfigResolver;
