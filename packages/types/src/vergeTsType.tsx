export type Verge = {
  navn: string;
  fnr?: string;
  organisasjonsnummer?: string;
  gyldigFom: string;
  gyldigTom: string;
  vergeType: string;
};

export type OpprettVergeParams =
  | ({
      navn: string;
      gyldigFom: string;
      gyldigTom: string;
      vergeType: string;
    } & {
      fnr: string;
    })
  | {
      organisasjonsnummer: string;
    };
