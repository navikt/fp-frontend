export type DekningsgradValues = {
  dekningsgrad?: number;
  begrunnDekningsgradEndring?: string;
};

type DekningsgradTransformedValues = {
  kode: string,
  begrunnelse: string,
  dekningsgrad: number,
};

export default DekningsgradTransformedValues;
