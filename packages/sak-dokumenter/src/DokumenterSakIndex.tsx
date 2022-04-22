import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { Dokument } from '@fpsak-frontend/types';
import { createIntl } from '@navikt/ft-utils';

import DocumentList from './components/DocumentList';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  documents: Dokument[];
  selectDocumentCallback: (e: React.SyntheticEvent, id?: number | string, dokument?: Dokument) => void;
  behandlingUuid?: string;
}

const DokumenterSakIndex: FunctionComponent<OwnProps> = ({
  documents,
  selectDocumentCallback,
  behandlingUuid,
}) => (
  <RawIntlProvider value={intl}>
    <DocumentList
      documents={documents}
      selectDocumentCallback={selectDocumentCallback}
      behandlingUuid={behandlingUuid}
    />
  </RawIntlProvider>
);

export default DokumenterSakIndex;
