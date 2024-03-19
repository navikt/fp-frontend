export type VedtakArbeidsforhold = {
  arbeidsgiverOrgnr: string;
  inntekt: number;
  inntektsperiode?: {
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
  identdato: string;
  opphørFom?: string;
  opprinneligIdentdato: string;
  periode: {
    fom: string;
    tom: string;
  };
  registrert: string;
  saksbehandlerId: string;
  arbeidskategori?: {
    kode: string;
    termnavn: string;
  };
  arbeidsforhold?: VedtakArbeidsforhold[];
  dekningsgrad: number;
  fødselsdatoBarn?: string;
  utbetalinger?: VedtakUtbetaling[];
  gradering?: number;
};

export type Sak = {
  iverksatt: string;
  resultat: string;
  registrert: string;
  sakId: string;
  mottatt: string;
  type: string;
  vedtatt: string;
  valg: string;
  undervalg: string;
  nivaa: string;
};

type InfotrygdVedtak = {
  vedtakKjeder: {
    opprinneligIdentdato: string;
    behandlingstema: {
      kode: string;
      termnavn: string;
    };
    vedtak: Vedtak[];
  }[];
  saker: Sak[];
};

export default InfotrygdVedtak;
