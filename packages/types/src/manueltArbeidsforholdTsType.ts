type ManueltArbeidsforhold = Readonly<{
  behandlingUuid: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  vurdering: string;
}>

export default ManueltArbeidsforhold;
