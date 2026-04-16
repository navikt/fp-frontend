import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { LukkedeOppgaverPanel } from './LukkedeOppgaverPanel';

const daysToMonday = (dayjs().day() + 6) % 7;
const startOfPeriod = dayjs()
  .subtract(daysToMonday + 14, 'day')
  .startOf('day');

const lagStatistikk = (avsluttet: number, dagIndex: number): KøStatistikkDto => ({
  tidspunkt: startOfPeriod.add(dagIndex, 'day').subtract(1, 'minute').toISOString(),
  aktive: 20,
  tilgjengelige: 10,
  ventende: 30,
  avsluttet,
});

const VERDIER = [
  // to uker siden
  87, 35, 75, 44, 4, 11, 3,
  // forrige uke
  90, 40, 65, 20, 35, 10, 5,
  // denne uken
  145, 24, 50, 41, 34, 1, 0,
];

const meta = {
  title: 'los/LukkedeOppgaverPanel',
  component: LukkedeOppgaverPanel,
  args: {
    height: 400,
  },
} satisfies Meta<typeof LukkedeOppgaverPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    køStatistikk: VERDIER.map((avsluttet, i) => lagStatistikk(avsluttet, i)).filter(statistikk =>
      dayjs(statistikk.tidspunkt).isBefore(dayjs().add(1, 'second')),
    ),
    isPending: false,
  },
};

export const Laster: Story = {
  args: {
    køStatistikk: undefined,
    isPending: true,
  },
};
