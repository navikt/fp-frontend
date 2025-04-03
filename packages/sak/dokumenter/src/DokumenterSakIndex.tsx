import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { Dokument } from '@navikt/fp-types';

import { DocumentList } from './components/DocumentList';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  documents: Dokument[];
  saksnummer: string;
  behandlingUuid?: string;
}

export const DokumenterSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <DocumentList {...props} />
  </RawIntlProvider>
);
