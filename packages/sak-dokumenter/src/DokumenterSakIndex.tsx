import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import DocumentList from './components/DocumentList';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  documents: Dokument[];
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
  behandlingUuid?: string;
}

export const DokumenterSakIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <DocumentList {...props} />
  </RawIntlProvider>
);
