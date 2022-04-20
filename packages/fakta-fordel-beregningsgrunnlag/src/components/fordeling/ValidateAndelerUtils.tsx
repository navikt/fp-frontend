import { IntlShape } from 'react-intl';

import AktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import {
  dateIsAfter, formatCurrencyNoKr, removeSpacesFromNumber, required,
} from '@fpsak-frontend/utils';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';
import { UseFormGetValues } from 'react-hook-form';
import { GRADERING_RANGE_DENOMINATOR, mapToBelop } from './BgFordelingUtils';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelingFieldError,
  PeriodeTsType,
} from '../../types/FordelBeregningsgrunnlagPanelValues';

const convertToNumber = (n: string): number => (n === null || n === undefined ? null : Number(removeSpacesFromNumber(n)));

type SortertAndelInfo = {
  andelsinfo: string;
  inntektskategori: string;
}

type Refusjonsinfo = {
  arbeidsforholdId: string;
  eksternArbeidsforholdId: string;
  arbeidsgiverNavn: string;
  arbeidsgiverId: string;
  refusjonskravFraInntektsmelding: number;
  totalRefusjon: number;
}

type FieldErrors = {
  refusjonskrav: string;
  fastsattBelop: string;
  andel: string;
  inntektskategori: string;

}

export const compareAndeler = (andel1: SortertAndelInfo, andel2: SortertAndelInfo): number => {
  if (andel1.andelsinfo === andel2.andelsinfo) {
    if (andel1.inntektskategori === andel2.inntektskategori) {
      return 0;
    }
    return andel1.inntektskategori > andel2.inntektskategori ? 1 : -1;
  }
  return andel1.andelsinfo > andel2.andelsinfo ? 1 : -1;
};

export const ulikeAndelerErrorMessage = (intl: IntlShape): string => intl
  .formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.UlikeAndeler' });

const erAndelerLike = (andel1: SortertAndelInfo, andel2: SortertAndelInfo): boolean => andel2.andelsinfo === andel1.andelsinfo
  && andel2.inntektskategori === andel1.inntektskategori;

export const validateUlikeAndelerWithGroupingFunction = (andelList: FordelBeregningsgrunnlagAndelValues[],
  mapToSort: (value: FordelBeregningsgrunnlagAndelValues, andelList: FordelBeregningsgrunnlagAndelValues[]) => SortertAndelInfo,
  intl: IntlShape) => {
  const mappedAndeler = andelList.map((value) => (mapToSort(value, andelList)));
  const sortedAndeler = mappedAndeler.slice().sort((andel1, andel2) => compareAndeler(andel1, andel2));
  for (let i = 0; i < sortedAndeler.length - 1; i += 1) {
    if (erAndelerLike(sortedAndeler[i], sortedAndeler[i + 1])) {
      return ulikeAndelerErrorMessage(intl);
    }
  }
  return null;
};

type Andelsnøkkel = {
  erNyAndel: boolean;
  aktivitetstatus: string;
  arbeidsgiverIdent: string;
  arbeidsforholdId: string;
  inntektskategori: string;
}

const erLikeFields = (field1: Andelsnøkkel, field2: Andelsnøkkel): boolean => field1.inntektskategori === field2.inntektskategori
    && field1.arbeidsgiverIdent === field2.arbeidsgiverIdent
    && field1.aktivitetstatus === field2.aktivitetstatus
  && field1.arbeidsforholdId === field2.arbeidsforholdId;

const erIListe = (andelerÅSjekkeMot: Andelsnøkkel[], andelÅSjekke: Andelsnøkkel): boolean => {
  for (let i = 0; i < andelerÅSjekkeMot.length; i += 1) {
    const andel = andelerÅSjekkeMot[i];
    if (erLikeFields(andelÅSjekke, andel)) {
      return true;
    }
  }
  return false;
};

const finnEksisterendeField = (fields: FordelBeregningsgrunnlagAndelValues[], andelsnr: number) => fields.find((f) => f.andelsnr === andelsnr);

