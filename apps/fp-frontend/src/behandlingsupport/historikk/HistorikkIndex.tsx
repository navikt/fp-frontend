import type { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router';

import { useQuery } from '@tanstack/react-query';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk';
import type { Historikkinnslag, HistorikkinnslagDtoFpTilbake } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { createLocationForSkjermlenke, pathToBehandling } from '../../app/paths';
import { useFagsakApi } from '../../data/fagsakApi';
import { SupportHeaderAndContent } from '../SupportHeader';

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  historikkinnslagFpSak?: Historikkinnslag[];
  historikkinnslagFpTilbake?: HistorikkinnslagDtoFpTilbake[];
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
}

export const HistorikkIndex = ({
  saksnummer,
  behandlingUuid,
  historikkinnslagFpSak,
  historikkinnslagFpTilbake,
  toggleVisUtvidetBehandlingDetaljerKnapp,
}: Props) => {
  const intl = useIntl();
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
    <SupportHeaderAndContent
      tekst={intl.formatMessage({ id: 'HistorikkIndex.Historikk' })}
      antall={(historikkinnslagFpSak?.length ?? 0) + (historikkinnslagFpTilbake?.length ?? 0)}
      brukPadding={false}
      toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
    >
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
    </SupportHeaderAndContent>
  );
};
