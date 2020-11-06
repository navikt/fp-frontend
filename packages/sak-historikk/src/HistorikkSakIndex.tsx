import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFn } from '@fpsak-frontend/utils';
import { Historikk, KodeverkMedNavn } from '@fpsak-frontend/types';

import History from './components/History';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  historieInnslag: Historikk;
  saksnummer?: number;
  getBehandlingLocation: (behandlingId: number) => Location;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location;
}

const HistorikkSakIndex: FunctionComponent<OwnProps> = ({
  historieInnslag,
  saksnummer,
  getBehandlingLocation,
  alleKodeverk,
  createLocationForSkjermlenke,
}) => (
  <RawIntlProvider value={intl}>
    <History
      historieInnslag={historieInnslag}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      getKodeverknavn={getKodeverknavnFn(alleKodeverk, kodeverkTyper)}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
