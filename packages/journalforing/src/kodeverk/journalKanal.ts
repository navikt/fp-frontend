enum JournalKanal {
  SELVBETJENING = 'NAV_NO',
  ALLTIN = 'ALLTIN',
  EESSI = 'EESSI',
  EIA = 'EIA',
  HELSENETT = 'HELSENETTET',
  SKAN_NETS = 'SKAN_NETS',
}

const KANALER_SOM_ALDRI_SKAL_ENDRES = [JournalKanal.ALLTIN, JournalKanal.SELVBETJENING];

export const erKanalSomErÅpenForEndring = (kanal?: JournalKanal) =>
  !!kanal && !KANALER_SOM_ALDRI_SKAL_ENDRES.includes(kanal);

export default JournalKanal;
