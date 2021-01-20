import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import { Beregningsgrunnlag } from '@fpsak-frontend/types';
import { AndelFieldIdentifikator } from '../../../../typer/FieldValues';

const erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse = (andel: AndelFieldIdentifikator,
  beregningsgrunnlag: Beregningsgrunnlag, arbeidsforholdId?: string): boolean => {
  if (arbeidsforholdId === null) {
    const antallAndelerISammeVirksomhetMedReferanse = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel
      .filter((a) => a.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER)
      .filter((a) => a.arbeidsforhold && a.arbeidsforhold.arbeidsgiverIdent === andel.arbeidsgiverId)
      .filter((a) => a.arbeidsforhold && a.arbeidsforhold.arbeidsforholdId != null)
      .length;
    return antallAndelerISammeVirksomhetMedReferanse > 0;
  }
  return false;
};

export default erAndelUtenReferanseOgGrunnlagHarAndelForSammeArbeidsgiverMedReferanse;
