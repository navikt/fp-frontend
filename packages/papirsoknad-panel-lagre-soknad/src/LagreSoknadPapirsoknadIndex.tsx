import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import LagreSoknadPanel from './components/LagreSoknadPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  onSubmitUfullstendigsoknad: () => Promise<any>;
  submitting: boolean;
}

const LagreSoknadPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
  onSubmitUfullstendigsoknad,
  submitting,
}) => (
  <RawIntlProvider value={intl}>
    <LagreSoknadPanel
      readOnly={readOnly}
      form={form}
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      submitting={submitting}
    />
  </RawIntlProvider>
);

export default LagreSoknadPapirsoknadIndex;
