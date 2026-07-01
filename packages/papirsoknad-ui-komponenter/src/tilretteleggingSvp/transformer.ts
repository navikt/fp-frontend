import type { ManuellRegistreringSvangerskapspengerDto, SvpTilretteleggingArbeidsforholdDto } from '@navikt/fp-types';

import type { FormValues } from './types';

export const transformTilretteleggingsArbeidsforhold = (
  tilretteleggingArbeidsforhold: FormValues['tilretteleggingArbeidsforhold'],
): ManuellRegistreringSvangerskapspengerDto['tilretteleggingArbeidsforhold'] => {
  const transformerteVerdier: SvpTilretteleggingArbeidsforholdDto[] = [];

  if (
    tilretteleggingArbeidsforhold.sokForArbeidsgiver &&
    tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver
  ) {
    transformerteVerdier.push(
      ...tilretteleggingArbeidsforhold.tilretteleggingForArbeidsgiver.map(
        ta =>
          ({
            '@type': 'VI',
            behovsdato: ta.behovsdato,
            organisasjonsnummer: ta.organisasjonsnummer,
            tilrettelegginger: ta.tilrettelegginger,
          }) satisfies SvpTilretteleggingArbeidsforholdDto,
      ),
    );
  }

  if (tilretteleggingArbeidsforhold.sokForFrilans && tilretteleggingArbeidsforhold.tilretteleggingFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.tilretteleggingFrilans.behovsdato,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans.tilrettelegginger,
    });
  }
  if (
    tilretteleggingArbeidsforhold.sokForSelvstendigNaringsdrivende &&
    tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende
  ) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende.behovsdato,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende.tilrettelegginger,
    });
  }

  return transformerteVerdier;
};
