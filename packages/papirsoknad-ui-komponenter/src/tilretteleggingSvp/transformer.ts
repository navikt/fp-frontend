import type { ManuellRegistreringSvangerskapspengerDto, SvpTilretteleggingArbeidsforholdDto } from '@navikt/fp-types';

import type { FormValues, Tilrettelegging } from './types';
import { notEmpty } from '@navikt/fp-utils';

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
            tilrettelegginger: ta.tilrettelegginger.map(mapTilrettelegging),
          }) satisfies SvpTilretteleggingArbeidsforholdDto,
      ),
    );
  }

  if (tilretteleggingArbeidsforhold.sokForFrilans && tilretteleggingArbeidsforhold.tilretteleggingFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingArbeidsforhold.tilretteleggingFrilans.behovsdato,
      tilrettelegginger: tilretteleggingArbeidsforhold.tilretteleggingFrilans.tilrettelegginger.map(
        mapTilrettelegging,
      ),
    });
  }
  if (
    tilretteleggingArbeidsforhold.sokForSelvstendigNaringsdrivende &&
    tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende
  ) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende.behovsdato,
      tilrettelegginger:
        tilretteleggingArbeidsforhold.tilretteleggingSelvstendigNaringsdrivende.tilrettelegginger.map(
          mapTilrettelegging,
        ),
    });
  }

  return transformerteVerdier;
};

const mapTilrettelegging = (tilrettelegging: Tilrettelegging) => ({
  tilretteleggingType: notEmpty(tilrettelegging.tilretteleggingType),
  dato: tilrettelegging.dato,
  stillingsprosent: tilrettelegging.stillingsprosent,
});