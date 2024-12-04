import { FormValues, TilretteleggingArbeidsforhold } from './types';

export const transformTilretteleggingsArbeidsforhold = (
  tilretteleggingArbeidsforhold: FormValues['tilretteleggingArbeidsforhold'],
): TilretteleggingArbeidsforhold[] => {
  const transformerteVerdier: TilretteleggingArbeidsforhold[] = [];

  if (
    tilretteleggingArbeidsforhold?.sokForArbeidsgiver &&
    tilretteleggingArbeidsforhold?.tilretteleggingForArbeidsgiver
  ) {
    transformerteVerdier.push(
      ...tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map(ta => ({
        '@type': 'VI',
        behovsdato: ta.behovsdato,
        organisasjonsnummer: ta.organisasjonsnummer,
        tilrettelegginger: ta.tilretteleggingArbeidsgiver,
      })),
    );
  }
  if (tilretteleggingArbeidsforhold?.sokForFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoFrilans,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans,
    });
  }
  if (tilretteleggingArbeidsforhold?.sokForSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoSN,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende,
    });
  }

  return transformerteVerdier;
};
