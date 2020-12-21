import moment from 'moment';
import inntektskategorier from '@fpsak-frontend/kodeverk/src/inntektskategorier';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';

import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';

import createVisningsnavnForAktivitet from './util/visningsnavnHelper';

const nullOrUndefined = (value) => value === null || value === undefined;

export const GRADERING_RANGE_DENOMINATOR = ' - ';

export const settAndelIArbeid = (andelerIArbeid) => {
  if (andelerIArbeid.length === 0) {
    return '';
  }
  if (andelerIArbeid.length === 1) {
    return `${parseFloat(andelerIArbeid[0]).toFixed(2)}`;
  }
  const minAndel = Math.min(...andelerIArbeid);
  const maxAndel = Math.max(...andelerIArbeid);
  return `${minAndel}${GRADERING_RANGE_DENOMINATOR}${maxAndel}`;
};

const finnnInntektskategorikode = (andel) => (andel.inntektskategori
&& andel.inntektskategori.kode !== inntektskategorier.UDEFINERT ? andel.inntektskategori.kode : '');

const createAndelnavn = (andel, harKunYtelse, getKodeverknavn) => {
  if (!andel.aktivitetStatus || andel.aktivitetStatus.kode === aktivitetStatus.UDEFINERT) {
    return '';
  }
  if (andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold) {
    return createVisningsnavnForAktivitet(andel.arbeidsforhold, getKodeverknavn);
  }
  if (harKunYtelse && andel.aktivitetStatus.kode === aktivitetStatus.BRUKERS_ANDEL) {
    return 'Ytelse';
  }
  return getKodeverknavn(andel.aktivitetStatus);
};

export const finnFastsattPrAar = (fordeltPrAar) => (nullOrUndefined(fordeltPrAar) ? null : fordeltPrAar);

export const settFastsattBelop = (fordeltPrAar, bruttoPrAar,
  skalPreutfyllesMedBeregningsgrunnlag) => {
  const fastsatt = finnFastsattPrAar(fordeltPrAar);
  if (fastsatt !== null) {
    return formatCurrencyNoKr(fastsatt);
  }
  return skalPreutfyllesMedBeregningsgrunnlag && !nullOrUndefined(bruttoPrAar) ? formatCurrencyNoKr(bruttoPrAar) : '';
};

const finnArbeidsgiverId = (arbeidsforhold) => {
  if (!arbeidsforhold) {
    return '';
  }
  if (arbeidsforhold.aktørId) {
    return arbeidsforhold.aktørId;
  }
  return arbeidsforhold.arbeidsgiverId ? arbeidsforhold.arbeidsgiverId : '';
};

export const setArbeidsforholdInitialValues = (andel) => ({
  arbeidsgiverNavn: andel.arbeidsforhold && andel.arbeidsforhold.arbeidsgiverNavn !== 0 ? andel.arbeidsforhold.arbeidsgiverNavn : '',
  arbeidsgiverId: finnArbeidsgiverId(andel.arbeidsforhold),
  arbeidsforholdId: andel.arbeidsforhold && andel.arbeidsforhold.arbeidsforholdId !== 0 ? andel.arbeidsforhold.arbeidsforholdId : '',
  arbeidsperiodeFom: andel.arbeidsforhold ? andel.arbeidsforhold.startdato : '',
  arbeidsperiodeTom: andel.arbeidsforhold && andel.arbeidsforhold.opphoersdato !== null
    ? andel.arbeidsforhold.opphoersdato : '',
  arbeidsforholdType: andel.arbeidsforholdType,
});

export const setGenerellAndelsinfo = (andel, harKunYtelse, getKodeverknavn) => ({
  andel: createAndelnavn(andel, harKunYtelse, getKodeverknavn),
  aktivitetStatus: andel.aktivitetStatus.kode,
  andelsnr: andel.andelsnr,
  nyAndel: false,
  kilde: andel.kilde == null ? null : andel.kilde.kode,
  lagtTilAvSaksbehandler: andel.lagtTilAvSaksbehandler === true,
  inntektskategori: finnnInntektskategorikode(andel),
  forrigeInntektskategori: !andel.inntektskategori || andel.inntektskategori.kode === inntektskategorier.UDEFINERT ? null : andel.inntektskategori.kode,
});

export const starterPaaEllerEtterStp = (bgAndel,
  skjaeringstidspunktBeregning) => (bgAndel && bgAndel.arbeidsforhold
    && bgAndel.arbeidsforhold.startdato && !moment(bgAndel.arbeidsforhold.startdato).isBefore(moment(skjaeringstidspunktBeregning)));

export const mapToBelop = (andel) => {
  const { fastsattBelop, readOnlyBelop } = andel;
  if (andel.skalRedigereInntekt) {
    return fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0;
  }
  return readOnlyBelop ? removeSpacesFromNumber(readOnlyBelop) : 0;
};
