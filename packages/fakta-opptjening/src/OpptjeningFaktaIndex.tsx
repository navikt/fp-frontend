import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps, Opptjening } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import OpptjeningFaktaPanel from './components/OpptjeningFaktaPanel';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  opptjening?: Opptjening;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const OpptjeningFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  opptjening,
  aksjonspunkter,
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
  const opptjeningAktiviteter = opptjening ? opptjening.opptjeningAktivitetList : undefined;
  const ferdiglignetNæring = opptjening?.ferdiglignetNæring || [];
  return (
    <RawIntlProvider value={intl}>
      <OpptjeningFaktaPanel
        readOnly={readOnly}
        hasOpenAksjonspunkter={harApneAksjonspunkter}
        hasAksjonspunkt={aksjonspunkter[0] !== undefined}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        alleKodeverk={alleKodeverk}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        opptjeningAktiviteter={opptjeningAktiviteter}
        fastsattOpptjening={fastsattOpptjening}
        ferdiglignetNæring={ferdiglignetNæring}
        submitCallback={submitCallback}
        formData={formData}
        setFormData={setFormData}
      />
    </RawIntlProvider>
  );
};

export default OpptjeningFaktaIndex;
