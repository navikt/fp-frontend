import { type CSSProperties, type JSX, useEffect, useRef } from 'react';

import type { EChartsOption } from 'echarts';
import { BarChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from 'echarts/components';
import { type ECharts, getInstanceByDom, init, use as registerEChartsModules } from 'echarts/core';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

registerEChartsModules([
  BarChart,
  LineChart,
  GridComponent,
  LabelLayout,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  CanvasRenderer,
]);

interface Props {
  option: EChartsOption;
  style?: CSSProperties;
  height: number;
}

export const ReactECharts = ({ option, style, height }: Props): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    const resizeChart = () => {
      chart?.resize();
    };
    addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, { notMerge: true });
      }
    }
  }, [option]);

  return <div ref={chartRef} style={{ width: 'auto', height, ...style }} />;
};
