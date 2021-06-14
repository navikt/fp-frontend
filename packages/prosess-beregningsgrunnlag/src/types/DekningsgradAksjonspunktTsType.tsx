export type DekningsgradValues = {
  dekningsgrad?: number;
};

type DekningsgradTransformedValues = {
  kode: string,
  begrunnelse: string,
  dekningsgrad: number,
};

export default DekningsgradTransformedValues;
