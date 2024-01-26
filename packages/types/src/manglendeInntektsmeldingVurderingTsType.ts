type ManglendeInntektsmeldingVurdering = Readonly<{
  behandlingUuid: string;
  behandlingVersjon: number;
  vurdering: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
}>;

export default ManglendeInntektsmeldingVurdering;
