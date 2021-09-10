import React, { useRef, useEffect, FunctionComponent } from 'react';
import type { CSSProperties } from 'react';
import * as echarts from 'echarts/core';
import {
  BarChart,
  BarSeriesOption,
} from 'echarts/charts';
import {
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  GridComponent,
  GridComponentOption,
} from 'echarts/components';
import {
  CanvasRenderer,
} from 'echarts/renderers';

type ECOption = echarts.ComposeOption<
  BarSeriesOption | ToolboxComponentOption | TooltipComponentOption | GridComponentOption
>;

echarts.use(
  [ToolboxComponent, TooltipComponent, LegendComponent, GridComponent, BarChart, CanvasRenderer],
);

export interface OwnProps {
  option: ECOption;
  style?: CSSProperties;
  height: number;
}

const ReactBarECharts: FunctionComponent<OwnProps> = ({
  option,
  style,
  height,
}): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: echarts.ECharts | undefined;
    if (chartRef.current !== null) {
      chart = echarts.init(chartRef.current);
    }

    const resizeChart = () => {
      chart?.resize();
    };
    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = echarts.getInstanceByDom(chartRef.current);
      chart.setOption(option);
    }
  }, [chartRef.current, option]);

  return <div ref={chartRef} style={{ width: 'auto', height, ...style }} />;
};

export default ReactBarECharts;
