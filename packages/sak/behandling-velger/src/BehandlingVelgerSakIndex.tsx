import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, FagsakBehandlingDto } from '@navikt/fp-types';

import { BehandlingerListe } from './components/BehandlingerListe';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlinger: FagsakBehandlingDto[];
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  velgBehandling: (behandlingUuid: string) => void;
  behandlingHref: (behandlingUuid: string) => string;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingVelgerSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <BehandlingerListe {...props} />
  </RawIntlProvider>
);
