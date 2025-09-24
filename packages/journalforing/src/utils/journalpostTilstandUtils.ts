import type { JournalpostTilstand } from '../typer/journalpostTsType';

const ENDELIGE_TILSTANDER = new Set<JournalpostTilstand>([
  'FEILREGISTRERT',
  'JOURNALFOERT',
  'EKSPEDERT',
  'FERDIGSTILT',
]);

export const erEndeligJournalført = (tilstand: JournalpostTilstand | undefined): boolean =>
  !!tilstand && ENDELIGE_TILSTANDER.has(tilstand);
