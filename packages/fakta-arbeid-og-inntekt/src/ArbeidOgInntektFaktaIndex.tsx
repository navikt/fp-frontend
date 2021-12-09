import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId, StandardFaktaPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import { FormValuesForManglendeArbeidsforhold } from './components/ManglendeOpplysningerForm';
import { FormValues as NyttArbeidsforholdFormValues } from './components/LeggTilArbeidsforholdForm';
import { FormValuesForManglendeInntektsmelding } from './components/InntektsmeldingInnhentesForm';
import ArbeidOgInntektFaktaPanel from './components/ArbeidOgInntektFaktaPanel';
import messages from '../i18n/nb_NO.json';

interface OwnProps {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lagreNyttArbeidsforhold: (formValues: NyttArbeidsforholdFormValues) => void;
  lagreManglendeArbeidsforhold: (formValues: FormValuesForManglendeArbeidsforhold) => void;
  lagreManglendeInntekstmelding: (formValues: FormValuesForManglendeInntektsmelding) => void;
}

const intl = createIntl(messages);

const ArbeidOgInntektFaktaIndex: FunctionComponent<OwnProps & StandardFaktaPanelProps> = ({
  behandling,
  aksjonspunkter,
  readOnly,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  lagreNyttArbeidsforhold,
  lagreManglendeArbeidsforhold,
  lagreManglendeInntekstmelding,
}) => (
  <RawIntlProvider value={intl}>
    <ArbeidOgInntektFaktaPanel
      skjæringspunktDato={behandling.behandlingsresultat.skjæringstidspunkt.dato}
      aksjonspunkter={aksjonspunkter}
      isReadOnly={readOnly}
      arbeidOgInntekt={arbeidOgInntekt}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      lagreNyttArbeidsforhold={lagreNyttArbeidsforhold}
      lagreManglendeArbeidsforhold={lagreManglendeArbeidsforhold}
      lagreManglendeInntekstmelding={lagreManglendeInntekstmelding}
    />
  </RawIntlProvider>
);

export default ArbeidOgInntektFaktaIndex;
