import type { Meta, StoryObj } from '@storybook/react';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { AktiveOgTilgjengligeOppgaverGrafModal } from './AktiveOgTilgjengligeOppgaverGrafModal';

import messages from '../../i18n/nb_NO.json';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';

// Hjelpefunksjon for relative datoer
const withIntl = getIntlDecorator(messages);

// Hjelpefunksjon for relative datoer
const minusHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
// Generer OPPGAVE_KØ_STATISTIKK programmatisk
  return date.toISOString();
};

// Generer OPPGAVE_KØ_STATISTIKK programmatisk
const generateOppgaveKøStatistikk = (): OppgaveFilterStatistikk[] => {
  const data: OppgaveFilterStatistikk[] = [];
  for (let i = 24 * 7; i >= 0; i--) {
    data.push({
      tidspunkt: minusHours(i),
      aktive: 3500 + Math.floor(Math.random() * 20),
      aktiveLedige: 3400 + Math.floor(Math.random() * 15),
      behandlingerPåVent: 2321 + Math.floor(Math.random() * 15),
    });
  }
  return data;
};

const OPPGAVE_KØ_STATISTIKK = generateOppgaveKøStatistikk() satisfies OppgaveFilterStatistikk[];

const meta = {
  title: 'los/AktiveOgTilgjengligeOppgaverGrafModal',
  component: AktiveOgTilgjengligeOppgaverGrafModal,
  decorators: [withIntl],
} satisfies Meta<typeof AktiveOgTilgjengligeOppgaverGrafModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    aktiveOgLedigeTidslinje: OPPGAVE_KØ_STATISTIKK,
  },
};
