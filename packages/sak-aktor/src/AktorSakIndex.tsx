import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';

import { Normaltekst } from 'nav-frontend-typografi';
import { Aktor, AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import AktoerGrid from './components/AktoerGrid';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  valgtAktorId: string;
  aktorInfo?: Aktor;
  alleKodeverk: AlleKodeverk;
  finnPathToFagsak: (saksnummer: string) => string;
}

const AktorSakIndex: FunctionComponent<OwnProps> = ({
  valgtAktorId,
  aktorInfo,
  alleKodeverk,
  finnPathToFagsak,
}) => (
  <RawIntlProvider value={intl}>
    {aktorInfo && (
      <AktoerGrid aktorInfo={aktorInfo} alleKodeverk={alleKodeverk} finnPathToFagsak={finnPathToFagsak} />
    )}
    {!aktorInfo && (
      <Normaltekst><FormattedMessage id="AktorSakIndex.UgyldigAktorId" values={{ id: valgtAktorId }} /></Normaltekst>
    )}
  </RawIntlProvider>
);

export default AktorSakIndex;
