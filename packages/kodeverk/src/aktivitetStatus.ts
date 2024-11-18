import { BeregningsgrunnlagAndeltype } from './beregningsgrunnlagAndeltyper';

export enum AktivitetStatus {
  MIDLERTIDIG_INAKTIV = 'MIDL_INAKTIV',
  KUN_YTELSE = 'KUN_YTELSE',
  ARBEIDSTAKER = 'AT',
  FRILANSER = 'FL',
  SELVSTENDIG_NAERINGSDRIVENDE = 'SN',
  KOMBINERT_AT_FL = 'AT_FL',
  KOMBINERT_AT_SN = 'AT_SN',
  KOMBINERT_FL_SN = 'FL_SN',
  KOMBINERT_AT_FL_SN = 'AT_FL_SN',
  DAGPENGER = 'DP',
  ARBEIDSAVKLARINGSPENGER = 'AAP',
  SYKEPENGER_AV_DAGPENGER = 'SP_AV_DP',
  PLEIEPENGER_AV_DAGPENGER = 'PSB_AV_DP',
  MILITAER_ELLER_SIVIL = 'MS',
  BRUKERS_ANDEL = 'BA',
  UDEFINERT = '-',
}

export const aktivitetstatusTilAndeltypeMap = {} as Record<string, string>;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.BRUKERS_ANDEL] = BeregningsgrunnlagAndeltype.BRUKERS_ANDEL;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.FRILANSER] = BeregningsgrunnlagAndeltype.FRILANS;
aktivitetstatusTilAndeltypeMap[AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE] = BeregningsgrunnlagAndeltype.EGEN_NÆRING;

const statuserSomStotterFrilanser = [
  AktivitetStatus.FRILANSER,
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_FL_SN,
];
const statuserSomStotterArbeidstaker = [
  AktivitetStatus.ARBEIDSTAKER,
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const statuserSomStotterSelvstendigNaeringsdrivende = [
  AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  AktivitetStatus.KOMBINERT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const kombinasjonsstatuser = [
  AktivitetStatus.KOMBINERT_AT_FL,
  AktivitetStatus.KOMBINERT_AT_FL_SN,
  AktivitetStatus.KOMBINERT_FL_SN,
  AktivitetStatus.KOMBINERT_AT_SN,
];
const statuserSomStotterDagpengerEllerAAP = [AktivitetStatus.DAGPENGER, AktivitetStatus.ARBEIDSAVKLARINGSPENGER];
const statuserSomStotterTilstottendeYtelser = [AktivitetStatus.KUN_YTELSE];
const statuserSomStotterMilitaer = [AktivitetStatus.MILITAER_ELLER_SIVIL];

export const isStatusDagpengerOrAAP = (status: string): boolean =>
  statuserSomStotterDagpengerEllerAAP.some(s => s === status);

export const isStatusTilstotendeYtelse = (status: string): boolean =>
  statuserSomStotterTilstottendeYtelser.some(s => s === status);

export const isStatusFrilanserOrKombinasjon = (status: string): boolean =>
  statuserSomStotterFrilanser.some(s => s === status);

export const isStatusArbeidstakerOrKombinasjon = (status: string): boolean =>
  statuserSomStotterArbeidstaker.some(s => s === status);

export const isStatusSNOrKombinasjon = (status: string): boolean =>
  statuserSomStotterSelvstendigNaeringsdrivende.some(s => s === status);

export const isStatusKombinasjon = (status: string): boolean => kombinasjonsstatuser.some(s => s === status);

export const isStatusMilitaer = (status: string): boolean => statuserSomStotterMilitaer.some(s => s === status);
