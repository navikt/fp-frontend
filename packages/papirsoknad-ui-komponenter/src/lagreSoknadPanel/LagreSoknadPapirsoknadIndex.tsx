import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';

import { LagreSoknadPanel } from './components/LagreSoknadPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitting: boolean;
}

export const LagreSoknadPapirsoknadIndex = ({ readOnly, onSubmitUfullstendigsoknad, submitting }: Props) => (
  <RawIntlProvider value={intl}>
    <LagreSoknadPanel
      readOnly={readOnly}
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      submitting={submitting}
    />
  </RawIntlProvider>
);

LagreSoknadPapirsoknadIndex.initialValues = LagreSoknadPanel.initialValues;
LagreSoknadPapirsoknadIndex.transformValues = LagreSoknadPanel.transformValues;
