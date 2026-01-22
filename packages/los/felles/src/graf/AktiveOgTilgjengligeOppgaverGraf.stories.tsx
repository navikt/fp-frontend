import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk';
import { AktiveOgTilgjengeligeOppgaverGraf } from './AktiveOgTilgjengeligeOppgaverGraf';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

// Hjelpefunksjon for relative datoer
const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const meta = {
  title: 'los/AktiveOgTilgjengeligeOppgaverGraf',
  component: AktiveOgTilgjengeligeOppgaverGraf,
  decorators: [withIntl],
} satisfies Meta<typeof AktiveOgTilgjengeligeOppgaverGraf>;

export default meta;
type Story = StoryObj<typeof meta>;

const HURTIG_KO_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 21, tilgjengelige: 5 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 21, tilgjengelige: 4 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 21, tilgjengelige: 6 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 19, tilgjengelige: 8 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 19, tilgjengelige: 8 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 19, tilgjengelige: 6 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 18, tilgjengelige: 3 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 18, tilgjengelige: 1 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 24, tilgjengelige: 5 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 27, tilgjengelige: 7 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 27, tilgjengelige: 7 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 25, tilgjengelige: 9 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 5 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 18, tilgjengelige: 3 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 18, tilgjengelige: 6 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9 },
];

export const HurtigKo: Story = {
  args: {
    aktiveOgLedigeTidslinje: HURTIG_KO_DATA,
  },
};

const A02_REGISTRERE_PAPIRSOKNAD_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 22, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 22, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 22, tilgjengelige: 21 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 22, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 22, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 22, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 21 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 22, tilgjengelige: 22 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 21, tilgjengelige: 21 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 22, tilgjengelige: 22 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 22, tilgjengelige: 22 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 24, tilgjengelige: 24 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 25, tilgjengelige: 25 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0.5), aktive: 25, tilgjengelige: 25 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 25, tilgjengelige: 25 },
];

export const A02RegistrerePapirsøknad: Story = {
  args: {
    aktiveOgLedigeTidslinje: A02_REGISTRERE_PAPIRSOKNAD_DATA,
  },
};

const ALLE_SAKER_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 15601, tilgjengelige: 15382 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 15599, tilgjengelige: 15376 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 15611, tilgjengelige: 15392 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 15683, tilgjengelige: 15539 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 15741, tilgjengelige: 15597 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 15780, tilgjengelige: 15618 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 15756, tilgjengelige: 15568 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 15727, tilgjengelige: 15527 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 15681, tilgjengelige: 15447 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 15640, tilgjengelige: 15406 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 15609, tilgjengelige: 15366 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 15543, tilgjengelige: 15285 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 15485, tilgjengelige: 15238 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 15473, tilgjengelige: 15226 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 15478, tilgjengelige: 15243 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 15546, tilgjengelige: 15414 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 15619, tilgjengelige: 15483 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 15630, tilgjengelige: 15474 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 15613, tilgjengelige: 15426 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0.5), aktive: 15623, tilgjengelige: 15423 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 15611, tilgjengelige: 15398 },
];

export const A18AlleSaker: Story = {
  args: {
    aktiveOgLedigeTidslinje: ALLE_SAKER_DATA,
  },
};
