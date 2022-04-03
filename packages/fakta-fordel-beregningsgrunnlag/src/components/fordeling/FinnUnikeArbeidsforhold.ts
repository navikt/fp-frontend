import { createSelector } from 'reselect';
import Beregningsgrunnlag, {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { FordelBeregningsgrunnlagAndel, FordelBeregningsgrunnlagPeriode } from '@fpsak-frontend/types';
import BeregningsgrunnlagArbeidsforhold from '@fpsak-frontend/types/src/beregningsgrunnlagArbeidsforholdTsType';
import { BGFordelArbeidsforhold } from '../../types/FordelBeregningsgrunnlagPanelValues';

const arbeidsforholdEksistererIListen = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold, arbeidsgiverList: BGFordelArbeidsforhold[]): boolean => {
  if (arbeidsforhold.arbeidsforholdId === null) {
    return arbeidsgiverList.map(({ arbeidsgiverId }) => (arbeidsgiverId)).includes(arbeidsforhold.arbeidsgiverIdent);
  }
  return arbeidsgiverList.map(({ arbeidsforholdId }) => (arbeidsforholdId)).includes(arbeidsforhold.arbeidsforholdId);
};

const finnBgAndelMedSammeArbeidsforhold = (bgAndeler: BeregningsgrunnlagAndel[],
  andel: FordelBeregningsgrunnlagAndel): BeregningsgrunnlagAndel => bgAndeler.find((bga) => !!bga.arbeidsforhold
&& bga.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsforhold.arbeidsgiverIdent
&& bga.arbeidsforhold.arbeidsforholdId === andel.arbeidsforhold.arbeidsforholdId);

const getUniqueListOfArbeidsforholdFromAndeler = (andeler: FordelBeregningsgrunnlagAndel[],
  bgAndeler: BeregningsgrunnlagAndel[]): BGFordelArbeidsforhold[] => {
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

const finnAndelerFraFordelingperioder = (fordelPerioder: FordelBeregningsgrunnlagPeriode[]): FordelBeregningsgrunnlagAndel[] => (fordelPerioder.length > 0
  ? fordelPerioder.flatMap((p) => p.fordelBeregningsgrunnlagAndeler) : emptyList);

const finnAndelerFraBgperioder = (bgPerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagAndel[] => (bgPerioder.length > 0
  ? bgPerioder.flatMap((p) => p.beregningsgrunnlagPrStatusOgAndel) : emptyList);

const getUniqueListOfArbeidsforholdFromPerioder = (fordelPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): BGFordelArbeidsforhold[] => getUniqueListOfArbeidsforholdFromAndeler(
  finnAndelerFraFordelingperioder(fordelPerioder),
  finnAndelerFraBgperioder(bgPerioder),
);

const finnUnikeArbeidsforhold = (beregningsgrunnlag: Beregningsgrunnlag): BGFordelArbeidsforhold[] => {
  const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
  const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  return getUniqueListOfArbeidsforholdFromPerioder(fordelBGPerioder, bgPerioder);
};

export default finnUnikeArbeidsforhold;
