enum DokumentTittel {
    INNTEKTSMELDING = 'Inntektsmelding',
    SØKNAD_FORELDREPENGER = 'Søknad om foreldrepenger',
    SØKNAD_SVANGERSKAPSPENGER = 'Søknad om svangerskapspenger',
    SØKNAD_ENGANGSSTØNAD = 'Søknad om engangsstønad',
    KLAGE = 'Klage',
    ANNET = 'Annet',
}

export const listeMedTittler = Object.values(DokumentTittel).filter((tittel) => Number.isNaN(Number(tittel)));

export default DokumentTittel;
