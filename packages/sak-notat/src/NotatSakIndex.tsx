import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { Fagsak } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';
import NotatPanel from './components/NotatPanel';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  lagreNotat: (beskrivelse: string) => void;
}

const FagsakSokSakIndex: FunctionComponent<OwnProps> = ({ fagsak, lagreNotat }) => (
  <RawIntlProvider value={intl}>
    <NotatPanel fagsak={fagsak} lagreNotat={lagreNotat} />
  </RawIntlProvider>
);

export default FagsakSokSakIndex;
