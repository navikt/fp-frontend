import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Beregningsgrunnlag,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import FordelBeregningsgrunnlagPanel from './components/FordelBeregningsgrunnlagPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const FordelBeregningsgrunnlagFaktaIndex:FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  beregningsgrunnlag,
  alleKodeverk,
  alleMerknaderFraBeslutter,
  aksjonspunkter,
  submitCallback,
  readOnly,
  submittable,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="FordelBeregningsgrunnlagFaktaIndex" formData={formData} setFormData={setFormData}>
      <FordelBeregningsgrunnlagPanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        behandlingType={behandling.type}
        alleKodeverk={alleKodeverk}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        beregningsgrunnlag={beregningsgrunnlag}
        submittable={submittable}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default FordelBeregningsgrunnlagFaktaIndex;
