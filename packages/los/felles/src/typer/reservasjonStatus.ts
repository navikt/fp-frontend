export type ReservasjonStatus = {
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvIdent?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    flyttetAvIdent: string;
    navn: string;
    begrunnelse: string;
  } | null;
};
