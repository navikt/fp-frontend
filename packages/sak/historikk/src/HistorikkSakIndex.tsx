import type { ReactElement } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import type { Location } from 'history';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag, SkjermlenkeType } from '@navikt/fp-types';

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
  createLocationForSkjermlenke: (
    behandlingLocation: Location,
    skjermlenkeCode: SkjermlenkeType,
  ) => Location | undefined;
  valgtBehandlingUuid?: string;
  utvidEllerMinskBehandlingDetaljerKnapp: ReactElement;
}

export const HistorikkSakIndex = ({
  historikkFpSak = [],
  historikkFpTilbake = [],
  alleKodeverkFpTilbake,
  alleKodeverkFpSak,
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  valgtBehandlingUuid,
  utvidEllerMinskBehandlingDetaljerKnapp,
}: Props) => (
  <RawIntlProvider value={intl}>
    <Historikk
      valgtBehandlingUuid={valgtBehandlingUuid}
      historikkFpSak={historikkFpSak}
      historikkFpTilbake={historikkFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      saksnummer={saksnummer}
      getBehandlingLocation={getBehandlingLocation}
      createLocationForSkjermlenke={createLocationForSkjermlenke}
      utvidEllerMinskBehandlingDetaljerKnapp={utvidEllerMinskBehandlingDetaljerKnapp}
    />
  </RawIntlProvider>
);
