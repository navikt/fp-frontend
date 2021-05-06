import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import DocumentList from './components/DocumentList';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  documents: Dokument[];
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
  behandlingId?: number;
}

const DokumenterSakIndex: FunctionComponent<OwnProps> = ({
  documents,
  selectDocumentCallback,
  behandlingId,
}) => (
  <RawIntlProvider value={intl}>
    <DocumentList
      documents={documents}
      selectDocumentCallback={selectDocumentCallback}
      behandlingId={behandlingId}
    />
  </RawIntlProvider>
);

export default DokumenterSakIndex;
