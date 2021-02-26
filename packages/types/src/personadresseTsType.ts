import Kodeverk from './kodeverkTsType';

export type Personadresse = Readonly<{
  adresseType?: Kodeverk;
  mottakerNavn?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>

export default Personadresse;
