import React, { useCallback } from 'react';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk-v2';
import { HistorikkinnslagV2 } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { useLocation } from 'react-router-dom';
import { createLocationForSkjermlenke, pathToBehandling } from '../../app/paths';

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  historikkinnslagFpSak?: HistorikkinnslagV2[];
  historikkinnslagFpTilbake?: HistorikkinnslagV2[];
  kjønn: string;
}

export const HistorikkIndex = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
  kjønn,
}: Props) => {
  const alleKodeverkFpSak = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);

  const location = useLocation();
  const getBehandlingLocation = useCallback(
    (bUuid: string) => ({
      ...location,
      pathname: pathToBehandling(saksnummer, bUuid),
    }),
    [location],
  );

  return (
    <HistorikkSakIndex
      historikkFpSak={historikkinnslagFpSak}
      historikkFpTilbake={historikkinnslagFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingUuid={behandlingUuid}
      kjønn={kjønn}
    />
  );
};