const lagAndelsnøkler = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldName: string,
  fields: FordelBeregningsgrunnlagAndelValues[]): Andelsnøkkel[] => {
  const liste = [];
  for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
    const field = fields[fieldIndex];
    if (!!field.nyAndel && field.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
      const eksisterendeField = finnEksisterendeField(fields, field.andelsnrRef);
      liste.push({
        erNyAndel: field.nyAndel,
        aktivitetstatus: field.aktivitetStatus,
        inntektskategori: getValues(`${fieldName}.${fieldIndex}.inntektskategori`),
        arbeidsgiverIdent: eksisterendeField.arbeidsgiverId,
        arbeidsforholdId: eksisterendeField.arbeidsforholdId,
      });
    } else {
      liste.push({
        erNyAndel: field.nyAndel,
        aktivitetstatus: field.aktivitetStatus,
        inntektskategori: field.inntektskategori,
        arbeidsgiverIdent: field.arbeidsgiverId,
        arbeidsforholdId: field.arbeidsforholdId,
      });
    }
  }
  return liste;
};

export const validateUlikeAndeler = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[], intl: IntlShape) => () => {
  const nøklerAvAndeler = lagAndelsnøkler(getValues, fieldname, fields);
  const andelerSomErSjekket = [];
  for (let i = 0; i < nøklerAvAndeler.length; i += 1) {
    const andel = nøklerAvAndeler[i];
    if (erIListe(andelerSomErSjekket, andel)) {
      return ulikeAndelerErrorMessage(intl);
    }
    andelerSomErSjekket.push(andel);
  }
  return null;
};

const finnArbeidsforholdRefusjonsinfoListe = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[]): Refusjonsinfo[] => {
  const andelerMedArbeidsforhold = fields.filter((field) => field.arbeidsforholdId !== '');
  const arbeidsforholdRefusjonsbelop = [];
  andelerMedArbeidsforhold.forEach((field, index) => {
    const infoIndex = arbeidsforholdRefusjonsbelop
      .findIndex(({ arbeidsforholdId, arbeidsgiverId }) => arbeidsforholdId === field.arbeidsforholdId && arbeidsgiverId === field.arbeidsgiverId);
    const refusjon = getValues(`${fieldname}.${index}.refusjonskrav`);
    if (infoIndex >= 0) {
      const belopsInfo = arbeidsforholdRefusjonsbelop[infoIndex];
      if (belopsInfo.refusjonskravFraInntektsmelding < field.refusjonskravFraInntektsmelding) {
        arbeidsforholdRefusjonsbelop[infoIndex].refusjonskravFraInntektsmelding = field.refusjonskravFraInntektsmelding;
      }
      if (refusjon !== null && refusjon !== undefined) {
        arbeidsforholdRefusjonsbelop[infoIndex].totalRefusjon = belopsInfo.totalRefusjon + Number(removeSpacesFromNumber(refusjon));
      }
    } else {
      const {
        refusjonskravFraInntektsmelding, arbeidsforholdId,
        arbeidsgiverNavn, arbeidsgiverId, eksternArbeidsforholdId,
      } = field;
      let totalRefusjon = 0;
      if (refusjon !== null && refusjon !== undefined) {
        totalRefusjon = Number(removeSpacesFromNumber(refusjon));
      }
      arbeidsforholdRefusjonsbelop.push({
        arbeidsforholdId,
        eksternArbeidsforholdId,
        arbeidsgiverNavn,
        arbeidsgiverId,
        refusjonskravFraInntektsmelding,
        totalRefusjon,
      });
    }
  });
  return arbeidsforholdRefusjonsbelop;
};

export const skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding = (arbeidsgiver: string, intl: IntlShape): string => intl
  .formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.IkkjeHogereRefusjonEnnInntektsmelding' }, { arbeidsgiver });

export const validateTotalRefusjonPrArbeidsforhold = (fields: FordelBeregningsgrunnlagAndelValues[],
  fieldname: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape) => () => {
  const arbeidsforholdRefusjonsinfo = finnArbeidsforholdRefusjonsinfoListe(getValues, fieldname, fields);
  const arbeidsforholdMedForHogRefusjon = arbeidsforholdRefusjonsinfo
    .filter((refusjonsInfo) => refusjonsInfo.totalRefusjon > refusjonsInfo.refusjonskravFraInntektsmelding);
  if (arbeidsforholdMedForHogRefusjon.length > 0) {
    const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforholdMedForHogRefusjon[0].arbeidsgiverId];
    let arbeidsgiverString;
    if (!agOpplysninger) {
      arbeidsgiverString = arbeidsforholdMedForHogRefusjon[0].arbeidsgiverNavn;
    } else {
      arbeidsgiverString = createVisningsnavnForAktivitetFordeling(agOpplysninger, arbeidsforholdMedForHogRefusjon[0].eksternArbeidsforholdId);
    }
    return skalIkkjeVereHoegereEnnRefusjonFraInntektsmelding(arbeidsgiverString, intl);
  }
  return null;
};

