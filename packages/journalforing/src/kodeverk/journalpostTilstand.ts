export enum JournalpostTilstand {
  MOTTATT = 'MOTTATT',
  JOURNALFOERT = 'JOURNALFOERT',
  FEILREGISTRERT = 'FEILREGISTRERT',
  EKSPEDERT = 'EKSPEDERT',
  FERDIGSTILT = 'FERDIGSTILT',
  UTGAAR = 'UTGAAR',
}

const ENDELIGE_TILSTANDER = [
  JournalpostTilstand.FEILREGISTRERT,
  JournalpostTilstand.JOURNALFOERT,
  JournalpostTilstand.EKSPEDERT,
  JournalpostTilstand.FERDIGSTILT,
];

export const erEndeligJournalført = (tilstand: JournalpostTilstand | undefined): boolean =>
  !!tilstand && ENDELIGE_TILSTANDER.includes(tilstand);
