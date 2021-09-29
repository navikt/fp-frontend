export type NyIArbeidslivetValues = {
  bruttoBeregningsgrunnlag?: string;
  fastsettBeregningsgrnunnlagSNBegrunnelse?: string;
}

export type VurderOgFastsettValues = {
  erVarigEndretNaering?: boolean;
  varigEndringNyoppstartetBegrunnelse?: string;
  bruttoBeregningsgrunnlag?: string;
}

export type VurderVarigEndretTransformed = {
  kode: string;
  erVarigEndretNaering: boolean;
  begrunnelse: string;
  bruttoBeregningsgrunnlag?: number;
};

export type NyIArbeidslivetruttoNæringTransformed = {
  kode: string;
  begrunnelse: string;
  bruttoBeregningsgrunnlag: number;
};

export default VurderVarigEndretTransformed;
