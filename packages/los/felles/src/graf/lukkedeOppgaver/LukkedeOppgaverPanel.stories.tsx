import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { LukkedeOppgaverPanel } from './LukkedeOppgaverPanel';
import { getIsoUkedag, startAvIsoUke } from './ukeUtils';

const mandagInneværendeUke = startAvIsoUke(dayjs());
const mandagForrigeUke = mandagInneværendeUke.subtract(1, 'week');
const mandagToUkerSiden = mandagForrigeUke.subtract(1, 'week');

const lagStatistikk = (ukeStart: dayjs.Dayjs, dagIndex: number, avsluttet: number): KøStatistikkDto => ({
  tidspunkt: ukeStart.add(dagIndex, 'day').hour(12).toISOString(),
  aktive: 20,
  tilgjengelige: 10,
  ventende: 30,
  avsluttet,
});

const HISTORISK_DATA: KøStatistikkDto[] = [
  // To uker siden
  lagStatistikk(mandagToUkerSiden, 0, 80),
  lagStatistikk(mandagToUkerSiden, 1, 35),
  lagStatistikk(mandagToUkerSiden, 2, 55),
  lagStatistikk(mandagToUkerSiden, 3, 25),
  lagStatistikk(mandagToUkerSiden, 4, 40),
  lagStatistikk(mandagToUkerSiden, 5, 10),
  lagStatistikk(mandagToUkerSiden, 6, 5),
  // Forrige uke
  lagStatistikk(mandagForrigeUke, 0, 90),
  lagStatistikk(mandagForrigeUke, 1, 40),
  lagStatistikk(mandagForrigeUke, 2, 65),
  lagStatistikk(mandagForrigeUke, 3, 20),
  lagStatistikk(mandagForrigeUke, 4, 35),
  lagStatistikk(mandagForrigeUke, 5, 10),
  lagStatistikk(mandagForrigeUke, 6, 5),
];

const DENNE_UKEN_VERDIER = [145, 24, 50, 41, 34];

const lagData = (dagensDato: dayjs.Dayjs): KøStatistikkDto[] => {
  const dagNr = getIsoUkedag(dagensDato);
  const denneUken = DENNE_UKEN_VERDIER
    .slice(0, dagNr)
    .map((avsluttet, i) => lagStatistikk(mandagInneværendeUke, i, avsluttet));
  return [...HISTORISK_DATA, ...denneUken];
};

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
    køStatistikk: lagData(mandagInneværendeUke.add(7, 'day')),
  },
};
