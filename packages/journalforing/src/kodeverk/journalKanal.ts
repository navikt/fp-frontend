enum JournalKanal {
    SELVBETJENING = 'SELVBETJENING',
    ALLTIN = 'ALLTIN',
    EESSI = 'EESSI',
    EIA = 'EIA',
    HELSENETT = 'HELSENETT',
    SKAN = 'SKAN',
}

const KANALER_SOM_ALDRI_SKAL_ENDRES = [JournalKanal.ALLTIN, JournalKanal.SELVBETJENING];

export const erKanalSomErÅpenForEndring = (kanal?: JournalKanal) => (!!kanal && !KANALER_SOM_ALDRI_SKAL_ENDRES.includes(kanal));

export default JournalKanal;
