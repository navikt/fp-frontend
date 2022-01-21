import Kodeverk from './kodeverkTsType';

type ManglendeInntektsmeldingVurdering = Readonly<{
  behandlingUuid: string;
  vurdering: Kodeverk | string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef: string;
}>

export default ManglendeInntektsmeldingVurdering;
