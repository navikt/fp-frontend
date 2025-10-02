type Aktsomhet = 'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM';

export type BeregningResultatPeriode = {
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
};

type VedtakResultatType = 'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING';

export type BeregningsresultatTilbakekreving = {
  beregningResultatPerioder: BeregningResultatPeriode[];
  vedtakResultatType: VedtakResultatType;
};
