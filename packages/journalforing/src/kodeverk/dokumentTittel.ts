enum DokumentTittel {
    INNTEKTSMELDING = 'INNTEKTSMELDING',
    SØKNAD_FORELDREPENGER = 'SØKNAD_FORELDREPENGER',
    SØKNAD_SVANGERSKAPSPENGER = 'SØKNAD_SVANGERSKAPSPENGER',
    SØKNAD_ENGANGSSTØNAD = 'SØKNAD_ENGANGSSTØNAD',
    KLAGE = 'KLAGE',
    ANNET = 'ANNET',
}

export const listeMedTittler = Object.keys(DokumentTittel).filter((tittel) => Number.isNaN(Number(tittel)));

export default DokumentTittel;
