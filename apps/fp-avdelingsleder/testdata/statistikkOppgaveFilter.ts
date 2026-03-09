import dayjs from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

export const statistikkOppgaveFilter: KøStatistikkDto[] = [
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 14 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 21, tilgjengelige: 4, ventende: 31, avsluttet: 8 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 21, tilgjengelige: 6, ventende: 33, avsluttet: 22 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 19, tilgjengelige: 8, ventende: 29, avsluttet: 31 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 19, tilgjengelige: 8, ventende: 30, avsluttet: 17 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 19, tilgjengelige: 6, ventende: 28, avsluttet: 26 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 18, tilgjengelige: 3, ventende: 27, avsluttet: 39 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 18, tilgjengelige: 1, ventende: 26, avsluttet: 35 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 24, tilgjengelige: 5, ventende: 37, avsluttet: 12 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 27, tilgjengelige: 7, ventende: 41, avsluttet: 7 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 27, tilgjengelige: 7, ventende: 40, avsluttet: 19 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 25, tilgjengelige: 9, ventende: 38, avsluttet: 28 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 18, tilgjengelige: 3, ventende: 27, avsluttet: 24 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 18, tilgjengelige: 6, ventende: 28, avsluttet: 11 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10, ventende: 31, avsluttet: 29 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9, ventende: 30, avsluttet: 16 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6, ventende: 27, avsluttet: 37 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4, ventende: 32, avsluttet: 5 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9, ventende: 44, avsluttet: 21 },
];
