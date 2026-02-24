import { useIntl } from 'react-intl';

import { DDMMYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import type { BarSeriesOption, EChartsOption } from 'echarts';

import {
  createBarSeries,
  createToolboxWithFilename,
  getAkselVariable,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';

import type { LukkedeOppgaverData } from './lukkedeOppgaverMapper';
import { getIsoUkedag, startAvIsoUke } from './ukeUtils';

interface Props {
  height: number;
  lukkedeOppgaver: LukkedeOppgaverData;
  yMax: number;
}

type MarkLine = NonNullable<BarSeriesOption['markLine']>;
type MarkLineItem = NonNullable<MarkLine['data']>[number];
type YAxisMarkLine = Extract<MarkLineItem, { yAxis?: unknown }>;

const lagDagLabels = (aktuellMandag: string, erInneværendeUke: boolean): string[] => {
  const mandag = dayjs(aktuellMandag);
  return Array.from({ length: 7 }, (_, i) => mandag.add(i, 'day').format(erInneværendeUke ? 'ddd' : 'ddd DD.MM'));
};

const lagStackOffsetSerieData = (antallPerDag: readonly number[]): number[] => {
  const data: number[] = [];
  let sum = 0;
  for (const antall of antallPerDag) {
    data.push(sum);
    sum += antall;
  }
  return data;
};

const filename = (ukeStart: dayjs.Dayjs): string => {
  const ukeSlutt = ukeStart.add(6, 'day').format(DDMMYY_DATE_FORMAT);
  return `Lukkede_oppgaver_${ukeStart.format(DDMMYY_DATE_FORMAT)}-${ukeSlutt}`;
};

export const LukkedeOppgaverGraf = ({ height, lukkedeOppgaver, yMax }: Props) => {
  const intl = useIntl();
  const options = getStyle();

  const { antallPerDag, mandagDato } = lukkedeOppgaver;
  const erInneværendeUke = dayjs(mandagDato).startOf('day').isSame(startAvIsoUke(dayjs()), 'day');
  const xAxisLabels = lagDagLabels(mandagDato, erInneværendeUke);
  const offsetSerieData = lagStackOffsetSerieData(antallPerDag);

  const placeholderSerie: BarSeriesOption = {
    type: 'bar',
    stack: 'total',
    itemStyle: { borderColor: 'transparent', color: 'transparent' },
    tooltip: { show: false },
    emphasis: { itemStyle: { borderColor: 'transparent', color: 'transparent' } },
    data: offsetSerieData,
    barGap: '0%',
    barCategoryGap: '0%',
  };

  const dataMedSkjulte0Verdier = antallPerDag.map(antall => ({
    value: antall,
    itemStyle: antall === 0 ? { opacity: 0, borderWidth: 0 } : undefined, // får med farget markør for serie
    label: antall === 0 ? { show: false } : undefined,
  }));

  const baseSerie: BarSeriesOption = createBarSeries({
    data: dataMedSkjulte0Verdier,
    barGap: '0%',
    barCategoryGap: '0%',
  }, 'success');

  const markLines: YAxisMarkLine[] = [];
  const dagIUken = getIsoUkedag(dayjs());

  if ((erInneværendeUke && dagIUken <= 4) && lukkedeOppgaver.onsdagForrigeUke > 0) {
    const name = intl.formatMessage({ id: 'LukkedeOppgaverGraf.OnsdagForrigeUke' });
    markLines.push({
      name: name,
      yAxis: lukkedeOppgaver.onsdagForrigeUke,
      label: {
        formatter: p => {
          const value = p.value as number;
          return `${p.name}: ${value}`;
        },
      },
    });
  }

  if (lukkedeOppgaver.forrigeUkeTotal > 0) {
    const nameFormatted = erInneværendeUke
      ? intl.formatMessage({ id: 'LukkedeOppgaverGraf.TotalForrigeUke' })
      : intl.formatMessage({ id: 'LukkedeOppgaverGraf.TotalForrigeUkeAlternativ' });
    markLines.push({
      name: nameFormatted,
      yAxis: lukkedeOppgaver.forrigeUkeTotal,
      label: {
        formatter: p => {
          const value = p.value as number;
          return `${p.name}: ${value}`;
        },
      },
    });
  }

  const ukeSerie =
    markLines.length === 0
      ? baseSerie
      : ({
          ...baseSerie,
          markLine: {
            z: 0,
            symbol: 'none',
            lineStyle: { width: 1, color: getAkselVariable('--ax-border-neutral'), type: 'dashed' as const },
            label: {
              show: true,
              position: 'insideEndBottom' as const,
              distance: 8,
              color: getAkselVariable('--ax-text-neutral-subtle'),
            },
            emphasis: {
              disabled: true,
            },
            data: markLines,
          },
        } satisfies BarSeriesOption);

  const option: EChartsOption = {
    ...options,
    toolbox: createToolboxWithFilename(filename(dayjs(mandagDato))),
    tooltip: {
      ...options.tooltip,
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      valueFormatter: value => (value as number).toLocaleString('nb-NO'),
    },
    legend: { ...options.legend, show: true },
    xAxis: [
      {
        type: 'category',
        data: xAxisLabels,
        axisLabel: { ...options.textStyle },
      },
    ],
    yAxis: {
      type: 'value',
      min: 0,
      max: yMax,
      scale: false,
      axisLabel: {
        ...options.textStyle,
        formatter: (value: number) => value.toLocaleString('nb-NO'),
      },
    },
    series: [placeholderSerie, ukeSerie],
  };

  return <ReactECharts height={height} option={option} />;
};
