import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import { FormValuesForManglendeArbeidsforhold } from './components/ManglendeOpplysningerForm';
import { FormValues as NyttArbeidsforholdFormValues } from './components/NyttArbeidsforholdForm';
import { FormValuesForManglendeInntektsmelding } from './components/InntektsmeldingInnhentesForm';
import ArbeidOgInntektFaktaPanel from './components/ArbeidOgInntektFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  slettNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
  erOverstyrer: boolean;
}

const intl = createIntl(messages);

const ArbeidOgInntektFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  aksjonspunkter,
  readOnly,
  formData,
  setFormData,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  lagreNyttArbeidsforhold,
  slettNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
  erOverstyrer,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidOgInntektFaktaPanel
      skjæringspunktDato={behandling.behandlingsresultat.skjæringstidspunkt.dato}
      aksjonspunkter={aksjonspunkter}
      isReadOnly={readOnly}
      formData={formData}
      setFormData={setFormData}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
      slettNyttArbeidsforhold={slettNyttArbeidsforhold}
      lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
      lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
      erOverstyrer={erOverstyrer}
    />
  </RawIntlProvider>
);

export default ArbeidOgInntektFaktaIndex;
