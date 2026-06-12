import { useEffect, useState } from 'react';
import { type FieldArrayWithId } from 'react-hook-form';

import { ExpansionCard } from '@navikt/ds-react';

import type { Arbeidsforhold, ArbeidsgiverOpplysninger, KodeverkMedNavn } from '@navikt/fp-types';

import type { Tilrettelegging, TilretteleggingFormValues } from '../../types/TilretteleggingFormValues';
import { erInnenforIntervall, finnStillingsprosent } from '../arbeidsforholdUtils';
import { ArbeidsforholdHeader } from './ArbeidsforholdHeader';
import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';
import type { FAISUProps } from './faisuUtils';

interface Props {
  tilrettelegging: Tilrettelegging;
  index: number;
  readOnly: boolean;
  aoiArbeidsforhold: Arbeidsforhold[];
  arbeidsgiverOpplysning: ArbeidsgiverOpplysninger | undefined;
  uttakArbeidTyper: KodeverkMedNavn<'UttakArbeidType'>[];
  field: FieldArrayWithId<TilretteleggingFormValues, 'arbeidsforhold'>;
  faisu: FAISUProps | undefined;
}

export const ArbeidsforholdExpansionCard = ({
  tilrettelegging,
  arbeidsgiverOpplysning,
  index,
  aoiArbeidsforhold,
  uttakArbeidTyper,
  field,
  readOnly,
  faisu,
}: Props) => {
  const [open, setOpen] = useState(tilrettelegging.skalBrukes);
  const alleIafAf = aoiArbeidsforhold.filter(iaya => iaya.arbeidsgiverIdent === tilrettelegging.arbeidsgiverReferanse);

  const af = finnArbeidsforhold(alleIafAf, tilrettelegging.internArbeidsforholdReferanse);

  const visInfoAlert = af
    ? !erInnenforIntervall(tilrettelegging.tilretteleggingBehovFom, af.fom, af.tom)
    : alleIafAf.length > 0 &&
      alleIafAf.every(a => !erInnenforIntervall(tilrettelegging.tilretteleggingBehovFom, a.fom, a.tom));

  const stillingsprosent = af
    ? af.stillingsprosent
    : finnStillingsprosent(alleIafAf, tilrettelegging.tilretteleggingBehovFom);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(tilrettelegging.skalBrukes);
  }, [tilrettelegging.skalBrukes]);

  return (
    <ExpansionCard open={open} onToggle={o => setOpen(o)} key={field.id} aria-label="arbeidsgiver">
      <ExpansionCard.Header>
        <ArbeidsforholdHeader
          arbeidsgiverOpplysning={arbeidsgiverOpplysning}
          tilrettelegging={tilrettelegging}
          uttakArbeidTyper={uttakArbeidTyper}
          visInfoAlert={visInfoAlert}
          faisu={faisu}
          stillingsprosent={stillingsprosent}
        />
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <ArbeidsforholdPanel
          tilrettelegging={tilrettelegging}
          arbeidsforholdIndex={index}
          readOnly={readOnly}
          visInfoAlert={tilrettelegging.skalBrukes && visInfoAlert}
          stillingsprosentArbeidsforhold={stillingsprosent ?? 0}
          faisu={faisu}
        />
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

const finnArbeidsforhold = (
  alleIafAf: Arbeidsforhold[],
  internArbeidsforholdReferanse?: string,
): Arbeidsforhold | undefined => {
  if (alleIafAf.length > 1) {
    return alleIafAf.find(iafAf => iafAf.internArbeidsforholdId === internArbeidsforholdReferanse);
  }
  return alleIafAf.length === 1 ? alleIafAf[0] : undefined;
};
