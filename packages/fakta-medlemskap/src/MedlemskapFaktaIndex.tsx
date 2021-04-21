import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  StandardFaktaPanelProps, InntektArbeidYtelse, Soknad, Medlemskap, ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import MedlemskapInfoPanel from './components/MedlemskapInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  medlemskap: Medlemskap;
  soknad: Soknad;
  inntektArbeidYtelse: InntektArbeidYtelse;
  isForeldrepengerFagsak: boolean;
  readOnlyForStartdatoForForeldrepenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const MedlemskapFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  soknad,
  inntektArbeidYtelse,
  medlemskap,
  aksjonspunkter,
  harApneAksjonspunkter,
  submittable,
  isForeldrepengerFagsak,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  submitCallback,
  readOnly,
  readOnlyForStartdatoForForeldrepenger,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="MedlemskapFaktaIndex" formData={formData} setFormData={setFormData}>
      <MedlemskapInfoPanel
        behandlingType={behandling.type}
        behandlingStatus={behandling.status}
        soknad={soknad}
        inntektArbeidYtelse={inntektArbeidYtelse}
        medlemskap={medlemskap}
        aksjonspunkter={aksjonspunkter}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
        isForeldrepenger={isForeldrepengerFagsak}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        submitCallback={submitCallback}
        readOnly={readOnly}
        readOnlyForStartdatoForForeldrepenger={readOnlyForStartdatoForForeldrepenger}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default MedlemskapFaktaIndex;
