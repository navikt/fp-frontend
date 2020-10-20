import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import TerminFodselDatoPanel, { FormValues } from './components/TerminFodselDatoPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  erForeldrepenger?: boolean;
}

interface StaticFunctions {
  validate?: (values: FormValues) => any;
}

const FodselPapirsoknadIndex: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  form,
  erForeldrepenger,
}) => (
  <RawIntlProvider value={intl}>
    <TerminFodselDatoPanel
      readOnly={readOnly}
      form={form}
      erForeldrepenger={erForeldrepenger}
    />
  </RawIntlProvider>
);

FodselPapirsoknadIndex.validate = (values: FormValues) => TerminFodselDatoPanel.validate(values);

export default FodselPapirsoknadIndex;
