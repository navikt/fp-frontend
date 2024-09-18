export type Personadresse = Readonly<{
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>;

export default Personadresse;
