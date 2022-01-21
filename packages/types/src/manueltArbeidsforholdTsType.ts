import Kodeverk from './kodeverkTsType';

type ManueltArbeidsforhold = Readonly<{
  behandlingUuid: string;
  begrunnelse: string;
  arbeidsgiverIdent: string;
  arbeidsgiverNavn: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  vurdering: Kodeverk | string;
}>

export default ManueltArbeidsforhold;
