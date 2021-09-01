export type DekningsgradValues = {
  dekningsgrad?: number | null;
  begrunnDekningsgradEndring?: string | null;
};

export type DekningsgradValuesComplete = {
  dekningsgrad: number;
  begrunnDekningsgradEndring: string;
};

type DekningsgradTransformedValues = {
  kode: string,
  begrunnelse: string,
  dekningsgrad: number,
};

export default DekningsgradTransformedValues;
