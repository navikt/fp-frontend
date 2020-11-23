type InntektPrAndelProp = {
  andelsnr: number;
  fastsattBelop: number;
  inntektskategori?: string;
  nyAndel?: boolean;
  lagtTilAvSaksbehandler?: boolean;
  aktivitetStatus? : string;
  arbeidsforholdId?: string;
  arbeidsgiverId?: string;
}
export default InntektPrAndelProp;
