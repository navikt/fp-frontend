import { ReactElement } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { initFetchFpTilbakeOptions, initFetchOptions } from '../data/fagsakApi';
import { useHentKodeverk } from './useHentKodeverk';

interface Props {
  children: ReactElement;
}

/**
 * Komponent som henter backend-data som skal kunne aksesseres globalt i applikasjonen. Denne dataen blir kun hentet en gang.
 */
export const AppConfigResolver = ({ children }: Props) => {
  const { status } = useQuery(initFetchOptions());
  const { status: fpTilbakeStatus } = useQuery(initFetchFpTilbakeOptions());

  const harFpsakInitKallFeilet = status === 'error';
  const harHentetFerdigInitLenker =
    status === 'success' && (fpTilbakeStatus === 'success' || fpTilbakeStatus === 'error');

  const harHentetFerdigKodeverk = useHentKodeverk(harHentetFerdigInitLenker);

  const erFerdig = harHentetFerdigInitLenker && harHentetFerdigKodeverk;

  return harFpsakInitKallFeilet || erFerdig ? children : <LoadingPanel />;
};
