export type Vilkarperiode = Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>;
