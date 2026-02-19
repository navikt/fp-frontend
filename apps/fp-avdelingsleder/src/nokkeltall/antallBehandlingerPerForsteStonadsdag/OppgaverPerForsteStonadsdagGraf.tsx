import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  createBarSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getAkselVariable,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';

import type { OppgaverForForsteStonadsdagUkeMnd } from '../../typer/oppgaverForForsteStonadsdagUkeMndTsType';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Koordinat {
  x: string;
  y: number;
}

interface Props {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdagUkeMnd[];
}

export const OppgaverPerForsteStonadsdagGraf = ({ height, oppgaverPerForsteStonadsdag }: Props) => {
  const koordinater = lagKoordinater(oppgaverPerForsteStonadsdag);
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
        toolbox: createToolboxWithFilename('Antall_førstegangsbehandling_oppgaver_fordelt_på_første_stønadsdag'),
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
        legend: {
          show: false,
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

const lagKoordinater = (oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdagUkeMnd[]): Koordinat[] =>
  oppgaverPerForsteStonadsdag.map(o => ({
    x: dayjs(o.førsteStønadsdag).startOf('month').format(ISO_DATE_FORMAT),
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
