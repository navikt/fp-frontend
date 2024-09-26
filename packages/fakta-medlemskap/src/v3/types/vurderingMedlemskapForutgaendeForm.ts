export enum Vurdering {
  OPPFYLT = 'OPPFYLT',
  IKKE_OPPFYLT = 'IKKE_OPPFYLT',
}

export type VurderMedlemskapForutgaendeFormValues = {
  begrunnelse: string;
  vurdering: Vurdering;
  medlemFom?: string;
  avslagskode?: string;
};

export const SØKER_INNFLYTTET_FOR_SENT_KODE = '1052';
