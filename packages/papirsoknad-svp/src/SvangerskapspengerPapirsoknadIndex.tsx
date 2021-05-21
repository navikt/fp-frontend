import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import SvangerskapspengerForm from './components/SvangerskapspengerForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  onSubmitUfullstendigsoknad: () => Promise<any>;
  onSubmit: (_formValues, _dispatch, values: any) => Promise<any>;
  readOnly: boolean;
  soknadData: SoknadData;
  alleKodeverk: AlleKodeverk;
}

const SvangerskapspengerPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  onSubmitUfullstendigsoknad,
  onSubmit,
  readOnly,
  soknadData,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="SvangerskapspengerPapirsoknadIndex">
      <SvangerskapspengerForm
        onSubmitUfullstendigsoknad={onSubmitUfullstendigsoknad}
        submitCallback={onSubmit}
        readOnly={readOnly}
        soknadData={soknadData}
        alleKodeverk={alleKodeverk}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default SvangerskapspengerPapirsoknadIndex;
