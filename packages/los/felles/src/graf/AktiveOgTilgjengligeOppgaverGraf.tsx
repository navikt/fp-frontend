import { useState } from 'react';

import { ToggleGroup } from '@navikt/ds-react';
import { ToggleGroupItem } from '@navikt/ds-react/ToggleGroup';

import { ReactECharts } from '../ReactECharts.tsx';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';

type Tidsintervall = 'dag' | 'uke' | 'måned';

interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const height = 400;
  const aktivLabel = 'Ledige';
  //const påVentLabel = 'Behandlinger på vent';
  const reserverteLabel = 'Reserverte';

  const [tidsintervall, setTidsintervall] = useState<Tidsintervall>('dag');
  const filtrertTidslinje = filtererTidslinjeBasertPåValgIntervall(aktiveOgLedigeTidslinje, tidsintervall);
  const sortertOgFiltrertTidslinje = filtrertTidslinje.toSorted(
    (a, b) => new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime(),
  );
  // Bruk sampling på tidspunkter og data
  const granularitet = 20;
  const sampledTidspunkter = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.tidspunkt),
    granularitet,
  );
  const sampledLedigeData = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.aktiveLedige),
    granularitet,
  );
  const sampledReserverteData = sampleData(
    sortertOgFiltrertTidslinje.map(o => o.aktive - o.aktiveLedige),
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
            name: tidsintervall === 'dag' ? 'Tid (hh:mm)' : 'Dato (dd.mm)',
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
          color: ['#38a161', '#9ad6bd', '#337c9b'],
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
      case 'dag':
        return diffHours <= 24;
      case 'uke':
        return diffDays <= 7;
      case 'måned':
        return diffDays <= 30;
      default:
        return true;
    }
  });
};

// Funksjon for å sample data ned til maks antall punkter
const sampleData = (data: (string | number)[], maxPoints: number) => {
  if (data.length <= maxPoints) return data;

  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
