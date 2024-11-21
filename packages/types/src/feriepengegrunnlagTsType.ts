export type FeriepengegrunnlagAndel = Readonly<{
  aktivitetStatus: string;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>;

export type Feriepengegrunnlag = Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>;
