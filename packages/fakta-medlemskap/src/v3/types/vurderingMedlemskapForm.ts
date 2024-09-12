export enum Vurdering {
  OPPFYLT = 'OPPFYLT',
  DELVIS_OPPFYLT = 'DELVIS_OPPFYLT',
  IKKE_OPPFYLT = 'IKKE_OPPFYLT',
}

export type VurderMedlemskapFormValues = {
  begrunnelse: string;
  vurdering: Vurdering;
  opphørFom?: string;
  avslagskode?: string;
};
