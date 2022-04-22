import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Location } from 'history';

import { Historikkinnslag, AlleKodeverk, AlleKodeverkTilbakekreving } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import History from './components/History';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  historikkFpSak: Historikkinnslag[];
  historikkFpTilbake: Historikkinnslag[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer?: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  valgtBehandlingUuid?: string;
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
      valgtBehandlingUuid={valgtBehandlingUuid}
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
