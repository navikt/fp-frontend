import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  createBarSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';
import type { FagsakYtelseType, OppgaverForFørsteStønadsdagUkeMåned } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Props {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForFørsteStønadsdagUkeMåned[];
}

export const OppgaverPerForsteStonadsdagGraf = ({ height, oppgaverPerForsteStonadsdag }: Props) => {
  const options = getStyle();
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
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
        series: [
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'FP')?.navn,
              data: lagDatastruktur(oppgaverPerForsteStonadsdag, 'FP'),
            },
            'accent',
          ),
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'SVP')?.navn,
              data: lagDatastruktur(oppgaverPerForsteStonadsdag, 'SVP'),
            },
            'warning',
          ),
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'ES')?.navn,
              data: lagDatastruktur(oppgaverPerForsteStonadsdag, 'ES'),
            },
            'success',
          ),
        ],
      }}
    />
  );
};

const lagDatastruktur = (
  oppgaverPerForsteStonadsdag: OppgaverForFørsteStønadsdagUkeMåned[],
  fagsakYtelseType: FagsakYtelseType,
): [string, number][] => {
  const nyeKoordinater = oppgaverPerForsteStonadsdag
    .filter(o => o.fagsakYtelseType === fagsakYtelseType)
    .map(o => ({
      x: dayjs(o.førsteStønadsdag).startOf('month').format(ISO_DATE_FORMAT),
      y: o.antall,
    }))
    .reduce(
      (acc, { x, y }) => {
        acc[x] = (acc[x] || 0) + y;
        return acc;
      },
      {} as Record<string, number>,
    );
  return Object.entries(nyeKoordinater).sort((a, b) => a[0].localeCompare(b[0]));
};
