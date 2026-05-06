import { type ReactNode, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Alert, VStack } from '@navikt/ds-react';

import type { BekreftTilrettelegging } from '@navikt/fp-types';

import type { TilretteleggingFormValues } from '../types/TilretteleggingFormValues';
import { filtrerVelferdspermisjoner } from './arbeidsforholdUtils';

// 'tilretteleggingFeil' er et virtuelt felt vi registrerer i RHF utelukkende for å få
// validate-funksjonen kjørt sammen med resten av skjemaet.
const FEIL_FELT = 'tilretteleggingFeil';

type FeilType =
  | 'IkkeAllePermisjonerVurdert'
  | 'HarIkkeValgtArbeidsforhold'
  | 'PeriodeIkkeLagtTil'
  | 'ArbeidsforholdUtenTilrettelegging'
  | 'ValgtSvpVedGyldig100Permisjon';

type FormValuesMedFeil = TilretteleggingFormValues & { [FEIL_FELT]: FeilType[] };

export const TilretteleggingFormFeil = () => {
  const {
    register,
    trigger,
    watch,
    formState: { errors, isSubmitted },
  } = useFormContext<FormValuesMedFeil>();

  const arbeidsforhold = watch('arbeidsforhold');

  useEffect(() => {
    register(FEIL_FELT, {
      validate: () => {
        const feil = finnFeil(arbeidsforhold);
        return feil.length === 0 || feil.join(',');
      },
    });
    // Re-valider når arbeidsforhold endres, men kun etter første submit (unngå feil før brukeren har prøvd)
    if (isSubmitted) {
      void trigger(FEIL_FELT);
    }
  }, [arbeidsforhold, isSubmitted, register, trigger]);

  const feilMelding = errors[FEIL_FELT]?.message;
  const aktiveFeil = (feilMelding?.split(',') ?? []) as FeilType[];

  const feilMeldinger: Record<FeilType, ReactNode> = {
    IkkeAllePermisjonerVurdert: <FormattedMessage id="TilretteleggingFormFeil.IkkeAllePermisjonerVurdert" />,
    HarIkkeValgtArbeidsforhold: <FormattedMessage id="TilretteleggingFormFeil.HarIkkeValgtArbeidsforhold" />,
    PeriodeIkkeLagtTil: <FormattedMessage id="TilretteleggingFormFeil.PeriodeIkkeLagtTil" />,
    ArbeidsforholdUtenTilrettelegging: (
      <FormattedMessage id="TilretteleggingFormFeil.ArbeidsforholdUtenTilrettelegging" />
    ),
    ValgtSvpVedGyldig100Permisjon: <FormattedMessage id="TilretteleggingFormFeil.ValgtSvpVedGyldig100Permisjon" />,
  };

  return aktiveFeil.length > 0 ? (
    <VStack gap="space-8">
      {aktiveFeil.map(f => (
        <Alert key={f} variant="error" size="small">
          {feilMeldinger[f]}
        </Alert>
      ))}
    </VStack>
  ) : null;
};

export const harUvurderteVelferdspermisjoner = (arbeidsforhold: BekreftTilrettelegging[]) =>
  arbeidsforhold.some(a =>
    filtrerVelferdspermisjoner(a.velferdspermisjoner, a.tilretteleggingBehovFom).some(p => p.erGyldig === undefined),
  );

const finnFeil = (arbeidsforhold: BekreftTilrettelegging[]): FeilType[] => {
  const feil: FeilType[] = [];
  if (harUvurderteVelferdspermisjoner(arbeidsforhold)) feil.push('IkkeAllePermisjonerVurdert');
  if (!arbeidsforhold.some(a => a.skalBrukes)) feil.push('HarIkkeValgtArbeidsforhold');
  if (
    arbeidsforhold.some(
      a => a.tilretteleggingDatoer.some(td => !td.fom) || a.avklarteOppholdPerioder.some(td => !td.fom),
    )
  ) {
    feil.push('PeriodeIkkeLagtTil');
  }
  if (arbeidsforhold.some(a => a.skalBrukes && a.tilretteleggingDatoer.length === 0)) {
    feil.push('ArbeidsforholdUtenTilrettelegging');
  }
  if (
    arbeidsforhold.some(
      a => a.skalBrukes && a.velferdspermisjoner.some(vp => vp.erGyldig && vp.permisjonsprosent === 100),
    )
  ) {
    feil.push('ValgtSvpVedGyldig100Permisjon');
  }
  return feil;
};
