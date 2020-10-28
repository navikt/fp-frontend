export type ArbeidsgiverOpplysninger = Readonly<{
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>

type ArbeidsgiverOpplysningerPerId = {
  arbeidsgivere: Record<string, ArbeidsgiverOpplysninger>;
}

export default ArbeidsgiverOpplysningerPerId;
