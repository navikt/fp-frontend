import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { ArbeidsgiverOpplysningerPerId, Opptjening, StandardFaktaPanelProps } from '@navikt/fp-types';

import OpptjeningFaktaPanel from './components/OpptjeningFaktaPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  opptjening?: Opptjening;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const OpptjeningFaktaIndex = ({
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
}: Props & StandardFaktaPanelProps) => {
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
