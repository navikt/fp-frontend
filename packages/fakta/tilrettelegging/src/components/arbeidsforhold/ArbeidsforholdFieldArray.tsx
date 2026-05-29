import { useFieldArray, useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { type Arbeidsforhold, type ArbeidsgiverOpplysningerPerId, type KodeverkMedNavn } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { ArbeidsforholdExpansionCard } from './ArbeidsforholdExpansionCard';
import { getFAISUProps } from './faisuUtils';

interface Props {
  readOnly: boolean;
  aoiArbeidsforhold: Arbeidsforhold[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
}

export const ArbeidsforholdFieldArray = ({
  aoiArbeidsforhold,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  uttakArbeidTyper,
}: Props) => {
  const { control, watch } = useFormContext<TilretteleggingFormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'arbeidsforhold',
  });

  const arbeidsforholdListe = watch('arbeidsforhold');

  return (
    <VStack gap="space-16">
      {fields.map((field, index: number) => {
        const arbeidsforhold = arbeidsforholdListe[index];

        if (!arbeidsforhold) {
          return null;
        }

        return (
          <ArbeidsforholdExpansionCard
            key={field.id}
            arbeidsforhold={arbeidsforhold}
            field={field}
            index={index}
            readOnly={readOnly}
            uttakArbeidTyper={uttakArbeidTyper}
            aoiArbeidsforhold={aoiArbeidsforhold}
            arbeidsgiverOpplysning={arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverReferanse ?? '']}
            faisu={getFAISUProps(field, index, append, remove, arbeidsforholdListe)}
          />
        );
      })}
    </VStack>
  );
};
