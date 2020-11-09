import Kodeverk from './kodeverkTsType';

export type HistorikkinnslagEndretFelt = {
  endretFeltNavn: Kodeverk;
  navnVerdi?: string;
  klNavn?: string;
  fraVerdi?: string | boolean;
  tilVerdi?: string | boolean;
  klFraVerdi?: string;
  klTilVerdi?: string;
};

export type HistorikkinnslagDel = {
  begrunnelse?: Kodeverk;
  begrunnelseFritekst?: string;
  hendelse?: {
    navn?: Kodeverk;
    verdi?: string;
  };
  opplysninger?: {
    opplysningType?: Kodeverk;
    tilVerdi?: string;
  }[];
  soeknadsperiode?: {
    soeknadsperiodeType?: Kodeverk;
    navnVerdi?: string;
    tilVerdi?: string;
  };
  skjermlenke?: Kodeverk;
  aarsak?: Kodeverk;
  tema?: {
    endretFeltNavn: Kodeverk;
    klNavn: string;
    navnVerdi: string;
  }[];
  gjeldendeFra?: {
    fra?: string;
    navn?: string;
    verdi?: string;
  };
  resultat?: string;
  endredeFelter?: HistorikkinnslagEndretFelt[];
  aksjonspunkter?: {
    aksjonspunktKode: string;
    godkjent: boolean;
    aksjonspunktBegrunnelse?: string;
  }[];
};

export type HistorikkInnslagDokumentLink = Readonly<{
  dokumentId?: string;
  journalpostId?: string;
  tag: string;
  url?: string;
  utgått: boolean;
}>

type Historikkinnslag = Readonly<{
  opprettetAv?: string;
  opprettetTidspunkt: string;
  type: Kodeverk;
  behandlingId?: number;
  kjoenn: Kodeverk;
  aktoer: Kodeverk;
  dokumentLinks?: HistorikkInnslagDokumentLink[];
  historikkinnslagDeler: HistorikkinnslagDel[];
}>

export default Historikkinnslag;
