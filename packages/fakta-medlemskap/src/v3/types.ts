export enum MedlemskapsVurdering {
  GODKJENT = 'GODKJENT',
  IKKE_GODKJENT = 'IKKE_GODKJENT',
}

export type FormValues = {
  begrunnelse?: string;
  vurdering?: MedlemskapsVurdering;
};
