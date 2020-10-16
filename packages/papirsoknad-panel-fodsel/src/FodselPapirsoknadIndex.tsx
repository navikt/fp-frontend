import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import TerminFodselDatoPanel from './components/TerminFodselDatoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
}

const FodselPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
}) => (
  <RawIntlProvider value={intl}>
    <TerminFodselDatoPanel
      readOnly={readOnly}
      form={form}
    />
  </RawIntlProvider>
);

export default FodselPapirsoknadIndex;
