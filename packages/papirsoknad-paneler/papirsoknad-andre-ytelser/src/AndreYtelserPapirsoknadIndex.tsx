import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';

import AndreYtelserPanel from './components/AndreYtelserPanel';
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
  kunMiliterEllerSiviltjeneste?: boolean,
}

const AndreYtelserPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
  alleKodeverk,
  kunMiliterEllerSiviltjeneste,
}) => (
  <RawIntlProvider value={intl}>
    <AndreYtelserPanel
      readOnly={readOnly}
      form={form}
      alleKodeverk={alleKodeverk}
      kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
    />
  </RawIntlProvider>
);

export default AndreYtelserPapirsoknadIndex;
