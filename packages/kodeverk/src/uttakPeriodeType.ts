const uttakPeriodeType = {
  MODREKVOTE: 'MØDREKVOTE',
  FEDREKVOTE: 'FEDREKVOTE',
  FELLESPERIODE: 'FELLESPERIODE',
  FORELDREPENGER_FOR_FODSEL: 'FORELDREPENGER_FØR_FØDSEL',
  FORELDREPENGER: 'FORELDREPENGER',
  UDEFINERT: '-',
};

// TODO Kva er dette? Kodeverk-navn skal hentast fra databasen!
export const uttakPeriodeNavn = {
  MØDREKVOTE: 'Mødrekvote',
  FEDREKVOTE: 'Fedrekvote',
  FELLESPERIODE: 'Fellesperiode',
  FORELDREPENGER_FØR_FØDSEL: 'Foreldrepenger før fødsel',
  FORELDREPENGER: 'Foreldrepenger',
  FLERBARNSDAGER: 'Flerbarnsdager',
  UDEFINERT: '-',
} as Record<string, string>;

export default uttakPeriodeType;
