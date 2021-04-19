import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import ForeldrepengerForm from './components/ForeldrepengerForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues, _dispatch, values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  fagsakPersonnummer: string;
}

const ForeldrepengerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
  fagsakPersonnummer,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="ForeldrepengerPapirsoknadIndex">
      <ForeldrepengerForm
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        onSubmit={onSubmit}
        readOnly={readOnly}
        soknadData={soknadData}
        alleKodeverk={alleKodeverk}
        fagsakPersonnummer={fagsakPersonnummer}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default ForeldrepengerPapirsoknadIndex;
