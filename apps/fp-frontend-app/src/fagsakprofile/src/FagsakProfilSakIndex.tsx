import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import FagsakProfile from './components/FagsakProfile';
import messages from './i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekst?: string;
}

const FagsakProfilSakIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  dekningsgrad,
  fagsakMarkeringTekst,
}) => (
  <RawIntlProvider value={intl}>
    <FagsakProfile
      saksnummer={saksnummer}
      fagsakYtelseType={fagsakYtelseType}
      fagsakStatus={fagsakStatus}
      dekningsgrad={dekningsgrad}
      fagsakMarkeringTekst={fagsakMarkeringTekst}
    />
  </RawIntlProvider>
);

export default FagsakProfilSakIndex;
