import type { JournalpostTilstand } from '../typer/journalpostTsType';

const ENDELIGE_TILSTANDER: JournalpostTilstand[] = ['FEILREGISTRERT', 'JOURNALFOERT', 'EKSPEDERT', 'FERDIGSTILT'];

export const erEndeligJournalført = (tilstand: JournalpostTilstand | undefined): boolean =>
  !!tilstand && ENDELIGE_TILSTANDER.includes(tilstand);
