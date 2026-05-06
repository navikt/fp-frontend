import { useEffect } from 'react';
import { type FieldPath, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, VStack } from '@navikt/ds-react';

import type { BekreftTilrettelegging } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from './arbeidsforholdUtils';

type FeilType =
  | 'IkkeAllePermisjonerVurdert'
  | 'HarIkkeValgtArbeidsforhold'
  | 'PeriodeIkkeLagtTil'
  | 'ArbeidsforholdUtenTilrettelegging'
  | 'ValgtSvpVedGyldig100Permisjon';

// Hvert feil-felt registreres individuelt i RHF — ett felt per FeilType —
// slik at validering og feilvisning henger naturlig sammen uten join/split.
type FormValuesMedFeil = TilretteleggingFormValues & {
  tilretteleggingFeil: Record<FeilType, boolean>;
};

export const harUvurderteVelferdspermisjoner = (arbeidsforhold: BekreftTilrettelegging[]) =>
  arbeidsforhold.some(a =>
    filtrerVelferdspermisjoner(a.velferdspermisjoner, a.tilretteleggingBehovFom).some(p => p.erGyldig === undefined),
  );

const harUferdigstiltPeriode = (a: BekreftTilrettelegging) =>
  a.tilretteleggingDatoer.some(td => !td.fom) || a.avklarteOppholdPerioder.some(td => !td.fom);

const harGyldig100Permisjon = (a: BekreftTilrettelegging) =>
  a.skalBrukes && a.velferdspermisjoner.some(vp => vp.erGyldig && vp.permisjonsprosent === 100);

const erArbeidsforholdUtenTilrettelegging = (a: BekreftTilrettelegging) =>
  a.skalBrukes && a.tilretteleggingDatoer.length === 0;

type FeilSjekk = {
  type: FeilType;
  harFeil: (arbeidsforhold: BekreftTilrettelegging[]) => boolean;
  melding: React.ReactNode;
};

const FEIL_SJEKKER: FeilSjekk[] = [
  {
    type: 'IkkeAllePermisjonerVurdert',
    harFeil: harUvurderteVelferdspermisjoner,
    melding: <FormattedMessage id="TilretteleggingFormFeil.IkkeAllePermisjonerVurdert" />,
  },
  {
    type: 'HarIkkeValgtArbeidsforhold',
    harFeil: af => !af.some(a => a.skalBrukes),
    melding: <FormattedMessage id="TilretteleggingFormFeil.HarIkkeValgtArbeidsforhold" />,
  },
  {
    type: 'PeriodeIkkeLagtTil',
    harFeil: af => af.some(harUferdigstiltPeriode),
    melding: <FormattedMessage id="TilretteleggingFormFeil.PeriodeIkkeLagtTil" />,
  },
  {
    type: 'ArbeidsforholdUtenTilrettelegging',
    harFeil: af => af.some(erArbeidsforholdUtenTilrettelegging),
    melding: <FormattedMessage id="TilretteleggingFormFeil.ArbeidsforholdUtenTilrettelegging" />,
  },
  {
    type: 'ValgtSvpVedGyldig100Permisjon',
    harFeil: af => af.some(harGyldig100Permisjon),
    melding: <FormattedMessage id="TilretteleggingFormFeil.ValgtSvpVedGyldig100Permisjon" />,
  },
];

export const TilretteleggingFormFeil = () => {
  const {
    register,
    trigger,
    watch,
    formState: { errors, isSubmitted },
  } = useFormContext<FormValuesMedFeil>();

  const arbeidsforhold = watch('arbeidsforhold');

  useEffect(() => {
    for (const { type, harFeil } of FEIL_SJEKKER) {
      register(`tilretteleggingFeil.${type}`, {
        validate: () => !harFeil(arbeidsforhold),
      });
    }
    // Re-valider når arbeidsforhold endres, men kun etter første submit (unngå feil før brukeren har prøvd)
    if (isSubmitted) {
      void trigger(FEIL_SJEKKER.map<FieldPath<FormValuesMedFeil>>(({ type }) => `tilretteleggingFeil.${type}`));
    }
  }, [arbeidsforhold, isSubmitted, register, trigger]);

  const aktiveFeil = FEIL_SJEKKER.filter(({ type }) => errors.tilretteleggingFeil?.[type]);

  if (aktiveFeil.length === 0) {
    return null;
  }

  return (
    <VStack gap="space-8">
      {aktiveFeil.map(({ type, melding }) => (
        <Alert key={type} variant="error" size="small">
          {melding}
        </Alert>
      ))}
    </VStack>
  );
};
