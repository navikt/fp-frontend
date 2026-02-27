import type {
  AkselColorRole,
  AkselDynamicStatefulBackgroundToken,
  AkselDynamicStatelessBackgroundToken,
} from '@navikt/ds-tokens/types';
import { capitalizeFirstLetter } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { type BarSeriesOption, type LineSeriesOption } from 'echarts';

export const formaterMånedÅr = (dato: string) =>
  capitalizeFirstLetter(`${dayjs(dato).format('MMM YYYY')}`).replaceAll('.', '');

export type ColorPair = { primaryColor: string; secondaryColor: string };
type ColorVariant = AkselDynamicStatelessBackgroundToken | AkselDynamicStatefulBackgroundToken;

export const createBarSeries = (
  options: BarSeriesOption,
  akselColor: AkselColorRole,
  variant?: ColorVariant,
): BarSeriesOption => {
  const { primaryColor, secondaryColor } = getAkselColorPair(akselColor, variant);

  return {
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
    labelLayout: {
      hideOverlap: true,
    },
    color: primaryColor,
    ...options,
    itemStyle: {
      borderColor: secondaryColor,
      borderWidth: 1,
      borderRadius: 4,
      ...options.itemStyle,
    },
  };
};

export const createLineSeries = (
  options: LineSeriesOption,
  akselColor: AkselColorRole,
  variant?: ColorVariant,
): LineSeriesOption => {
  const { primaryColor, secondaryColor } = getAkselColorPair(akselColor, variant);
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

const getAkselColorPair = (akselColor: AkselColorRole, variant: ColorVariant = 'moderate-pressed'): ColorPair => ({
  primaryColor: getAkselVariable(`--ax-bg-${akselColor}-${variant}`),
  secondaryColor: getAkselVariable(`--ax-border-${akselColor}`),
});
