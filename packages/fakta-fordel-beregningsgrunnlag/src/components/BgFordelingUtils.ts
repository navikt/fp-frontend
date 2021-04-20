import moment from 'moment';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagAndel,
  Kodeverk,
} from '@fpsak-frontend/types';
import { createVisningsnavnForAktivitetFordeling } from './util/visningsnavnHelper';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagArbeidAndelValues,
  FordelBeregningsgrunnlagGenerellAndelValues,
} from '../types/FordelingTsType';

const nullOrUndefined = (value) => value === null || value === undefined;

export const GRADERING_RANGE_DENOMINATOR = ' - ';

export const settAndelIArbeid = (andelerIArbeid: number[]): string => {
  if (andelerIArbeid.length === 0) {
    return '';
  }
  if (andelerIArbeid.length === 1) {
    return `${parseFloat(andelerIArbeid[0].toFixed(2))}`;
  }
  const minAndel = Math.min(...andelerIArbeid);
  const maxAndel = Math.max(...andelerIArbeid);
  return `${minAndel}${GRADERING_RANGE_DENOMINATOR}${maxAndel}`;
};

const finnnInntektskategorikode = (andel) => (andel.inntektskategori
&& andel.inntektskategori.kode !== inntektskategorier.UDEFINERT ? andel.inntektskategori.kode : '');

const createAndelnavn = (andel: FordelBeregningsgrunnlagAndel,
  harKunYtelse: boolean,
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId) => {
  if (!andel.aktivitetStatus || andel.aktivitetStatus.kode === aktivitetStatus.UDEFINERT) {
    return '';
  }
  if (andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold) {
    const agOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
    if (!agOpplysninger) {
      return andel.arbeidsforhold.arbeidsforholdType ? getKodeverknavn(andel.arbeidsforhold.arbeidsforholdType) : '';
    }
    return createVisningsnavnForAktivitetFordeling(agOpplysninger, andel.arbeidsforhold.eksternArbeidsforholdId);
  }
  if (harKunYtelse && andel.aktivitetStatus.kode === aktivitetStatus.BRUKERS_ANDEL) {
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
  getKodeverknavn: (kodeverk: Kodeverk) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): FordelBeregningsgrunnlagGenerellAndelValues => ({
  andel: createAndelnavn(andel, harKunYtelse, getKodeverknavn, arbeidsgiverOpplysningerPerId),
  aktivitetStatus: andel.aktivitetStatus.kode,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  kilde: andel.kilde == null ? null : andel.kilde.kode,
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
  inntektskategori: finnnInntektskategorikode(andel),
  forrigeInntektskategori: !andel.inntektskategori || andel.inntektskategori.kode === inntektskategorier.UDEFINERT ? null : andel.inntektskategori.kode,
});

export const mapToBelop = (andel: FordelBeregningsgrunnlagAndelValues): number => {
  const { fastsattBelop, readOnlyBelop } = andel;
  if (andel.skalRedigereInntekt) {
    return fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0;
  }
  return readOnlyBelop ? removeSpacesFromNumber(readOnlyBelop) : 0;
};
