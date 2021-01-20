import { createSelector } from 'reselect';
import Beregningsgrunnlag, {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { FordelBeregningsgrunnlagAndel, FordelBeregningsgrunnlagPeriode, Kodeverk } from '@fpsak-frontend/types';
import BeregningsgrunnlagArbeidsforhold from '@fpsak-frontend/types/src/beregningsgrunnlagArbeidsforholdTsType';

const arbeidsforholdEksistererIListen = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold, arbeidsgiverList: Arbeidsforhold[]): boolean => {
  if (arbeidsforhold.arbeidsforholdId === null) {
    return arbeidsgiverList.map(({ arbeidsgiverId }) => (arbeidsgiverId)).includes(arbeidsforhold.arbeidsgiverIdent);
  }
  return arbeidsgiverList.map(({ arbeidsforholdId }) => (arbeidsforholdId)).includes(arbeidsforhold.arbeidsforholdId);
};

const finnBgAndelMedSammeArbeidsforhold = (bgAndeler: BeregningsgrunnlagAndel[],
  andel: FordelBeregningsgrunnlagAndel): BeregningsgrunnlagAndel => bgAndeler.find(({ arbeidsforhold }) => !!arbeidsforhold
&& arbeidsforhold.arbeidsgiverIdent === andel.arbeidsforhold.arbeidsgiverIdent
&& arbeidsforhold.arbeidsforholdId === andel.arbeidsforhold.arbeidsforholdId);

export type Arbeidsforhold = {
  andelsnr: number;
  nyttArbeidsforhold: boolean;
  beregningsperiodeTom: string;
  beregningsperiodeFom: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: Kodeverk;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType?: Kodeverk;
}

const getUniqueListOfArbeidsforholdFromAndeler = (andeler: FordelBeregningsgrunnlagAndel[],
  bgAndeler: BeregningsgrunnlagAndel[]): Arbeidsforhold[] => {
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

// TODO Fjern export og rename fil
export const getUniqueListOfArbeidsforholdFromPerioder = (fordelPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[]): Arbeidsforhold[] => getUniqueListOfArbeidsforholdFromAndeler(
  finnAndelerFraFordelingperioder(fordelPerioder),
  finnAndelerFraBgperioder(bgPerioder),
);

type SelectorProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
}

const getUniqueListOfArbeidsforhold = createSelector(
  [(props: SelectorProps) => props.beregningsgrunnlag],
  (beregningsgrunnlag): Arbeidsforhold[] => {
    const fordelBGPerioder = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag.fordelBeregningsgrunnlagPerioder;
    const bgPerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
    return getUniqueListOfArbeidsforholdFromPerioder(fordelBGPerioder, bgPerioder);
  },
);

export default getUniqueListOfArbeidsforhold;
