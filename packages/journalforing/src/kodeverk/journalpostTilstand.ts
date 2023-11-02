enum JournalpostTilstand {
  MOTTATT = 'MOTTATT',
  JOURNALFOERT = 'JOURNALFOERT',
  FEILREGISTRERT = 'FEILREGISTRERT',
  UTGAAR = 'UTGAAR',
}

const ENDELIGE_TILSTANDER = [JournalpostTilstand.FEILREGISTRERT, JournalpostTilstand.JOURNALFOERT];

export const erEndeligJournalført = (tilstand: JournalpostTilstand | undefined): boolean =>
  !!tilstand && ENDELIGE_TILSTANDER.includes(tilstand);

export default JournalpostTilstand;
