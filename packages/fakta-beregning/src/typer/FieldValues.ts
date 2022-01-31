export type AndelFieldIdentifikator = {
  aktivitetStatus: string;
  andelsnr?: number;
  arbeidsgiverId?: string;
  arbeidsforholdType?: string;
}

type AndelFieldValue = AndelFieldIdentifikator & {
  andel: string;
  kanRedigereInntekt?: boolean;
  nyAndel?: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler?: boolean;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  skalKunneEndreAktivitet?: boolean
  fastsattBelop?: string;
  belopReadOnly?: string;
  refusjonskrav?: string;
}

export type InntektTransformed = {
  andelsnr: number;
  fastsattBelop: number;
  inntektskategori?: string;
  nyAndel?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  aktivitetStatus?: string;
  arbeidsforholdId?: string;
  arbeidsgiverId?: string;
}

export default AndelFieldValue;
