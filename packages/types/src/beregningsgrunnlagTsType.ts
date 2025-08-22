import type {
  BeregningsgrunnlagDto,
  BeregningsgrunnlagPeriodeDto,
  BeregningsgrunnlagPrStatusOgAndelSnDto,
  EgenNæringDto,
  PgiDto,
  SammenligningsgrunnlagDto,
} from './apiDtoGenerert.ts';

export type Næring = EgenNæringDto;

export type PgiVerdier = PgiDto;

export type BeregningsgrunnlagAndel = BeregningsgrunnlagPrStatusOgAndelSnDto;

export type SammenligningsgrunlagProp = SammenligningsgrunnlagDto;

export type BeregningsgrunnlagPeriodeProp = BeregningsgrunnlagPeriodeDto;

export type Beregningsgrunnlag = BeregningsgrunnlagDto;
