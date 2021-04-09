import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import TerminFodselDatoPanel, { FormValues } from './components/TerminFodselDatoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

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
