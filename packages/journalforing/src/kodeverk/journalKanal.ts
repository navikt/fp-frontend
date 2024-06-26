enum JournalKanal {
  SELVBETJENING = 'NAV_NO',
  ALTINN = 'ALTINN',
  EESSI = 'EESSI',
  EIA = 'EIA',
  HELSENETT = 'HELSENETTET',
  SKAN_NETS = 'SKAN_NETS',
}

const KANALER_SOM_ALDRI_SKAL_ENDRES = [JournalKanal.ALTINN, JournalKanal.SELVBETJENING];

export const erKanalSomErÅpenForEndring = (kanal?: JournalKanal) =>
  !!kanal && !KANALER_SOM_ALDRI_SKAL_ENDRES.includes(kanal);

export default JournalKanal;
