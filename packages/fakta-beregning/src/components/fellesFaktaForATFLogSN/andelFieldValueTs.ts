type AndelFieldValue = {
  andel: string;
  aktivitetStatus: string;
  andelsnr: number;
  nyAndel?: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler?: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  arbeidsforholdType?: string;
  skalKunneEndreAktivitet?: boolean
  fastsattBelop?: number;
  belopReadOnly?: number;
  refusjonskrav?: number;
}

export default AndelFieldValue;
