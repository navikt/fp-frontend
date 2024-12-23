import React, { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import { Historikkinnslag } from '@navikt/fp-types';

import { createLocationForSkjermlenke, pathToBehandling } from '../../app/paths';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  historikkinnslagFpSak?: Historikkinnslag[];
  historikkinnslagFpTilbake?: Historikkinnslag[];
}

export const HistorikkIndex = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
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
    />
  );
};
