export type InnsynFormValues = {
  mottattDato?: string;
  innsynResultatType?: string;
  fristDato?: string;
  sattPaVent?: boolean;
  begrunnelse?: string;
  [key: `dokument_${number}`]: boolean;
};
