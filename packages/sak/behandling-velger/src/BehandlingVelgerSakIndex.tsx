import { type ReactElement } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/fp-types';

import { BehandlingerListe } from './components/BehandlingerListe';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlinger: BehandlingAppKontekst[];
  behandlingUuid?: string;
  skalViseAlleBehandlinger: boolean;
  toggleVisAlleBehandlinger: () => void;
  renderRadSomLenke: (className: string, behandlingInfoKomponent: ReactElement, uuid: string) => ReactElement;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

export const BehandlingVelgerSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <BehandlingerListe {...props} />
  </RawIntlProvider>
);