export const skalVereLikFordelingMessage = (fordeling: string, intl: IntlShape): string => intl
  .formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.LikFordeling' }, { fordeling });

export const kanIkkjeHaNullBeregningsgrunnlagError = (intl: IntlShape): string => intl
  .formatMessage({ id: 'FordelBeregningsgrunnlag.Validation.KanIkkeHaNullIBeregningsgrunnlag' });

export const totalRefusjonMåVereLavereEnn = (seksG: string, intl: IntlShape): string => intl
  .formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.TotalRefusjonSkalIkkeOverstige' }, { seksG });

const totalRefusjonSkalVereLavereEnn = (value: number,
  seksG: number, intl: IntlShape): string => ((value >= Math.round(seksG)) ? totalRefusjonMåVereLavereEnn(formatCurrencyNoKr(seksG), intl) : undefined);

export const totalFordelingForMåVæreLavereEnn = (seksG: string, andelsliste: string, intl: IntlShape): string => intl
  .formatMessage({ id: 'BeregningInfoPanel.FordelBG.Validation.TotalFordelingLavereEnn' }, { seksG, andelsliste });

const totalFordelingSkalVereLavereEnn = (
  value: number, seksG: number, beskrivendeString: string, errorMessage: (seksG: string, andelsliste: string, intl: IntlShape) => string,
  intl: IntlShape,
): string => ((value >= Math.round(seksG)) ? errorMessage(formatCurrencyNoKr(seksG), beskrivendeString, intl) : undefined);

export const likFordeling = (
  value: number, fordeling: number, intl: IntlShape,
): string => ((value !== Math.round(fordeling)) ? skalVereLikFordelingMessage(formatCurrencyNoKr(Math.round(fordeling)), intl) : null);

const validateRefusjonsbelop = (refusjonskrav: string, skalKunneEndreRefusjon: boolean): string | undefined => {
  let refusjonskravError;
  if (skalKunneEndreRefusjon) {
    refusjonskravError = required(refusjonskrav);
  }
  return refusjonskravError;
};

const validateFordelingForGradertAndel = (intl: IntlShape, andel: FordelBeregningsgrunnlagAndelValues, periodeFom: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>, fieldname: string, index: number): boolean => {
  const arbeidsforholdIkkeOpphørt = !andel.arbeidsperiodeTom || dateIsAfter(andel.arbeidsperiodeTom, periodeFom);
  if (!andel.andelIArbeid || !arbeidsforholdIkkeOpphørt) {
    return false;
  }
  const beløpFraSaksbehandler = getValues(`${fieldname}.${index}.fastsattBelop`);
  const fastsattBeløp = beløpFraSaksbehandler ? removeSpacesFromNumber(beløpFraSaksbehandler) : 0;
  if (!Number.isNaN(Number(andel.andelIArbeid))) {
    const arbeidsprosent = Number(andel.andelIArbeid);
    if (arbeidsprosent > 0 && fastsattBeløp <= 0) {
      return true;
    }
  }
  const arbeidsprosenter = andel.andelIArbeid.split(GRADERING_RANGE_DENOMINATOR);
  const arbeidsprosenterOverNull = arbeidsprosenter.filter((val) => Number(val) > 0);
  return arbeidsprosenterOverNull.length > 0 && fastsattBeløp === 0;
};

export const validerBGGraderteAndeler = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  periodeFom: string,
  intl: IntlShape) => () => {
  const finnesUgyldigAndel = fields.some((field, index) => validateFordelingForGradertAndel(intl, field, periodeFom, getValues, fieldname, index));
  return finnesUgyldigAndel ? kanIkkjeHaNullBeregningsgrunnlagError(intl) : undefined;
};

export const validateFastsattBelop = (intl: IntlShape, andelFieldValues: FordelBeregningsgrunnlagAndelValues, periode: PeriodeTsType): string | null => {
  let fastsattBelopError = required(andelFieldValues.fastsattBelop);
  if (!fastsattBelopError) {
    fastsattBelopError = validateFordelingForGradertAndel(intl, andelFieldValues, periode);
  }
  return fastsattBelopError;
};

