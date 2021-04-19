export type VurderRefusjonValues = {
  [key: string]: string;
}

export type VurderRefusjonAndelTransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
};

type VurderRefusjonTransformedValues = {
  begrunnelse: string;
  kode: string;
  fastsatteAndeler: VurderRefusjonAndelTransformedValues[];
};

export default VurderRefusjonTransformedValues;
