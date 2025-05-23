import { type ReactElement } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, BehandlingAppKontekst } from '@navikt/fp-types';

import { BehandlingerListe } from './components/BehandlingerListe';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  alleKodeverk: AlleKodeverk;
  alleKodeverkTilbakekreving: AlleKodeverkTilbakekreving;
}

export const BehandlingVelgerSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <BehandlingerListe {...props} />
  </RawIntlProvider>
);
