import { type CSSProperties, type JSX, useEffect, useRef } from 'react';

import { type ECharts, type EChartsOption, getInstanceByDom, init } from 'echarts';

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
    globalThis.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      globalThis.removeEventListener('resize', resizeChart);
    };
  }, []);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (chart) {
        chart.setOption(option, { notMerge: true });
      }
    }
    // eslint-disable-next-line react-hooks/refs
  }, [chartRef.current, option]);

  return <div ref={chartRef} style={{ width: 'auto', height, ...style }} />;
};
