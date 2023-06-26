import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { Saksnotat } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';
import NotatPanel from './components/NotatPanel';

const intl = createIntl(messages);

interface OwnProps {
  saksnummer: string;
  notater: Saksnotat[];
  lagreNotat: (params: { saksnummer: string; notat: string }) => Promise<any>;
  saksbehandlerNavn: string;
}

const FagsakSokSakIndex: FunctionComponent<OwnProps> = ({ saksnummer, notater, lagreNotat, saksbehandlerNavn }) => (
  <RawIntlProvider value={intl}>
    <NotatPanel
      saksnummer={saksnummer}
      notater={notater}
      lagreNotat={lagreNotat}
      saksbehandlerNavn={saksbehandlerNavn}
    />
  </RawIntlProvider>
);

export default FagsakSokSakIndex;