export const validateSumFastsattBelop = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  fordeling: number,
  intl: IntlShape) => () => {
  const sumFastsattBelop = fields.map((field, index) => mapToBelop(field, fieldname, getValues, index))
    .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);
  return fordeling !== undefined && fordeling !== null ? likFordeling(sumFastsattBelop, fordeling, intl) : null;
};

const finnFastsattRefusjon = (field: FordelBeregningsgrunnlagAndelValues,
  fieldname: string,
  index: number,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>): number => {
  const refusjonskrav = getValues(`${fieldname}.${index}.refusjonskrav`);
  return convertToNumber(refusjonskrav);
};

export const validateSumRefusjon = (fields: FordelBeregningsgrunnlagAndelValues[],
  fieldname: string,
  getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  grunnbeløp: number,
  intl: IntlShape) => () => {
  const harGraderingUtenRefusjon = !!fields.find((v, index) => v.andelIArbeid !== '0.00' && finnFastsattRefusjon(v, fieldname, index, getValues) === 0);
  const sumRefusjon = fields.map((field, index) => finnFastsattRefusjon(field, fieldname, index, getValues))
    .reduce((sum, refusjonskrav) => sum + refusjonskrav, 0);
  const seksG = 6 * grunnbeløp;
  return harGraderingUtenRefusjon ? totalRefusjonSkalVereLavereEnn(sumRefusjon, seksG, intl) : null;
};

const lagBeskrivendeStringAvStatuser = (
  statuser: string[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string): string => {
  const liste = statuser.map((status) => getKodeverknavn(status, KodeverkType.AKTIVITET_STATUS));
  liste.sort((a, b) => a.localeCompare(b));
  const unikListe = [...new Set(liste)];
  return unikListe.join(', ');
};

const finnFastsattBeløpForStatus = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  statuser: string[]): number => fields.filter((v) => statuser.includes(v.aktivitetStatus))
  .map((field, index) => mapToBelop(field, fieldname, getValues, index))
  .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);

const validateSumFastsattArbeidstaker = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  seksG: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  intl: IntlShape): string => {
  const statuserSomValideres = [AktivitetStatus.ARBEIDSTAKER];
  const sumFastsattBelop = finnFastsattBeløpForStatus(getValues, fieldname, fields, statuserSomValideres);
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, getKodeverknavn);
  return totalFordelingSkalVereLavereEnn(sumFastsattBelop, seksG, beskrivendeString, totalFordelingForMåVæreLavereEnn, intl);
};

const validateSumFastsattArbeidstakerOgFrilanser = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  seksG: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  intl: IntlShape): string => {
  const statuserSomPrioriteresOverSN = [AktivitetStatus.ARBEIDSTAKER,
    AktivitetStatus.FRILANSER,
    AktivitetStatus.DAGPENGER,
    AktivitetStatus.ARBEIDSAVKLARINGSPENGER];
  const statuserSomValideres = fields.filter((v) => statuserSomPrioriteresOverSN.includes(v.aktivitetStatus)).map((v) => v.aktivitetStatus);
  const sumFastsattBelop = finnFastsattBeløpForStatus(getValues, fieldname, fields, statuserSomValideres);
  const beskrivendeString = lagBeskrivendeStringAvStatuser(statuserSomValideres, getKodeverknavn);
  return totalFordelingSkalVereLavereEnn(sumFastsattBelop, seksG, beskrivendeString, totalFordelingForMåVæreLavereEnn, intl);
};

export const validateSumFastsattForUgraderteAktiviteter = (getValues: UseFormGetValues<FordelBeregningsgrunnlagAndelValues>,
  fieldname: string,
  fields: FordelBeregningsgrunnlagAndelValues[],
  intl: IntlShape,
  grunnbeløp: number,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string) => () => {
  const skalGradereFL = !!fields.find((v) => v.andelIArbeid !== '0.00' && v.aktivitetStatus === AktivitetStatus.FRILANSER);
  const seksG = 6 * grunnbeløp;
  if (skalGradereFL) {
    return validateSumFastsattArbeidstaker(getValues, fieldname, fields, seksG, getKodeverknavn, intl);
  }
  const skalGradereSN = !!fields.find((v) => v.andelIArbeid !== '0.00' && v.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  if (skalGradereSN) {
    return validateSumFastsattArbeidstakerOgFrilanser(getValues, fieldname, fields, seksG, getKodeverknavn, intl);
  }
  return null;
};
