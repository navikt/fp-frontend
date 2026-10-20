import { useFieldArray, useFormContext } from 'react-hook-form';

import type {
  AlleKodeverk,
  ArbeidOgInntektsmelding,
  Arbeidsforhold,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { ArbeidsforholdField, type FormValues } from './ArbeidsforholdField';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

interface Props {
  saksnummer: string;
  sorterteArbeidsforhold: Arbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
}

export const ArbeidsforholdFieldArray = ({
  saksnummer,
  sorterteArbeidsforhold,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  harÅpentAksjonspunkt,
  skjæringstidspunkt,
  alleKodeverk,
}: Props) => {
  const { control } = useFormContext<FormValues>();
  const { fields } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <ArbeidsforholdField
          key={field.id}
          fieldId={field.id}
          index={index}
          saksnummer={saksnummer}
          sorterteArbeidsforhold={sorterteArbeidsforhold}
          arbeidOgInntekt={arbeidOgInntekt}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
          skjæringstidspunkt={skjæringstidspunkt}
          alleKodeverk={alleKodeverk}
        />
      ))}
    </div>
  );
};
