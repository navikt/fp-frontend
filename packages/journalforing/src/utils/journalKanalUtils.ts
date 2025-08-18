import type { JournalKanal } from '../typer/journalpostTsType';

const KANALER_SOM_ALDRI_SKAL_ENDRES: JournalKanal[] = ['ALTINN', 'NAV_NO'];

export const erKanalSomErÅpenForEndring = (kanal?: JournalKanal) =>
  !!kanal && !KANALER_SOM_ALDRI_SKAL_ENDRES.includes(kanal);
