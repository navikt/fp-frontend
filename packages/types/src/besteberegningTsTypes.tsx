import { Kodeverk } from '@fpsak-frontend/types';

export type Månedsgrunnlag = Readonly<{
  fom: string;
  tom: string;
  inntekter: BesteberegningInntekt[];
}>

export type BesteberegningInntekt = Readonly<{
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  opptjeningAktivitetType: Kodeverk;
  inntekt: number;
}>

export type Besteberegninggrunnlag = Readonly<{
  besteMåneder: Månedsgrunnlag[];
}>
