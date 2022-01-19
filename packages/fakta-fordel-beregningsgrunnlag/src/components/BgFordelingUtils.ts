import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';
import {
  ArbeidsgiverOpplysningerPerId,
  FordelBeregningsgrunnlagAndel,
} from '@fpsak-frontend/types';
import { createVisningsnavnForAktivitetFordeling } from './util/visningsnavnHelper';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagArbeidAndelValues,
  FordelBeregningsgrunnlagGenerellAndelValues,
} from '../types/FordelingTsType';

export const GRADERING_RANGE_DENOMINATOR = ' - ';

const nullOrUndefined = (value: number): boolean => value === null || value === undefined;

export const settAndelIArbeid = (andelerIArbeid: number[]): string => {
  if (andelerIArbeid.length === 0) {
    return '';
  }
  if (andelerIArbeid.length === 1) {
    // @ts-ignore fiks
    return `${parseFloat(andelerIArbeid[0]).toFixed(2)}`;
  }
  const minAndel = Math.min(...andelerIArbeid);
  const maxAndel = Math.max(...andelerIArbeid);
  return `${minAndel}${GRADERING_RANGE_DENOMINATOR}${maxAndel}`;
};

const finnnInntektskategorikode = (andel: FordelBeregningsgrunnlagAndel): string => (andel.inntektskategori
&& andel.inntektskategori !== inntektskategorier.UDEFINERT ? andel.inntektskategori : '');

const createAndelnavn = (andel: FordelBeregningsgrunnlagAndel,
  harKunYtelse: boolean,
  getKodeverknavn: (kodeverk: string) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  if (!andel.aktivitetStatus || andel.aktivitetStatus === aktivitetStatus.UDEFINERT) {
    return '';
  }
  if (andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold) {
    const agOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
    if (!agOpplysninger) {
      return andel.arbeidsforhold.arbeidsforholdType ? getKodeverknavn(andel.arbeidsforhold.arbeidsforholdType) : '';
    }
    return createVisningsnavnForAktivitetFordeling(agOpplysninger, andel.arbeidsforhold.eksternArbeidsforholdId);
  }
  if (harKunYtelse && andel.aktivitetStatus === aktivitetStatus.BRUKERS_ANDEL) {
    return 'Ytelse';
  }
  return getKodeverknavn(andel.aktivitetStatus);
};

export const finnFastsattPrAar = (fordeltPrAar: number): number | null => (nullOrUndefined(fordeltPrAar) ? null : fordeltPrAar);

export const settFastsattBelop = (fordeltPrAar: number, bruttoPrAar: number,
  skalPreutfyllesMedBeregningsgrunnlag: boolean): string => {
  const fastsatt = finnFastsattPrAar(fordeltPrAar);
  if (fastsatt !== null) {
    return formatCurrencyNoKr(fastsatt);
  }
  return skalPreutfyllesMedBeregningsgrunnlag && !nullOrUndefined(bruttoPrAar) ? formatCurrencyNoKr(bruttoPrAar) : '';
};

export const setArbeidsforholdInitialValues = (andel: FordelBeregningsgrunnlagAndel): FordelBeregningsgrunnlagArbeidAndelValues => ({
  arbeidsgiverNavn: andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverNavn ? andel.arbeidsforhold.arbeidsgiverNavn : '',
  arbeidsgiverId: andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverIdent ? andel.arbeidsforhold.arbeidsgiverIdent : '',
  eksternArbeidsforholdId: andel.arbeidsforhold && andel.arbeidsforhold.eksternArbeidsforholdId ? andel.arbeidsforhold.eksternArbeidsforholdId : '',
  arbeidsforholdId: andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdId ? andel.arbeidsforhold.arbeidsforholdId : '',
  arbeidsperiodeFom: andel.arbeidsforhold ? andel.arbeidsforhold.startdato : '',
  arbeidsperiodeTom: andel.arbeidsforhold && andel.arbeidsforhold.opphoersdato !== null
    ? andel.arbeidsforhold.opphoersdato : '',
  arbeidsforholdType: andel.arbeidsforholdType,
});

export const setGenerellAndelsinfo = (andel: FordelBeregningsgrunnlagAndel,
  harKunYtelse: boolean,
  getKodeverknavn: (kodeverk: string) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): FordelBeregningsgrunnlagGenerellAndelValues => ({
  andel: createAndelnavn(andel, harKunYtelse, getKodeverknavn, arbeidsgiverOpplysningerPerId),
  aktivitetStatus: andel.aktivitetStatus,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  kilde: andel.kilde == null ? null : andel.kilde,
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
  inntektskategori: finnnInntektskategorikode(andel),
  forrigeInntektskategori: !andel.inntektskategori || andel.inntektskategori === inntektskategorier.UDEFINERT ? null : andel.inntektskategori,
});

export const mapToBelop = (andel: FordelBeregningsgrunnlagAndelValues): number => {
  const { fastsattBelop, readOnlyBelop } = andel;
  if (andel.skalRedigereInntekt) {
    return fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0;
  }
  return readOnlyBelop ? removeSpacesFromNumber(readOnlyBelop) : 0;
};
