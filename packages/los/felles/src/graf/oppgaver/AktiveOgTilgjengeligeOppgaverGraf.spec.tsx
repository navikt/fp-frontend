import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import { vi } from 'vitest';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { AktiveOgTilgjengeligeOppgaverGraf } from './AktiveOgTilgjengeligeOppgaverGraf';

// Mock ReactECharts for å unngå canvas-problemer i tests
vi.mock('../../ReactECharts', () => ({
  ReactECharts: ({ option }: { option: unknown }) => (
    <div data-testid="mock-chart" data-option={JSON.stringify(option)} />
  ),
}));

type ChartOption = {
  xAxis: { data: unknown[] };
  series: Array<{ data: unknown[] }>;
  legend: { data: unknown[] };
};

const getChartOption = (chartElement: HTMLElement): ChartOption => {
  const json = chartElement.getAttribute('data-option');
  return JSON.parse(json || '{}') as ChartOption;
};

const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const mockData: KøStatistikkDto[] = [
  { tidspunkt: getTidspunktForAntallTimerSiden(200), aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 3 }, // Eldre enn 7 dager (200 timer)
  { tidspunkt: getTidspunktForAntallTimerSiden(180), aktive: 21, tilgjengelige: 4, ventende: 31, avsluttet: 7 }, // Eldre enn 7 dager (180 timer)
  { tidspunkt: getTidspunktForAntallTimerSiden(170), aktive: 21, tilgjengelige: 6, ventende: 33, avsluttet: 2 }, // Eldre enn 7 dager (170 timer)
  { tidspunkt: getTidspunktForAntallTimerSiden(100), aktive: 19, tilgjengelige: 8, ventende: 29, avsluttet: 9 },
  // Innenfor 7 dager, utenfor 24 timer (100 timer = ~4 dager)
  { tidspunkt: getTidspunktForAntallTimerSiden(90), aktive: 19, tilgjengelige: 8, ventende: 30, avsluttet: 4 },
  // Innenfor 7 dager, utenfor 24 timer (90 timer = ~3.75 dager)
  { tidspunkt: getTidspunktForAntallTimerSiden(80), aktive: 19, tilgjengelige: 6, ventende: 28, avsluttet: 11 },
  // Innenfor 7 dager, utenfor 24 timer (80 timer = ~3.3 dager)
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10, ventende: 31, avsluttet: 6 }, // Innenfor 24 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9, ventende: 30, avsluttet: 14 }, // Innenfor 24 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6, ventende: 27, avsluttet: 5 }, // Innenfor 24 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4, ventende: 32, avsluttet: 17 }, // Innenfor 24 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9, ventende: 44, avsluttet: 8 }, // Innenfor 24 timer
];

describe('AktiveOgTilgjengeligeOppgaverGraf', () => {
  it('skal renderes med ToggleGroup for tidsintervaller', () => {
    render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={mockData} />);

    expect(screen.getByText('Siste måned')).toBeInTheDocument();
    expect(screen.getByText('Siste uke')).toBeInTheDocument();
    expect(screen.getByText('Siste døgn')).toBeInTheDocument();
  });

  it('skal vise graf med standard tidsintervall (uke) og 8 datapunkter', () => {
    render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={mockData} />);

    const chart = screen.getByTestId('mock-chart');
    const option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(8);
  });

  it('skal skifte til måned-intervall ved klikk på "Siste måned" og vise 11 datapunkter', async () => {
    render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={mockData} />);

    const maanedButton = screen.getByRole('radio', { name: 'Siste måned' });
    await userEvent.click(maanedButton);

    expect(maanedButton).toHaveAttribute('aria-checked', 'true');

    const chart = screen.getByTestId('mock-chart');
    const option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(11);
  });

  it('skal skifte til dag-intervall ved klikk på "Siste døgn" og filtrere til 5 datapunkter', async () => {
    render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={mockData} />);

    const dagButton = screen.getByRole('radio', { name: 'Siste døgn' });
    await userEvent.click(dagButton);

    expect(dagButton).toHaveAttribute('aria-checked', 'true');

    const chart = screen.getByTestId('mock-chart');
    const option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(5);
  });

  it('skal renderes med tom data og vise 0 datapunkter', () => {
    render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={[]} />);

    const chart = screen.getByTestId('mock-chart');
    const option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(0);
  });

  it('skal oppdatere grafen når data endres og vise nye datapunkter', () => {
    const initialData: KøStatistikkDto[] = [
      { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 10, tilgjengelige: 5, ventende: 15, avsluttet: 30 },
    ];

    const { rerender } = render(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={initialData} />);

    let chart = screen.getByTestId('mock-chart');
    let option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(1);

    // Oppdater med nye data
    const newData: KøStatistikkDto[] = [
      { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 10, tilgjengelige: 5, ventende: 15, avsluttet: 23 },
      { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 15, tilgjengelige: 8, ventende: 23, avsluttet: 10 },
      { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 20, tilgjengelige: 12, ventende: 30, avsluttet: 9 },
    ];

    rerender(<AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={newData} />);

    chart = screen.getByTestId('mock-chart');
    option = getChartOption(chart);

    expect(option.xAxis.data).toHaveLength(3);
  });
});
