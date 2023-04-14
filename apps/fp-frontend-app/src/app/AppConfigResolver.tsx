import React, { FunctionComponent, ReactElement, useEffect } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { requestApi } from '../data/fpsakApi';
import useHentInitLenker from './useHentInitLenker';
import useHentKodeverk from './useHentKodeverk';

interface OwnProps {
  children: ReactElement;
}

/**
 * Komponent som henter backend-data som skal kunne aksesseres globalt i applikasjonen. Denne dataen blir kun hentet en gang.
 */
const AppConfigResolver: FunctionComponent<OwnProps> = ({ children }) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  useEffect(() => {
    requestApi.setAddErrorMessageHandler(addErrorMessage);
  }, []);

  const [harHentetFerdigInitLenker, harFpsakInitKallFeilet] = useHentInitLenker();

  const harHentetFerdigKodeverk = useHentKodeverk(harHentetFerdigInitLenker);

  const erFerdig = harHentetFerdigInitLenker && harHentetFerdigKodeverk;

  return harFpsakInitKallFeilet || erFerdig ? children : <LoadingPanel />;
};

export default AppConfigResolver;
