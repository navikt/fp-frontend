import type { ManuellRegistreringSvangerskapspengerDto, SvpTilretteleggingArbeidsforholdDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import type { FormValues, Tilrettelegging } from './types';

export const transformTilretteleggingsArbeidsforhold = ({
  sokForArbeidsgiver,
  sokForFrilans,
  sokForSelvstendigNaringsdrivende,
  tilretteleggingForArbeidsgiver,
  tilretteleggingFrilans,
  tilretteleggingSelvstendigNaringsdrivende,
}: FormValues['tilretteleggingArbeidsforhold']): ManuellRegistreringSvangerskapspengerDto['tilretteleggingArbeidsforhold'] => {
  const transformerteVerdier: SvpTilretteleggingArbeidsforholdDto[] = [];

  if (sokForArbeidsgiver && tilretteleggingForArbeidsgiver) {
    transformerteVerdier.push(
      ...tilretteleggingForArbeidsgiver.map(
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

  if (sokForFrilans && tilretteleggingFrilans) {
    transformerteVerdier.push({
      '@type': 'FR',
      behovsdato: tilretteleggingFrilans.behovsdato,
      tilrettelegginger: tilretteleggingFrilans.tilrettelegginger.map(mapTilrettelegging),
    });
  }

  if (sokForSelvstendigNaringsdrivende && tilretteleggingSelvstendigNaringsdrivende) {
    transformerteVerdier.push({
      '@type': 'SN',
      behovsdato: tilretteleggingSelvstendigNaringsdrivende.behovsdato,
      tilrettelegginger: tilretteleggingSelvstendigNaringsdrivende.tilrettelegginger.map(mapTilrettelegging),
    });
  }

  return transformerteVerdier;
};

const mapTilrettelegging = (tilrettelegging: Tilrettelegging) => ({
  tilretteleggingType: notEmpty(tilrettelegging.tilretteleggingType),
  dato: tilrettelegging.dato,
  stillingsprosent: tilrettelegging.stillingsprosent,
});
