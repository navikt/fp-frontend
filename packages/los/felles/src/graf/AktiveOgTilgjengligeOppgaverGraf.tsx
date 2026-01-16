import { useState } from 'react';

import { ToggleGroup } from '@navikt/ds-react';
import { ToggleGroupItem } from '@navikt/ds-react/ToggleGroup';

import { ReactECharts } from '../ReactECharts.tsx';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';

enum Tidsintervall {
  DAG = 'dag',
  UKE = 'uke',
  MÅNED = 'måned',
}

interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const height = 400;
  const aktivLabel = 'Ledige';
  const reserverteLabel = 'Reserverte';

  const [tidsintervall, setTidsintervall] = useState<Tidsintervall>(Tidsintervall.UKE);
  const filtrertTidslinje = filtererTidslinjeBasertPåValgIntervall(aktiveOgLedigeTidslinje, tidsintervall);
  const sortertOgFiltrertTidslinje = filtrertTidslinje.toSorted(
    (a, b) => new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime(),
  );
  // Bruk sampling på tidspunkter og data
  const granularitet = 40;
  const sampledTidspunkter = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.tidspunkt),
    granularitet,
  );
  const sampledLedigeData = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.tilgjenglige),
    granularitet,
  );
  const sampledReserverteData = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.aktive - o.tilgjenglige),
    granularitet,
  );

  return (
    <>
      <ToggleGroup size="small" value={tidsintervall} onChange={value => setTidsintervall(value as Tidsintervall)}>
        <ToggleGroupItem value="måned">Siste måned</ToggleGroupItem>
        <ToggleGroupItem value="uke">Siste uke</ToggleGroupItem>
        <ToggleGroupItem value="dag">Siste døgn</ToggleGroupItem>
      </ToggleGroup>
      <ReactECharts
        key={`chart-${aktiveOgLedigeTidslinje.length}`}
        height={height}
        option={{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          legend: {
            data: [aktivLabel, reserverteLabel],
          },
          xAxis: {
            name: 'Tid',
            type: 'category',
            data: sampledTidspunkter,
            boundaryGap: true,
            axisLabel: {
              formatter: (value: string) => {
                const date = new Date(value);
                if (tidsintervall === 'dag') {
                  return date.toLocaleTimeString('no-NO', {
                    hour: '2-digit',
                    minute: '2-digit',
                  });
                } else if (tidsintervall === 'uke') {
                  return date.toLocaleDateString('no-NO', {
                    weekday: 'short',
                    day: '2-digit',
                    month: '2-digit',
                  });
                } else {
                  return date.toLocaleDateString('no-NO', {
                    day: '2-digit',
                    month: 'short',
                  });
                }
              },
            },
          },
          yAxis: {
            type: 'value',
            name: 'Antall',
            scale: true,
          },
          series: [
            {
              name: reserverteLabel,
              type: 'line',
              data: sampledReserverteData,
              stack: 'total',
              areaStyle: {},
            },
            {
              name: aktivLabel,
              type: 'line',
              data: sampledLedigeData,
              stack: 'total',
              areaStyle: {},
            },
          ],
          color: ['#38a161', '#9ad6bd'],
        }}
      />
    </>
  );
};

const filtererTidslinjeBasertPåValgIntervall = (
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[],
  timeRange: Tidsintervall,
) => {
  return aktiveOgLedigeTidslinje.filter(o => {
    const oppgaveDate = new Date(o.tidspunkt);
    const diffMs = Date.now() - oppgaveDate.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    const diffDays = diffHours / 24;

    switch (timeRange) {
      case Tidsintervall.DAG:
        return diffHours <= 24;
      case Tidsintervall.UKE:
        return diffDays <= 7;
      case Tidsintervall.MÅNED:
        return diffDays <= 30;
    }
  });
};

// Funksjon for å sample data ned til maks antall punkter
const sampleData = (data: (string | number)[], maxPoints: number) => {
  if (data.length <= maxPoints) return data;

  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
