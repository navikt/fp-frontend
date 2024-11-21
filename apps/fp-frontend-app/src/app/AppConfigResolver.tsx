import React, { ReactElement, useEffect } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { requestFagsakApi } from '../data/fagsakContextApi';
import { useHentInitLenker } from './useHentInitLenker';
import { useHentKodeverk } from './useHentKodeverk';

interface Props {
  children: ReactElement;
}

/**
 * Komponent som henter backend-data som skal kunne aksesseres globalt i applikasjonen. Denne dataen blir kun hentet en gang.
 */
export const AppConfigResolver = ({ children }: Props) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  useEffect(() => {
    requestFagsakApi.setAddErrorMessageHandler(addErrorMessage);
  }, []);

  const [harHentetFerdigInitLenker, harFpsakInitKallFeilet] = useHentInitLenker();

  const harHentetFerdigKodeverk = useHentKodeverk(harHentetFerdigInitLenker);

  const erFerdig = harHentetFerdigInitLenker && harHentetFerdigKodeverk;

  return harFpsakInitKallFeilet || erFerdig ? children : <LoadingPanel />;
};
