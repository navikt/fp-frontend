import React, { FunctionComponent, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import { Historikkinnslag } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { pathToBehandling, createLocationForSkjermlenke } from '../../app/paths';

interface OwnProps {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  historikkinnslagFpSak?: Historikkinnslag[];
  historikkinnslagFpTilbake?: Historikkinnslag[];
  kjønn: string;
}

const HistorikkIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
  kjønn,
}) => {
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

export default HistorikkIndex;
