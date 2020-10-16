import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import EgenVirksomhetPanel from './components/EgenVirksomhetPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const VirksomhetPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <EgenVirksomhetPanel
      readOnly={readOnly}
      form={form}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default VirksomhetPapirsoknadIndex;
