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
  kanSaksbehandle: boolean;
}

const NotatSakIndex: FunctionComponent<OwnProps> = ({
  saksnummer,
  notater,
  lagreNotat,
  saksbehandlerNavn,
  kanSaksbehandle,
}) => (
  <RawIntlProvider value={intl}>
    <NotatPanel
      saksnummer={saksnummer}
      notater={notater}
      lagreNotat={lagreNotat}
      saksbehandlerNavn={saksbehandlerNavn}
      kanSaksbehandle={kanSaksbehandle}
    />
  </RawIntlProvider>
);

export default NotatSakIndex;
