import { type IntlShape, useIntl } from 'react-intl';

import { capitalizeFirstLetter } from '@navikt/ft-utils';
import dayjs, { type Dayjs } from 'dayjs';
import type { BarSeriesOption, EChartsOption } from 'echarts';
import type { CallbackDataParams } from 'echarts/types/dist/shared';

import { createBarSeries, getAkselVariable, getStyle, ReactECharts } from '@navikt/fp-los-felles';

import { type DataPunkt, type LukkedeOppgaverData, summer } from './lukkedeOppgaverMapper';

interface Props {
  height: number;
  lukkedeOppgaver: LukkedeOppgaverData;
  yMax: number;
}

type MarkLine = NonNullable<BarSeriesOption['markLine']>;
type MarkLineItem = NonNullable<MarkLine['data']>[number];
type YAxisMarkLine = Extract<MarkLineItem, { yAxis?: unknown }>;

export const LukkedeOppgaverGraf = ({ height, lukkedeOppgaver, yMax }: Props) => {
  const intl = useIntl();
  const options = getStyle();

  const { antallPerDag, mandagDato, onsdagForrigeUke, forrigeUkeTotal, erInneværendeUke } = lukkedeOppgaver;
  const ingenData = antallPerDag.every(v => v === undefined);

  if (ingenData) {
    const emptyOption: EChartsOption = {
      ...options,
      title: {
        text: intl.formatMessage({ id: 'LukkedeOppgaverGraf.IngenData' }),
        left: 'center',
        top: 'middle',
      },
    };
    return <ReactECharts height={height} option={emptyOption} />;
  }

  const xAxisDatoer = lagUkedatoer(mandagDato);
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
  }));

  const ukeSerie = createBarSeries(
    {
      data: dataMedSkjulte0Verdier,
      barGap: '0%',
      barCategoryGap: '0%',
      label: { show: false },
      markLine: lagMarkLine(intl, onsdagForrigeUke, forrigeUkeTotal, erInneværendeUke),
    },
    'success',
  );

  return (
    <ReactECharts
      height={height}
      option={{
        ...options,
        tooltip: {
          ...options.tooltip,
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          formatter: raw => {
            const params = Array.isArray(raw) ? raw : [raw];
            if (params.length === 0) {
              return '';
            }
            const idx = (params[0] as CallbackDataParams).dataIndex;
            const xLabelDato = xAxisDatoer[idx]!;
            const antall = antallPerDag.at(idx);
            const antallTotalt = antall === undefined ? undefined : summer(antallPerDag.slice(0, idx + 1));
            return formatTooltipContent(intl, xLabelDato, antall, antallTotalt);
          },
        },
        legend: { ...options.legend, show: true },
        xAxis: [
          {
            type: 'category',
            data: xAxisDatoer.map(dato => dato.format('ddd DD.MM')),
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
      }}
    />
  );
};

const lagMarkLine = (
  intl: IntlShape,
  onsdagForrigeUke: number | undefined,
  forrigeUkeTotal: number | undefined,
  erInneværendeUke: boolean,
): BarSeriesOption['markLine'] => {
  const data: YAxisMarkLine[] = [];

  if (onsdagForrigeUke !== undefined && onsdagForrigeUke > 0) {
    data.push({
      name: intl.formatMessage({ id: 'LukkedeOppgaverGraf.OnsdagForrigeUke' }),
      yAxis: onsdagForrigeUke,
      label: { formatter: p => `${p.name}: ${p.value as number}` },
    });
  }

  if (forrigeUkeTotal !== undefined && forrigeUkeTotal > 0) {
    data.push({
      name: intl.formatMessage({ id: 'LukkedeOppgaverGraf.TotalForrigeUke' }, { erInneværendeUke }),
      yAxis: forrigeUkeTotal,
      label: { formatter: p => `${p.name}: ${p.value as number}` },
    });
  }

  return {
    z: 0,
    symbol: 'none',
    lineStyle: { width: 1, color: getAkselVariable('--ax-border-neutral'), type: 'dashed' as const },
    label: {
      show: true,
      position: 'insideEndBottom' as const,
      distance: 8,
      color: getAkselVariable('--ax-text-neutral-subtle'),
    },
    emphasis: { disabled: true },
    data,
  };
};

const lagUkedatoer = (aktuellMandag: string): Array<Dayjs> => {
  const mandag = dayjs(aktuellMandag);
  return Array.from({ length: 7 }, (_, i) => mandag.add(i, 'day'));
};

const lagStackOffsetSerieData = (antallPerDag: readonly (number | undefined)[]): number[] => {
  const data: number[] = [];
  let sum = 0;
  for (const antall of antallPerDag) {
    data.push(sum);
    sum += antall ?? 0;
  }
  return data;
};

const formatTooltipContent = (intl: IntlShape, dato: Dayjs, antall: DataPunkt, antallTotalt: DataPunkt): string => {
  const xLabel = dato.isSame(dayjs(), 'day')
    ? intl.formatMessage({ id: 'LukkedeOppgaverGraf.IDag' })
    : dato.format('dddd');
  const antallFormattert = antall?.toLocaleString('nb-NO') ?? '-';
  const totalFormattert = antallTotalt?.toLocaleString('nb-NO') ?? '-';
  return `
    <b>${capitalizeFirstLetter(xLabel)}</b><br/>
    <div style="display: flex; justify-content: space-between; gap: 16px;">
      <span>${intl.formatMessage({ id: 'LukkedeOppgaverGraf.AntallAvsluttet' })}</span>
      <span>${antallFormattert}</span>
    </div>
    <div style="display: flex; justify-content: space-between; gap: 16px;">
      <span>${intl.formatMessage({ id: 'LukkedeOppgaverGraf.TotalAvsluttet' })}</span>
      <span>${totalFormattert}</span>
    </div>
  `;
};
