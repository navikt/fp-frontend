import { capitalizeFirstLetter } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import type { BarSeriesOption, EChartsOption } from 'echarts';

export const formaterMånedÅr = (dato: string) =>
  capitalizeFirstLetter(`${dayjs(dato).format('MMM YYYY')}`).replaceAll('.', '');

export const createBarSeries = (options: BarSeriesOption): BarSeriesOption => ({
  type: 'bar',
  barMaxWidth: '150px',
  stack: 'total',
  label: {
    show: true,
  },
  ...options,
  itemStyle: {
    borderWidth: 1,
    borderRadius: 4,
    ...options.itemStyle,
  },
});

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
      title: 'Lagre ',
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
      backgroundColor: getAkselVariable('--ax-bg-default'),
    },
    textStyle,
    animation: false,
    legend: {
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

// aksel-theme dark
