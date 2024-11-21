import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';
import { createIntl } from '@navikt/ft-utils';
import { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';

import { Historikk } from './components/Historikk';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  historikkFpSak?: Historikkinnslag[];
  historikkFpTilbake?: Historikkinnslag[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  valgtBehandlingUuid?: string;
  kjønn: string;
}

const HistorikkSakIndex = ({
  historikkFpSak = [],
  historikkFpTilbake = [],
  alleKodeverkFpTilbake,
  alleKodeverkFpSak,
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  valgtBehandlingUuid,
  kjønn,
}: Props) => (
  <RawIntlProvider value={intl}>
    <Historikk
      valgtBehandlingUuid={valgtBehandlingUuid}
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      kjønn={kjønn}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
