import React, { FunctionComponent, ReactNode } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import AnnenForelderPanel from './components/AnnenForelderPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  readOnly: boolean;
  form: string;
  soknadData: SoknadData;
  namePrefix: string;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  permisjonRettigheterPanel: ReactNode;
}

const AnnenForelderPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  form,
  soknadData,
  namePrefix,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <AnnenForelderPanel
      readOnly={readOnly}
      form={form}
      soknadData={soknadData}
      namePrefix={namePrefix}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default AnnenForelderPapirsoknadIndex;
