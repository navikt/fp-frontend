import { useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import { Historikkinnslag } from '@navikt/fp-types';

import { createLocationForSkjermlenke, pathToBehandling } from '../../app/paths';
import { useFagsakApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';

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
  const {
    kodeverkOptions,
    fptilbake: { kodeverkOptions: fptilbakeKodeverkOptions },
  } = useFagsakApi();
  const { data: alleKodeverkFpSak } = useQuery(kodeverkOptions());
  const { data: alleKodeverkFpTilbake } = useQuery(fptilbakeKodeverkOptions());

  const location = useLocation();
  const getBehandlingLocation = (bUuid: string) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bUuid),
  });

  return (
    <HistorikkSakIndex
      historikkFpSak={historikkinnslagFpSak}
      historikkFpTilbake={historikkinnslagFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={notEmpty(alleKodeverkFpSak)}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingUuid={behandlingUuid}
    />
  );
};
