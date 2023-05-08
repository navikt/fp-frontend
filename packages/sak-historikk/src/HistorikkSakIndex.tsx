import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { Historikkinnslag, AlleKodeverk, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import History from './components/History';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  historikkFpSak?: Historikkinnslag[];
  historikkFpTilbake?: Historikkinnslag[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer?: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  valgtBehandlingUuid?: string;
  kjønn: string;
}

const HistorikkSakIndex: FunctionComponent<OwnProps> = ({
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpTilbake,
  alleKodeverkFpSak,
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  valgtBehandlingUuid,
  kjønn,
}) => (
  <RawIntlProvider value={intl}>
    <History
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingUuid={valgtBehandlingUuid}
      kjønn={kjønn}
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
