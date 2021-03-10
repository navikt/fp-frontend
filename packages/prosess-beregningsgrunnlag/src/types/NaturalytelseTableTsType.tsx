export type NaturalytelseEndring = {
  fom: string;
  tom?: string;
  beløpPrÅr: number;
  beløpPrMåned: number;
};

export type NaturalytelseTabellRad = {
  visningsnavn: string;
  nøkkel: string;
  naturalytelseEndringer: NaturalytelseEndring[];
};

export type NaturalytelseTabellData = {
  rader: NaturalytelseTabellRad[];
};

export default NaturalytelseTabellData;
