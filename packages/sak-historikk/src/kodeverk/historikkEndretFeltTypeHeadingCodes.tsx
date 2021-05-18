// kodeverk_i_frontend - Fiks når ein refaktorerar historikk
const historikkEndretFeltTypeHeadingCodes = {
  FORDELING_FOR_NY_ANDEL: {
    kode: 'FORDELING_FOR_NY_ANDEL',
    feltId: 'HistorikkEndretFeltHeading.FordelingForNyAndel',
  },
  FORDELING_FOR_ANDEL: {
    kode: 'FORDELING_FOR_ANDEL',
    feltId: 'HistorikkEndretFeltHeading.FordelingForAndel',
  },
} as Record<string, { kode: string, feltId: string }>;

export default historikkEndretFeltTypeHeadingCodes;
