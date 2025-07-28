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
