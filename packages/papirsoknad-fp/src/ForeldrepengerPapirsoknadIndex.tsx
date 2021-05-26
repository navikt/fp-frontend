import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Dispatch } from 'redux';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import ForeldrepengerForm from './components/ForeldrepengerForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues: any, _dispatch: Dispatch, values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
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
