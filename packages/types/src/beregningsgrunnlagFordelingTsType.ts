import type {
  FordelBeregningsgrunnlagAndelDto,
  FordelBeregningsgrunnlagArbeidsforholdDto,
  FordelBeregningsgrunnlagPeriodeDto,
  FordelingDto,
  NyPeriodeDto,
  RefusjonAndelTilVurderingDto,
  RefusjonTilVurderingDto,
  TidligereUtbetalingDto,
} from './apiDtoGenerert.ts';

export type TidligereUtbetalinger = TidligereUtbetalingDto;

export type RefusjonTilVurderingAndel = RefusjonAndelTilVurderingDto;

export type RefusjonTilVurdering = RefusjonTilVurderingDto;

export type PerioderMedGraderingEllerRefusjon = NyPeriodeDto;

export type ArbeidsforholdTilFordeling = FordelBeregningsgrunnlagArbeidsforholdDto;

export type FordelBeregningsgrunnlagAndel = FordelBeregningsgrunnlagAndelDto;

export type FordelBeregningsgrunnlagPeriode = FordelBeregningsgrunnlagPeriodeDto;

export type FaktaOmFordeling = FordelingDto;
