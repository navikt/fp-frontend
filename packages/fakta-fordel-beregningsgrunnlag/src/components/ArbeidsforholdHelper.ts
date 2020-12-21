import { createSelector } from 'reselect';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';

const arbeidsforholdEksistererIListen = (arbeidsforhold, arbeidsgiverList) => {
  if (arbeidsforhold.arbeidsforholdId === null) {
    return arbeidsgiverList.map(({ arbeidsgiverId }) => (arbeidsgiverId)).includes(arbeidsforhold.arbeidsgiverId);
  }
  return arbeidsgiverList.map(({ arbeidsforholdId }) => (arbeidsforholdId)).includes(arbeidsforhold.arbeidsforholdId);
};

const finnBgAndelMedSammeArbeidsforhold = (bgAndeler, andel) => bgAndeler.find(({ arbeidsforhold }) => !!arbeidsforhold
&& arbeidsforhold.arbeidsgiverId === andel.arbeidsforhold.arbeidsgiverId
&& arbeidsforhold.arbeidsforholdId === andel.arbeidsforhold.arbeidsforholdId);

const getUniqueListOfArbeidsforholdFromAndeler = (andeler, bgAndeler) => {
  const arbeidsgiverList = [];
  if (andeler === undefined) {
    return arbeidsgiverList;
  }
  andeler.forEach((andel) => {
    if (andel.arbeidsforhold && !arbeidsforholdEksistererIListen(andel.arbeidsforhold, arbeidsgiverList)) {
      const bgAndel = finnBgAndelMedSammeArbeidsforhold(bgAndeler, andel);
      const arbeidsforholdObject = {
        andelsnr: andel.andelsnr,
        nyttArbeidsforhold: andel.nyttArbeidsforhold,
        beregningsperiodeTom: bgAndel.beregningsperiodeTom,
        beregningsperiodeFom: bgAndel.beregningsperiodeFom,
        ...andel.arbeidsforhold,
      };
      arbeidsgiverList.push(arbeidsforholdObject);
    }
  });
  return arbeidsgiverList;
};

const emptyList = [];

const finnAndelerFraFordelingperioder = (fordelPerioder) => (fordelPerioder.length > 0
  ? fordelPerioder.flatMap((p) => p.fordelBeregningsgrunnlagAndeler) : emptyList);

const finnAndelerFraBgperioder = (bgPerioder) => (bgPerioder.length > 0
  ? bgPerioder.flatMap((p) => p.beregningsgrunnlagPrStatusOgAndel) : emptyList);

// TODO Fjern export og rename fil
export const getUniqueListOfArbeidsforholdFromPerioder = (fordelPerioder, bgPerioder) => getUniqueListOfArbeidsforholdFromAndeler(
  finnAndelerFraFordelingperioder(fordelPerioder),
  finnAndelerFraBgperioder(bgPerioder),
);

type SelectorProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

const getUniqueListOfArbeidsforhold = createSelector(
  [(props: SelectorProps) => props.beregningsgrunnlag],
  (beregningsgrunnlag) => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    return getUniqueListOfArbeidsforholdFromPerioder(fordelBGPerioder, bgPerioder);
  },
);

export default getUniqueListOfArbeidsforhold;
