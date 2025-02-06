import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Saksnotat } from '@navikt/fp-types';

import { NotatPanel } from './components/NotatPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  saksnummer: string;
  notater: Saksnotat[];
  lagreNotat: (params: { saksnummer: string; notat: string }) => void;
  saksbehandlerNavn: string;
  kanSaksbehandle: boolean;
}

export const NotatSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <NotatPanel {...props} />
  </RawIntlProvider>
);
