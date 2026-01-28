import type { AoIArbeidsforhold, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import type { ArbeidsforholdOgInntektRadData } from '../types/arbeidsforholdOgInntekt';
import { harMatchendeArbeidsgiverIdent, lagArbeidsgiver } from './arbeidsgiverUtils';
import { lagAvklaringFraArbeidsforhold, lagAvklaringFraInntektsmelding } from './avklaringUtils';
import { finnInntektsmeldingerForArbeidsgiver } from './inntektsmeldingUtils';

const sorterGittÅrsak = (arbeidsforhold1: AoIArbeidsforhold) => (arbeidsforhold1.årsak ? -1 : 1);

const sorterTabell = (radX: ArbeidsforholdOgInntektRadData, radY: ArbeidsforholdOgInntektRadData): number => {
  const radXHarAp = radX.årsak;
  const radYHarAp = radY.årsak;
  if (radXHarAp && !radYHarAp) {
    return -1;
  }
  if (radYHarAp && !radXHarAp) {
    return 1;
  }
  return radX.arbeidsgiverNavn.localeCompare(radY.arbeidsgiverNavn);
};

export const byggTabellStruktur = (
  arbeidOgInntekt: ArbeidOgInntektsmelding,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ArbeidsforholdOgInntektRadData[] => {
  const { arbeidsforhold, inntektsmeldinger, inntekter } = arbeidOgInntekt;

  const alleArbeidsforhold = [...arbeidsforhold.sort(sorterGittÅrsak)].reduce<ArbeidsforholdOgInntektRadData[]>(
    (acc, af) => {
      const tidligereAf = acc.find(harMatchendeArbeidsgiverIdent(af));
      if (tidligereAf) {
        return acc;
      }
      const arbeidsforholdForRad = arbeidsforhold.filter(harMatchendeArbeidsgiverIdent(af));
      const arbeidsgiverOpplysninger = lagArbeidsgiver(
        af.arbeidsgiverIdent,
        arbeidsgiverOpplysningerPerId[af.arbeidsgiverIdent]!,
      );
      const inntektsmeldingerForRad = finnInntektsmeldingerForArbeidsgiver(inntektsmeldinger, af.arbeidsgiverIdent);
      const inntektsposter = inntekter.find(harMatchendeArbeidsgiverIdent(af))?.inntekter ?? [];

      const ne: ArbeidsforholdOgInntektRadData = {
        ...arbeidsgiverOpplysninger,
        årsak: af.årsak ?? inntektsmeldingerForRad[0]?.årsak ?? undefined,
        avklaring: lagAvklaringFraArbeidsforhold(af, arbeidsgiverOpplysninger.arbeidsgiverNavn),
        arbeidsforholdForRad,
        inntektsmeldingerForRad,
        inntektsposter,
      };

      return acc.concat(ne);
    },
    [],
  );

  const alleInntektsmeldingerSomManglerArbeidsforhold = inntektsmeldinger
    .filter(im => !arbeidsforhold.some(af => im.arbeidsgiverIdent === af.arbeidsgiverIdent))
    .map<ArbeidsforholdOgInntektRadData>(im => {
      const arbeidsgiverOpplysninger = lagArbeidsgiver(
        im.arbeidsgiverIdent,
        arbeidsgiverOpplysningerPerId[im.arbeidsgiverIdent]!,
      );
      const inntektsposter = inntekter.find(harMatchendeArbeidsgiverIdent(im))?.inntekter ?? [];

      return {
        ...arbeidsgiverOpplysninger,
        årsak: im.årsak ?? undefined,
        avklaring: lagAvklaringFraInntektsmelding(im),
        arbeidsforholdForRad: [],
        inntektsmeldingerForRad: [im],
        inntektsposter,
      };
    });

  return alleArbeidsforhold.concat(alleInntektsmeldingerSomManglerArbeidsforhold).sort(sorterTabell);
};

export const finnUløstArbeidsforholdIndex = (tabellData: ArbeidsforholdOgInntektRadData[]): number[] => {
  const index = tabellData.findIndex(d => d.årsak && !d.avklaring);
  return index === -1 ? [] : [index];
};
