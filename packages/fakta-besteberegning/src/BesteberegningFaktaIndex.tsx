import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { createIntl, getKodeverknavnFn } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import messages from '../i18n/nb_NO.json';
import BesteberegningPanel from './components/BesteberegningPanel';

const intl = createIntl(messages);

interface OwnProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  formData?: any;
  setFormData: (data: any) => void;
}

const BesteberegningFaktaIndex: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  alleKodeverk,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="BesteberegningFaktaIndex" formData={formData} setFormData={setFormData}>
      <BesteberegningPanel
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        getKodeverkNavn={getKodeverknavnFn(alleKodeverk, kodeverkTyper)}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BesteberegningFaktaIndex;
