export type Vilkarperiode = Readonly<{
  avslagKode?: string;
  begrunnelse?: string;
  vurderesIBehandlingen: boolean;
  erForlengelse?: boolean;
  merknad?: string;
  merknadParametere: { [name: string]: string };
  periode: { fom: string; tom: string };
  vilkarStatus: string;
}>;
