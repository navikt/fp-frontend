import { useFieldArray, useFormContext } from 'react-hook-form';

import type {
  AlleKodeverk,
  AoIArbeidsforhold,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
} from '@navikt/fp-types';

import { ArbeidsforholdField } from './ArbeidsforholdField';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[];
};

interface Props {
  saksnummer: string;
  sorterteArbeidsforhold: AoIArbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isReadOnly: boolean;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
}

export const ArbeidsforholdFieldArray = ({
  saksnummer,
  sorterteArbeidsforhold,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  isReadOnly,
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
          isReadOnly={isReadOnly}
          harÅpentAksjonspunkt={harÅpentAksjonspunkt}
          skjæringstidspunkt={skjæringstidspunkt}
          alleKodeverk={alleKodeverk}
        />
      ))}
    </div>
  );
};
