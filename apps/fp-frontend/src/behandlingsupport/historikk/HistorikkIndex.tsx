import { type ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router';

import { Checkbox } from '@navikt/ds-react';
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

  const [filtrerPaBehandling, setFiltrerPaBehandling] = useState(false);
  const erFiltrert = !!behandlingUuid && filtrerPaBehandling;
  const historikkFpSak = erFiltrert
    ? historikkinnslagFpSak?.filter(h => h.behandlingUuid === behandlingUuid)
    : historikkinnslagFpSak;
  const historikkFpTilbake = erFiltrert
    ? historikkinnslagFpTilbake?.filter(h => h.behandlingUuid === behandlingUuid)
    : historikkinnslagFpTilbake;

  const location = useLocation();
  const getBehandlingLocation = (bUuid: string) => ({
    ...location,
    pathname: pathToBehandling(saksnummer, bUuid),
  });

  return (
    <SupportHeaderAndContent
      tekst={intl.formatMessage({ id: 'HistorikkIndex.Historikk' })}
      antall={(historikkFpSak?.length ?? 0) + (historikkFpTilbake?.length ?? 0)}
      brukPadding={false}
      toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
      headerHandlinger={
        !!behandlingUuid && (
          <Checkbox
            size="small"
            checked={filtrerPaBehandling}
            onChange={() => setFiltrerPaBehandling(!filtrerPaBehandling)}
          >
            {intl.formatMessage({ id: 'HistorikkIndex.FiltrerPaBehandling' })}
          </Checkbox>
        )
      }
    >
      <HistorikkSakIndex
        historikkFpSak={historikkFpSak}
        historikkFpTilbake={historikkFpTilbake}
        alleKodeverkFpTilbake={alleKodeverkFpTilbake}
        alleKodeverkFpSak={notEmpty(alleKodeverkFpSak)}
        saksnummer={saksnummer}
        getBehandlingLocation={getBehandlingLocation}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
    </SupportHeaderAndContent>
  );
};
