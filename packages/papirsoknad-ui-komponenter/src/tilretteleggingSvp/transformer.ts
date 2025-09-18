import type { FormValues, TilretteleggingArbeidsforhold } from './types';

export const transformTilretteleggingsArbeidsforhold = (
  tilretteleggingArbeidsforhold: FormValues['tilretteleggingArbeidsforhold'],
): TilretteleggingArbeidsforhold[] => {
  const transformerteVerdier: TilretteleggingArbeidsforhold[] = [];

  if (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vurder senere
    tilretteleggingArbeidsforhold?.sokForArbeidsgiver &&
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vurder senere
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

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vurder senere
  if (tilretteleggingArbeidsforhold?.sokForFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoFrilans,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans,
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- [JOHANNES] vurder senere
  if (tilretteleggingArbeidsforhold?.sokForSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.behovsdatoSN,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende,
    });
  }

  return transformerteVerdier;
};
