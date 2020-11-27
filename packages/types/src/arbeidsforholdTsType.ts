import Kodeverk from './kodeverkTsType';

export type ArbeidsforholdPermisjon = Readonly<{
  permisjonFom?: string;
  permisjonTom?: string;
  permisjonsprosent?: number;
  type?: Kodeverk;
}>

type Arbeidsforhold = Readonly<{
  id?: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fomDato?: string;
  tomDato?: string;
  kilde: {
    navn: string;
  };
  mottattDatoInntektsmelding?: string;
  stillingsprosent?: number;
  brukArbeidsforholdet?: boolean;
  fortsettBehandlingUtenInntektsmelding?: boolean;
  erNyttArbeidsforhold?: boolean;
  erSlettet?: boolean;
  erstatterArbeidsforholdId?: string;
  harErsattetEttEllerFlere?: boolean;
  ikkeRegistrertIAaRegister?: boolean;
  tilVurdering?: boolean;
  vurderOmSkalErstattes?: boolean;
  erEndret?: boolean;
  brukMedJustertPeriode?: boolean;
  overstyrtTom?: string;
  lagtTilAvSaksbehandler?: boolean;
  basertPaInntektsmelding?: boolean;
  inntektMedTilBeregningsgrunnlag?: boolean;
  skjaeringstidspunkt?: string;
  begrunnelse?: string;
  permisjoner?: ArbeidsforholdPermisjon[];
  brukPermisjon?: boolean;
  kanOppretteNyttArbforFraIM?: boolean;
  harErstattetEttEllerFlere?: boolean;
}>

export default Arbeidsforhold;
