import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Opptjening,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';
import { ReduxWrapper } from '@fpsak-frontend/form';

import OpptjeningInfoPanel from './components/OpptjeningInfoPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  opptjening?: Opptjening;
  utlandDokStatus?: {
    dokStatus: string;
  };
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpptjeningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  utlandDokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  harApneAksjonspunkter,
  submittable,
  submitCallback,
  readOnly,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <ReduxWrapper formName="OpptjeningFaktaIndex" formData={formData} setFormData={setFormData}>
      <OpptjeningInfoPanel
        behandlingId={behandling.id}
        behandlingVersjon={behandling.versjon}
        fastsattOpptjening={opptjening ? opptjening.fastsattOpptjening : undefined}
        opptjeningAktiviteter={opptjening ? opptjening.opptjeningAktivitetList : undefined}
        dokStatus={utlandDokStatus ? utlandDokStatus.dokStatus : undefined}
        aksjonspunkter={aksjonspunkter}
        submitCallback={submitCallback}
        readOnly={readOnly}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        submittable={submittable}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
    </ReduxWrapper>
  </RawIntlProvider>
);

export default OpptjeningFaktaIndex;
