import React, {
  FunctionComponent, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import { Historikkinnslag } from '@navikt/fp-types';

import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import { pathToBehandling, createLocationForSkjermlenke } from '../../app/paths';

interface OwnProps {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  historikkinnslagFpSak?: Historikkinnslag[];
  historikkinnslagFpTilbake?: Historikkinnslag[];
}

const HistorikkIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
}) => {
  const alleKodeverkFpSak = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const location = useLocation();
  const getBehandlingLocation = useCallback((bUuid: string) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bUuid),
  }), [location]);

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

export default HistorikkIndex;
