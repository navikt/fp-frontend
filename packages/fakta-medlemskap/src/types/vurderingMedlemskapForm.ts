export enum MedlemskapVurdering {
  OPPFYLT = 'OPPFYLT',
  DELVIS_OPPFYLT = 'DELVIS_OPPFYLT',
  IKKE_OPPFYLT = 'IKKE_OPPFYLT',
}

export type VurderMedlemskapFormValues = {
  begrunnelse: string;
  vurdering: MedlemskapVurdering;
  opphørFom?: string;
  medlemFom?: string;
  avslagskode?: string;
};

export const SØKER_INNFLYTTET_FOR_SENT_KODE = '1052';
