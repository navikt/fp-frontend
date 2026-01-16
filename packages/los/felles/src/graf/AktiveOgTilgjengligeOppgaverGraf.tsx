import { ReactECharts } from '../ReactECharts.tsx';
import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';


interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
}

export const AktiveOgTilgjengligeOppgaverGraf = ({ aktiveOgLedigeTidslinje }: Props) => {
  const height = 400;
  const aktivLabel = 'Antall oppgaver';
  const påVentLabel = 'Behandlinger på vent';
  const reserverteLabel = 'Reserverte oppgaver';

  // Sorter oppgaver etter tidspunkt
  const sortedOppgaver = [...aktiveOgLedigeTidslinje].sort(
    (a, b) => new Date(a.tidspunkt).getTime() - new Date(b.tidspunkt).getTime(),
  );

  // Hent tidspunkter for x-aksen
  const tidspunkter = sortedOppgaver.map(o => o.tidspunkt);

  // Hent data for aktive, på vent og beregn reserverte (aktive - aktiveLedige)
  const aktivData = sortedOppgaver.map(o => o.aktive);
  const påVentData = sortedOppgaver.map(o => o.behandlingerPåVent);
  const reserverteData = sortedOppgaver.map(o => o.aktive - o.aktiveLedige);

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
          data: [aktivLabel, påVentLabel, reserverteLabel],
        },
        xAxis: {
          name: 'Tid',
          type: 'category',
          data: tidspunkter,
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
        },
        series: [
          {
            name: reserverteLabel,
            type: 'line',
            data: reserverteData,
          },
          {
            name: aktivLabel,
            type: 'line',
            data: aktivData,
            stack: 'total',
            areaStyle: {},
          },
          {
            name: påVentLabel,
            type: 'line',
            data: påVentData,
            stack: 'total',
            areaStyle: {},
          },
        ],
        color: ['#38a161', '#9ad6bd', '#337c9b'],
      }}
    />
  );
};
