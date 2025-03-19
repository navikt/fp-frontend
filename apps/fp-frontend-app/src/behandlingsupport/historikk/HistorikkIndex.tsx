import type { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import type { Historikkinnslag } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { createLocationForSkjermlenke, pathToBehandling } from '../../app/paths';
import { useFagsakApi } from '../../data/fagsakApi';

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  historikkinnslagFpSak?: Historikkinnslag[];
  historikkinnslagFpTilbake?: Historikkinnslag[];
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
}

export const HistorikkIndex = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
  toggleVisUtvidetBehandlingDetaljerKnapp,
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
      utvidEllerMinskBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
    />
  );
};
