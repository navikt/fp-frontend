export type VedtakArbeidsforhold = {
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode: {
    kode: string;
    termnavn: string;
  };
  refusjon: boolean;
  identdato: string;
  opprinneligIdentdato: string;
};

export type VedtakUtbetaling = {
  periode: {
    fom: string;
    tom: string;
  };
  utbetalingsgrad: number;
  erRefusjon: boolean;
  dagsats: number;
  identdato: string;
  opprinneligIdentdato: string;
};

export type Vedtak = {
  behandlingstema: {
    kode: string;
    termnavn: string;
  };
  identdato: string;
  opphørFom: string;
  opprinneligIdentdato: string;
  periode: {
    fom: string;
    tom: string;
  };
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori: {
    kode: string;
    termnavn: string;
  };
  arbeidsforhold?: VedtakArbeidsforhold[];
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  utbetalinger?: VedtakUtbetaling[];
};

type InfotrygdVedtak = {
  vedtakKjedeForIdentdato: Record<
    string,
    {
      opprinneligIdentdato: string;
      vedtak: Vedtak[];
    }
  >;
};

export default InfotrygdVedtak;
