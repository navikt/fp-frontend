import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Historikk } from './components/Historikk';
import messages from '../i18n/nb_NO.json';
import { AlleKodeverk, AlleKodeverkTilbakekreving, HistorikkinnslagV2 } from '@navikt/fp-types';

const intl = createIntl(messages);

interface Props {
  valgtBehandlingUuid?: string;
  historikkFpSak?: HistorikkinnslagV2[];
  historikkFpTilbake?: HistorikkinnslagV2[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  kjønn: string;
}

const HistorikkSakIndex = ({
  valgtBehandlingUuid,
  historikkFpSak = [],
  historikkFpTilbake = [],
  alleKodeverkFpSak,
  alleKodeverkFpTilbake,
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
    />
  </RawIntlProvider>
);

export default HistorikkSakIndex;
