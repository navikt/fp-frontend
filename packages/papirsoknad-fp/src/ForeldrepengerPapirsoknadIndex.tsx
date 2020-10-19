import React from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import ForeldrepengerForm from './components/ForeldrepengerForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

type Props = {
    onSubmitUfullstendigsoknad: (...args: any[]) => any;
    onSubmit: (...args: any[]) => any;
    readOnly: boolean;
    soknadData: any; // TODO: PropTypes.instanceOf(SoknadData)
    alleKodeverk: {};
    fagsakPerson: {};
};

const ForeldrepengerPapirsoknadIndex = ({
  onSubmitUfullstendigsoknad, onSubmit, readOnly, soknadData, alleKodeverk, fagsakPerson,
}: Props) => (
  <RawIntlProvider value={intl}>
    <ForeldrepengerForm
      onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
      onSubmit={onSubmit}
      readOnly={readOnly}
      soknadData={soknadData}
      alleKodeverk={alleKodeverk}
      fagsakPerson={fagsakPerson}
    />
  </RawIntlProvider>
);

export default ForeldrepengerPapirsoknadIndex;
