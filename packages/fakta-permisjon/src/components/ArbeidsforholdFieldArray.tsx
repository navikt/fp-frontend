import React, { FunctionComponent } from 'react';

import {
  ArbeidOgInntektsmelding,
  AoIArbeidsforhold,
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
} from '@navikt/fp-types';

import { useFieldArray, useFormContext } from 'react-hook-form';
import ArbeidsforholdField from './ArbeidsforholdField';

const FIELD_ARRAY_NAME = 'arbeidsforhold';

type FormValues = {
  arbeidsforhold: {
    permisjonStatus: string;
  }[];
};

interface OwnProps {
  saksnummer: string;
  sorterteArbeidsforhold: AoIArbeidsforhold[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  isReadOnly: boolean;
  harÅpentAksjonspunkt: boolean;
  skjæringstidspunkt: string;
  alleKodeverk: AlleKodeverk;
}

const ArbeidsforholdFieldArray: FunctionComponent<OwnProps> = ({
  saksnummer,
  sorterteArbeidsforhold,
  arbeidOgInntekt,
  arbeidsgiverOpplysningerPerId,
  isReadOnly,
  harÅpentAksjonspunkt,
  skjæringstidspunkt,
  alleKodeverk,
}) => {
  const { control } = useFormContext<FormValues>();
  const { fields } = useFieldArray({
    control,
    name: FIELD_ARRAY_NAME,
  });

  return (
    <>
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
    </>
  );
};

export default ArbeidsforholdFieldArray;
