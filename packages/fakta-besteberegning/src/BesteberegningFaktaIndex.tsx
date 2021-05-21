import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, AlleKodeverk, StandardFaktaPanelProps,
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
  alleKodeverk: AlleKodeverk;
  formData?: any;
  setFormData: (data: any) => void;
  aksjonspunkter: Aksjonspunkt[];
}

const BesteberegningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  beregningsgrunnlag,
  arbeidsgiverOpplysninger,
  alleKodeverk,
  aksjonspunkter,
  behandling,
  readOnly,
  submitCallback,
  formData,
  setFormData,
  submittable,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="KontrollerAutomatiskBesteberegningForm" formData={formData} setFormData={setFormData}>
      <BesteberegningPanel
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        getKodeverkNavn={getKodeverknavnFn(alleKodeverk, kodeverkTyper)}
        aksjonspunkter={aksjonspunkter}
        behandling={behandling}
        readOnly={readOnly}
        submitCallback={submitCallback}
        submittable={submittable}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default BesteberegningFaktaIndex;
