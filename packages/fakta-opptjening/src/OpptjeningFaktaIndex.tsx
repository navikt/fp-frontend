import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import {
  ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Opptjening,
} from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import OpptjeningFaktaForm from './components/OpptjeningFaktaForm';
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
  opptjening,
  aksjonspunkter,
  utlandDokStatus,
  alleMerknaderFraBeslutter,
  alleKodeverk,
  harApneAksjonspunkter,
  submitCallback,
  readOnly,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const fastsattOpptjening = opptjening ? opptjening.fastsattOpptjening : undefined;
  const dokStatus = utlandDokStatus ? utlandDokStatus.dokStatus : undefined;
  const opptjeningAktiviteter = opptjening ? opptjening.opptjeningAktivitetList : undefined;
  return (
    <RawIntlProvider value={intl}>
      <OpptjeningFaktaForm
        opptjeningFomDato={fastsattOpptjening ? fastsattOpptjening.opptjeningFom : undefined}
        opptjeningTomDato={fastsattOpptjening ? fastsattOpptjening.opptjeningTom : undefined}
        dokStatus={dokStatus}
        readOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        hasAksjonspunkt={aksjonspunkter[0] !== undefined}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        opptjeningAktiviteter={opptjeningAktiviteter}
        fastsattOpptjening={fastsattOpptjening}
        submitCallback={submitCallback}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};

export default OpptjeningFaktaIndex;
