import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { Historikkinnslag, KodeverkMedNavn } from '@fpsak-frontend/types';

import History from './components/History';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  historikkFpSak: Historikkinnslag[];
  historikkFpTilbake: Historikkinnslag[];
  alleKodeverkFpTilbake?: {[key: string]: KodeverkMedNavn[]};
  alleKodeverkFpSak: {[key: string]: KodeverkMedNavn[]};
  saksnummer?: string;
  getBehandlingLocation: (behandlingId: number) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
  valgtBehandlingId?: number;
}

const HistorikkSakIndex: FunctionComponent<OwnProps> = ({
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpTilbake,
  alleKodeverkFpSak,
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  valgtBehandlingId,
}) => (
  <RawIntlProvider value={intl}>
    <History
      intl={intl}
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      valgtBehandlingId={valgtBehandlingId}
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
