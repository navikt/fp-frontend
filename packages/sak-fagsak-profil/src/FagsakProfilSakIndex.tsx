import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { KodeverkMedNavn } from '@navikt/fp-types';

import { FagsakProfile } from './components/FagsakProfile';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekster?: string[];
  toggleSideMeny: () => void;
}

export const FagsakProfilSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <FagsakProfile {...props} />
  </RawIntlProvider>
);
