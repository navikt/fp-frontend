import type { AkselColor } from '@navikt/ds-react/types/theme';
import { capitalizeFirstLetter } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { type BarSeriesOption, type EChartsOption, type LineSeriesOption } from 'echarts';

export const formaterMånedÅr = (dato: string) =>
  capitalizeFirstLetter(`${dayjs(dato).format('MMM YYYY')}`).replaceAll('.', '');

export type ColorPair = { primaryColor: string; secondaryColor: string };
export type AkselColorResolver = (akselColor: AkselColor) => ColorPair;

const buildBarSeries = (options: BarSeriesOption, { primaryColor, secondaryColor }: ColorPair): BarSeriesOption => ({
  type: 'bar',
  barMaxWidth: '150px',
  stack: 'total',
  label: {
    show: true,
    formatter: params => {
      const val = Array.isArray(params.value) ? params.value[1] : params.value;
      return typeof val === 'number' && val !== 0 ? val.toLocaleString('nb-NO') : '';
    },
  },
  color: primaryColor,
  ...options,
  itemStyle: {
    borderColor: secondaryColor,
    borderWidth: 1,
    borderRadius: 4,
    ...options.itemStyle,
  },
});

export const createBarSeries = (options: BarSeriesOption, akselColor: AkselColor): BarSeriesOption =>
  buildBarSeries(options, getAkselColorPair(akselColor));

export const createBarSeriesWithColorResolver = (
  options: BarSeriesOption,
  akselColor: AkselColor,
  colorResolver: AkselColorResolver,
): BarSeriesOption => buildBarSeries(options, colorResolver(akselColor));

export const createLineSeries = (options: LineSeriesOption, akselColor: AkselColor): LineSeriesOption => {
  const { primaryColor, secondaryColor } = getAkselColorPair(akselColor);
  return {
    type: 'line',
    stack: 'total',
    areaStyle: {
      opacity: 1,
    },
    emphasis: {
      focus: 'series',
    },
    symbol: 'circle',
    lineStyle: {
      type: 'solid',
      color: secondaryColor,
    },
    ...options,
    itemStyle: {
      borderWidth: 2,
      borderColor: secondaryColor,
      color: primaryColor,
      ...options.itemStyle,
    },
  };
};

export const layoutOptions: EChartsOption = {
  animation: false,
  grid: {
    top: '30px',
    left: '100px',
    right: '100px',
    bottom: '30px',
  },
};
export const createToolboxWithFilename = (name: string) => ({
  feature: {
    saveAsImage: {
      title: 'Lagre som bilde',
      name,
    },
  },
});

export const getStyle = () => {
  const fontSize = getAkselVariable('--ax-font-size-small');
  const textStyle = {
    fontFamily: getAkselVariable('--ax-font-family'),
    color: getAkselVariable('--ax-text-neutral'),
    fontSize,
  };

  return {
    tooltip: {
      textStyle,
      borderColor: getAkselVariable('--ax-border-neutral-subtleA'),
      borderRadius: 12,
      padding: [16, 20],
      borderWidth: 1,
      backgroundColor: getAkselVariable('--ax-bg-raised'),
    },
    textStyle,
    animation: false,
    legend: {
      type: 'scroll',
      icon: 'roundRect',
      textStyle,
      top: 'top',
    },
    grid: {
      top: '30px',
      left: '100px',
      right: '100px',
      bottom: '30px',
    },
  };
};

export const getAkselVariable = (akselVariable: string) => {
  const element = document.body.getElementsByClassName('aksel-theme')[0] ?? document.documentElement;
  return getComputedStyle(element).getPropertyValue(akselVariable);
};

export const getAkselColorPair = (akselColor: AkselColor): ColorPair => ({
  primaryColor: getAkselVariable(`--ax-bg-${akselColor}-moderate-pressed`),
  secondaryColor: getAkselVariable(`--ax-border-${akselColor}`),
});

export const getSoftAkselColorPair = (akselColor: AkselColor): ColorPair => ({
  primaryColor: getAkselVariable(`--ax-bg-${akselColor}-soft`),
  secondaryColor: getAkselVariable(`--ax-border-${akselColor}`),
});
