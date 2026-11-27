import { type Ref } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import { BehandlingerListe } from './components/BehandlingerListe';
import type { CardSelectHandle } from './components/card-select/CardSelect';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  ref?: Ref<CardSelectHandle>;
  behandlinger: FagsakBehandlingDto[];
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  onOpenChange: (open: boolean) => void;
  velgBehandling: (behandlingUuid: string) => void;
  behandlingHref: (behandlingUuid: string) => string;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving?: AlleKodeverkTilbakekreving;
}

export const BehandlingVelgerSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <BehandlingerListe {...props} />
  </RawIntlProvider>
);
