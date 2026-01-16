import { ReactECharts } from '../ReactECharts.tsx';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';


interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const height = 400;
  const aktivLabel = 'Ledige';
  //const påVentLabel = 'Behandlinger på vent';
  const reserverteLabel = 'Reserverte';

  // Sorter oppgaver etter tidspunkt
  const sortedOppgaver = [...aktiveOgLedigeTidslinje].sort(
    (a, b) => new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime(),
  );

  // Bruk sampling på tidspunkter og data
  const granularitet = 50;
  const sampledTidspunkter = sampleData(
    sortedOppgaver.map(o => o.tidspunkt),
    granularitet,
  );
  const sampledLedigeData = sampleData(
    sortedOppgaver.map(o => o.aktiveLedige),
    granularitet,
  );
  const sampledReserverteData = sampleData(
    sortedOppgaver.map(o => o.aktive - o.aktiveLedige),
    granularitet,
  );

  return (
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
              return date.toLocaleTimeString('no-NO', {
                hour: '2-digit',
                minute: '2-digit',
              });
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
  );
};


// Funksjon for å sample data ned til maks antall punkter
const sampleData = (data: (string | number)[], maxPoints: number) => {
  if (data.length <= maxPoints) return data;

  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
