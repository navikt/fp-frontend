import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  createBarSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getAkselVariable,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';

import type { BehandlingVentefrist } from '../../typer/behandlingVentefristTsType';

dayjs.extend(isSameOrBefore);

interface Koordinat {
  x: string;
  y: number;
}

interface Props {
  height: number;
  behandlingerPaVent: BehandlingVentefrist[];
}

export const VentefristUtløperGraf = ({ height, behandlingerPaVent }: Props) => {
  const koordinater = lagKoordinater(behandlingerPaVent);
  const data = lagDatastruktur(koordinater);
  const options = getStyle();
  return (
    <ReactECharts
      height={height}
      option={{
        ...options,
        tooltip: {
          ...options.tooltip,
          trigger: 'axis',
          valueFormatter: value => (value as number).toLocaleString('nb-NO'),
          axisPointer: {
            type: 'shadow',
            label: {
              formatter: params => formaterMånedÅr(params.value as string),
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_forstegangsbehandlinger_der_frist_utloper'),
        xAxis: {
          type: 'category',
          axisLabel: {
            ...options.textStyle,
            formatter: value => formaterMånedÅr(value),
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            ...options.textStyle,
            formatter: (value: number) => value.toLocaleString('nb-NO'),
          },
        },
        series: [
          createBarSeries({
            data,
            color: getAkselVariable('--ax-bg-info-moderate-pressed'),
            itemStyle: {
              borderColor: getAkselVariable('--ax-bg-accent-strong'),
            },
          }),
        ],
      }}
    />
  );
};

const lagKoordinater = (oppgaverManueltPaVent: BehandlingVentefrist[]): Koordinat[] =>
  oppgaverManueltPaVent.map(o => ({
    x: o.fristUke,
    y: o.antall,
  }));

const lagDatastruktur = (koordinater: Koordinat[]): (number | string)[][] => {
  const nyeKoordinater: Record<string, number> = koordinater.reduce(
    (acc, { x, y }) => {
      acc[x] = (acc[x] || 0) + y;
      return acc;
    },
    {} as Record<string, number>,
  );
  return Object.entries(nyeKoordinater).sort((a, b) => a[0].localeCompare(b[0]));
};
