import type { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';
import { AktiveOgTilgjengligeOppgaverGrafDialog } from './AktiveOgTilgjengligeOppgaverGrafDialog.tsx';

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
  title: 'los/AktiveOgTilgjengligeOppgaverGrafModal',
  component: AktiveOgTilgjengligeOppgaverGrafDialog,
  decorators: [withIntl],
} satisfies Meta<typeof AktiveOgTilgjengligeOppgaverGrafDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const HURTIG_KO_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 21, aktiveLedige: 5 },
  { tidspunkt: minusHours(42), aktive: 21, aktiveLedige: 4 },
  { tidspunkt: minusHours(41), aktive: 21, aktiveLedige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 19, aktiveLedige: 8 },
  { tidspunkt: minusHours(27), aktive: 19, aktiveLedige: 8 },
  { tidspunkt: minusHours(26), aktive: 19, aktiveLedige: 6 },
  { tidspunkt: minusHours(25), aktive: 18, aktiveLedige: 3 },
  { tidspunkt: minusHours(24), aktive: 18, aktiveLedige: 1 },
  { tidspunkt: minusHours(23), aktive: 24, aktiveLedige: 5 },
  { tidspunkt: minusHours(22), aktive: 27, aktiveLedige: 7 },
  { tidspunkt: minusHours(21), aktive: 27, aktiveLedige: 7 },
  { tidspunkt: minusHours(20), aktive: 25, aktiveLedige: 9 },
  { tidspunkt: minusHours(19), aktive: 21, aktiveLedige: 5 },
  { tidspunkt: minusHours(18), aktive: 18, aktiveLedige: 3 },
  { tidspunkt: minusHours(17), aktive: 18, aktiveLedige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 20, aktiveLedige: 10 },
  { tidspunkt: minusHours(3), aktive: 20, aktiveLedige: 9 },
  { tidspunkt: minusHours(2), aktive: 18, aktiveLedige: 6 },
  { tidspunkt: minusHours(1), aktive: 21, aktiveLedige: 4 },
  { tidspunkt: minusHours(0), aktive: 29, aktiveLedige: 9 },
];

export const HurtigKo: Story = {
  args: {
    aktiveOgLedigeTidslinje: HURTIG_KO_DATA,
  },
};

const A02_REGISTRERE_PAPIRSOKNAD_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 22, aktiveLedige: 21 },
  { tidspunkt: minusHours(42), aktive: 22, aktiveLedige: 21 },
  { tidspunkt: minusHours(41), aktive: 22, aktiveLedige: 21 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 22, aktiveLedige: 21 },
  { tidspunkt: minusHours(27), aktive: 22, aktiveLedige: 21 },
  { tidspunkt: minusHours(26), aktive: 22, aktiveLedige: 21 },
  { tidspunkt: minusHours(25), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(24), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(23), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(22), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(21), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(20), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(19), aktive: 21, aktiveLedige: 21 },
  { tidspunkt: minusHours(18), aktive: 22, aktiveLedige: 22 },
  { tidspunkt: minusHours(17), aktive: 21, aktiveLedige: 21 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 22, aktiveLedige: 22 },
  { tidspunkt: minusHours(3), aktive: 22, aktiveLedige: 22 },
  { tidspunkt: minusHours(2), aktive: 24, aktiveLedige: 24 },
  { tidspunkt: minusHours(1), aktive: 25, aktiveLedige: 25 },
  { tidspunkt: minusHours(0.5), aktive: 25, aktiveLedige: 25 },
  { tidspunkt: minusHours(0), aktive: 25, aktiveLedige: 25 },
];

export const A02RegistrerePapirsøknad: Story = {
  args: {
    aktiveOgLedigeTidslinje: A02_REGISTRERE_PAPIRSOKNAD_DATA,
  },
};

const ALLE_SAKER_DATA: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 15601, aktiveLedige: 15382 },
  { tidspunkt: minusHours(42), aktive: 15599, aktiveLedige: 15376 },
  { tidspunkt: minusHours(41), aktive: 15611, aktiveLedige: 15392 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 15683, aktiveLedige: 15539 },
  { tidspunkt: minusHours(27), aktive: 15741, aktiveLedige: 15597 },
  { tidspunkt: minusHours(26), aktive: 15780, aktiveLedige: 15618 },
  { tidspunkt: minusHours(25), aktive: 15756, aktiveLedige: 15568 },
  { tidspunkt: minusHours(24), aktive: 15727, aktiveLedige: 15527 },
  { tidspunkt: minusHours(23), aktive: 15681, aktiveLedige: 15447 },
  { tidspunkt: minusHours(22), aktive: 15640, aktiveLedige: 15406 },
  { tidspunkt: minusHours(21), aktive: 15609, aktiveLedige: 15366 },
  { tidspunkt: minusHours(20), aktive: 15543, aktiveLedige: 15285 },
  { tidspunkt: minusHours(19), aktive: 15485, aktiveLedige: 15238 },
  { tidspunkt: minusHours(18), aktive: 15473, aktiveLedige: 15226 },
  { tidspunkt: minusHours(17), aktive: 15478, aktiveLedige: 15243 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 15546, aktiveLedige: 15414 },
  { tidspunkt: minusHours(3), aktive: 15619, aktiveLedige: 15483 },
  { tidspunkt: minusHours(2), aktive: 15630, aktiveLedige: 15474 },
  { tidspunkt: minusHours(1), aktive: 15613, aktiveLedige: 15426 },
  { tidspunkt: minusHours(0.5), aktive: 15623, aktiveLedige: 15423 },
  { tidspunkt: minusHours(0), aktive: 15611, aktiveLedige: 15398 },
];


export const A18AlleSaker: Story = {
  args: {
    aktiveOgLedigeTidslinje: ALLE_SAKER_DATA,
  },
};

