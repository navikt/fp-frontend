export enum AksjonspunktÅrsak {
  MANGLENDE_INNTEKTSMELDING = 'MANGLENDE_INNTEKTSMELDING',
  INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD = 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD',
  PERMISJON_UTEN_SLUTTDATO = 'PERMISJON_UTEN_SLUTTDATO',
}

type PermisjonOgMangel = Readonly<{
  permisjonFom: string;
  permisjonTom?: string;
  type: string;
  årsak?: AksjonspunktÅrsak;
  permisjonStatus?: string;
}>;

export type Inntektsmelding = Readonly<{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: AksjonspunktÅrsak;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
  kildeSystem: string;
  startDatoPermisjon?: string;
  bortfalteNaturalytelser: BortfaltNaturalYtelse[];
  refusjonsperioder: Refusjonsperiode[];
  innsendingsårsak: keyof typeof InntektsmeldingInnsendingsårsak;
  behandlingsIdeer: string[];
}>;

type Refusjonsperiode = {
  refusjonsbeløpMnd: Beløp;
  fom: string;
}

type BortfaltNaturalYtelse = Readonly<{
  periode: { fomDato: string; tomDato: string; };
  beloepPerMnd: Beløp;
  type: keyof typeof NaturalytelseType;
  indexKey: string;
}>;

type Beløp = {
  verdi: number;
}

export const InntektsmeldingInnsendingsårsak = {
  NY: "Ny",
  ENDRING: "Endring",
  UDEFINERT: "Udefinert"
}

export const NaturalytelseType = {
  ELEKTRISK_KOMMUNIKASJON: "Elektrisk kommunikasjon",
  AKSJER_GRUNNFONDSBEVIS_TIL_UNDERKURS: "Aksjer grunnfondsbevis til underkurs",
  LOSJI: "Losji",
  KOST_DØGN: "Kostpenger døgnsats",
  BESØKSREISER_HJEMMET_ANNET: "Besøksreiser hjemmet annet",
  KOSTBESPARELSE_I_HJEMMET: "Kostbesparelser i hjemmet",
  RENTEFORDEL_LÅN: "Rentefordel lån",
  BIL: "Bil",
  KOST_DAGER: "Kostpenger dager",
  BOLIG: "Bolig",
  SKATTEPLIKTIG_DEL_FORSIKRINGER: "Skattepliktig del forsikringer",
  FRI_TRANSPORT: "Fri transport",
  OPSJONER: "Opsjoner",
  TILSKUDD_BARNEHAGEPLASS: "Tilskudd barnehageplass",
  ANNET: "Annet",
  BEDRIFTSBARNEHAGEPLASS: "Bedriftsbarnehageplass",
  YRKEBIL_TJENESTLIGBEHOV_KILOMETER: "Yrkesbil tjenesteligbehov kilometer",
  YRKEBIL_TJENESTLIGBEHOV_LISTEPRIS: "Yrkesbil tjenesteligbehov listepris",
  INNBETALING_TIL_UTENLANDSK_PENSJONSORDNING: "Innbetaling utenlandsk pensjonsordning",
  UDEFINERT: "Ikke definert"
};

export type Arbeidsforhold = Readonly<{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent: number;
  årsak?: AksjonspunktÅrsak;
  permisjonOgMangel?: PermisjonOgMangel;
  saksbehandlersVurdering?: string;
  begrunnelse?: string;
}>;

export type Inntektspost = Readonly<{
  beløp: number;
  fom: string;
  tom: string;
  type: string;
}>;

export type Inntekt = Readonly<{
  arbeidsgiverIdent: string;
  inntekter: Inntektspost[];
}>;

type ArbeidOgInntektsmelding = Readonly<{
  inntektsmeldinger: Inntektsmelding[];
  arbeidsforhold: Arbeidsforhold[];
  inntekter: Inntekt[];
  skjæringstidspunkt: string;
}>;

export default ArbeidOgInntektsmelding;
