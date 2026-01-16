import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';
import { AktiveOgTilgjengligeOppgaverGraf } from './AktiveOgTilgjengligeOppgaverGraf.tsx';

import messages from '../../i18n/nb_NO.json';

// Hjelpefunksjon for relative datoer
const withIntl = getIntlDecorator(messages);

// Hjelpefunksjon for relative datoer
const minusHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

const meta = {
  title: 'los/AktiveOgTilgjengligeOppgaverGraf',
  component: AktiveOgTilgjengligeOppgaverGraf,
  decorators: [withIntl],
} satisfies Meta<typeof AktiveOgTilgjengligeOppgaverGraf>;

export default meta;
type Story = StoryObj<typeof meta>;

const HURTIG_KO_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 21, tilgjenglige: 5 },
  { tidspunkt: minusHours(42), aktive: 21, tilgjenglige: 4 },
  { tidspunkt: minusHours(41), aktive: 21, tilgjenglige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 19, tilgjenglige: 8 },
  { tidspunkt: minusHours(27), aktive: 19, tilgjenglige: 8 },
  { tidspunkt: minusHours(26), aktive: 19, tilgjenglige: 6 },
  { tidspunkt: minusHours(25), aktive: 18, tilgjenglige: 3 },
  { tidspunkt: minusHours(24), aktive: 18, tilgjenglige: 1 },
  { tidspunkt: minusHours(23), aktive: 24, tilgjenglige: 5 },
  { tidspunkt: minusHours(22), aktive: 27, tilgjenglige: 7 },
  { tidspunkt: minusHours(21), aktive: 27, tilgjenglige: 7 },
  { tidspunkt: minusHours(20), aktive: 25, tilgjenglige: 9 },
  { tidspunkt: minusHours(19), aktive: 21, tilgjenglige: 5 },
  { tidspunkt: minusHours(18), aktive: 18, tilgjenglige: 3 },
  { tidspunkt: minusHours(17), aktive: 18, tilgjenglige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 20, tilgjenglige: 10 },
  { tidspunkt: minusHours(3), aktive: 20, tilgjenglige: 9 },
  { tidspunkt: minusHours(2), aktive: 18, tilgjenglige: 6 },
  { tidspunkt: minusHours(1), aktive: 21, tilgjenglige: 4 },
  { tidspunkt: minusHours(0), aktive: 29, tilgjenglige: 9 },
];

export const HurtigKo: Story = {
  args: {
    aktiveOgLedigeTidslinje: HURTIG_KO_DATA,
  },
};

const A02_REGISTRERE_PAPIRSOKNAD_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 22, tilgjenglige: 21 },
  { tidspunkt: minusHours(42), aktive: 22, tilgjenglige: 21 },
  { tidspunkt: minusHours(41), aktive: 22, tilgjenglige: 21 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 22, tilgjenglige: 21 },
  { tidspunkt: minusHours(27), aktive: 22, tilgjenglige: 21 },
  { tidspunkt: minusHours(26), aktive: 22, tilgjenglige: 21 },
  { tidspunkt: minusHours(25), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(24), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(23), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(22), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(21), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(20), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(19), aktive: 21, tilgjenglige: 21 },
  { tidspunkt: minusHours(18), aktive: 22, tilgjenglige: 22 },
  { tidspunkt: minusHours(17), aktive: 21, tilgjenglige: 21 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 22, tilgjenglige: 22 },
  { tidspunkt: minusHours(3), aktive: 22, tilgjenglige: 22 },
  { tidspunkt: minusHours(2), aktive: 24, tilgjenglige: 24 },
  { tidspunkt: minusHours(1), aktive: 25, tilgjenglige: 25 },
  { tidspunkt: minusHours(0.5), aktive: 25, tilgjenglige: 25 },
  { tidspunkt: minusHours(0), aktive: 25, tilgjenglige: 25 },
];

export const A02RegistrerePapirsøknad: Story = {
  args: {
    aktiveOgLedigeTidslinje: A02_REGISTRERE_PAPIRSOKNAD_DATA,
  },
};

const ALLE_SAKER_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 15601, tilgjenglige: 15382 },
  { tidspunkt: minusHours(42), aktive: 15599, tilgjenglige: 15376 },
  { tidspunkt: minusHours(41), aktive: 15611, tilgjenglige: 15392 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 15683, tilgjenglige: 15539 },
  { tidspunkt: minusHours(27), aktive: 15741, tilgjenglige: 15597 },
  { tidspunkt: minusHours(26), aktive: 15780, tilgjenglige: 15618 },
  { tidspunkt: minusHours(25), aktive: 15756, tilgjenglige: 15568 },
  { tidspunkt: minusHours(24), aktive: 15727, tilgjenglige: 15527 },
  { tidspunkt: minusHours(23), aktive: 15681, tilgjenglige: 15447 },
  { tidspunkt: minusHours(22), aktive: 15640, tilgjenglige: 15406 },
  { tidspunkt: minusHours(21), aktive: 15609, tilgjenglige: 15366 },
  { tidspunkt: minusHours(20), aktive: 15543, tilgjenglige: 15285 },
  { tidspunkt: minusHours(19), aktive: 15485, tilgjenglige: 15238 },
  { tidspunkt: minusHours(18), aktive: 15473, tilgjenglige: 15226 },
  { tidspunkt: minusHours(17), aktive: 15478, tilgjenglige: 15243 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 15546, tilgjenglige: 15414 },
  { tidspunkt: minusHours(3), aktive: 15619, tilgjenglige: 15483 },
  { tidspunkt: minusHours(2), aktive: 15630, tilgjenglige: 15474 },
  { tidspunkt: minusHours(1), aktive: 15613, tilgjenglige: 15426 },
  { tidspunkt: minusHours(0.5), aktive: 15623, tilgjenglige: 15423 },
  { tidspunkt: minusHours(0), aktive: 15611, tilgjenglige: 15398 },
];

export const A18AlleSaker: Story = {
  args: {
    aktiveOgLedigeTidslinje: ALLE_SAKER_DATA,
  },
};
