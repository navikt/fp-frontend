import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import type { statistikk_AktiveOgTilgjenglige } from '../typer/oppgaveFilterStatistikk';
import { AktiveOgTilgjengeligeOppgaverGraf } from './AktiveOgTilgjengeligeOppgaverGraf';

// Hjelpefunksjon for relative datoer
const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const meta = {
  title: 'los/AktiveOgTilgjengeligeOppgaverGraf',
  component: AktiveOgTilgjengeligeOppgaverGraf,
} satisfies Meta<typeof AktiveOgTilgjengeligeOppgaverGraf>;

export default meta;
type Story = StoryObj<typeof meta>;

const HURTIG_KO_DATA: statistikk_AktiveOgTilgjenglige[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 21, tilgjengelige: 5, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 21, tilgjengelige: 4, ventende: 31 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 21, tilgjengelige: 6, ventende: 33 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 19, tilgjengelige: 8, ventende: 29 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 19, tilgjengelige: 8, ventende: 30 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 19, tilgjengelige: 6, ventende: 28 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 18, tilgjengelige: 3, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 18, tilgjengelige: 1, ventende: 26 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 24, tilgjengelige: 5, ventende: 37 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 27, tilgjengelige: 7, ventende: 41 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 27, tilgjengelige: 7, ventende: 40 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 25, tilgjengelige: 9, ventende: 38 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 5, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 18, tilgjengelige: 3, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 18, tilgjengelige: 6, ventende: 28 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10, ventende: 31 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9, ventende: 30 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9, ventende: 44 },
];

export const HurtigKo: Story = {
  args: {
    aktiveOgLedigeTidslinje: HURTIG_KO_DATA,
  },
};

const A02_REGISTRERE_PAPIRSOKNAD_DATA: statistikk_AktiveOgTilgjenglige[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 22, tilgjengelige: 21, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 22, tilgjengelige: 21, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 22, tilgjengelige: 21, ventende: 34 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 22, tilgjengelige: 21, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 22, tilgjengelige: 21, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 22, tilgjengelige: 21, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 21, ventende: 33 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 22, tilgjengelige: 22, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 21, tilgjengelige: 21, ventende: 33 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 22, tilgjengelige: 22, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 22, tilgjengelige: 22, ventende: 34 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 24, tilgjengelige: 24, ventende: 36 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 25, tilgjengelige: 25, ventende: 38 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0.5), aktive: 25, tilgjengelige: 25, ventende: 38 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 25, tilgjengelige: 25, ventende: 38 },
];

export const A02RegistrerePapirsøknad: Story = {
  args: {
    aktiveOgLedigeTidslinje: A02_REGISTRERE_PAPIRSOKNAD_DATA,
  },
};

const ALLE_SAKER_DATA: statistikk_AktiveOgTilgjenglige[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 15601, tilgjengelige: 15382, ventende: 23401 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 15599, tilgjengelige: 15376, ventende: 23398 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 15611, tilgjengelige: 15392, ventende: 23416 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 15683, tilgjengelige: 15539, ventende: 23524 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 15741, tilgjengelige: 15597, ventende: 23611 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 15780, tilgjengelige: 15618, ventende: 23670 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 15756, tilgjengelige: 15568, ventende: 23634 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 15727, tilgjengelige: 15527, ventende: 23590 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 15681, tilgjengelige: 15447, ventende: 23521 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 15640, tilgjengelige: 15406, ventende: 23460 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 15609, tilgjengelige: 15366, ventende: 23413 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 15543, tilgjengelige: 15285, ventende: 23314 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 15485, tilgjengelige: 15238, ventende: 23227 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 15473, tilgjengelige: 15226, ventende: 23209 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 15478, tilgjengelige: 15243, ventende: 23217 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 15546, tilgjengelige: 15414, ventende: 23319 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 15619, tilgjengelige: 15483, ventende: 23428 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 15630, tilgjengelige: 15474, ventende: 23445 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 15613, tilgjengelige: 15426, ventende: 23419 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0.5), aktive: 15623, tilgjengelige: 15423, ventende: 23434 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 15611, tilgjengelige: 15398, ventende: 23416 },
];

export const A18AlleSaker: Story = {
  args: {
    aktiveOgLedigeTidslinje: ALLE_SAKER_DATA,
  },
};
