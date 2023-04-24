import React, { FunctionComponent, useMemo } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { Panel } from '@navikt/ds-react';
import { ReactECharts } from '@navikt/fp-los-felles';

export type GruppeData = {
  returÅrsak: string,
  values: number[],
};

export type TimeSeriesData = Readonly<{
  groupName: string,
  gruppeData: GruppeData[],
}>;

export type BeslutterRetur = Readonly<{
  groupNames: string[],
  returÅrsak: string[],
  ukenummer: string[],
  totalAntallReturer: number[],
  timeseriesData: TimeSeriesData[],
}>;

interface OwnProps {
  selectedGroup: string[];
  height: number;
  beslutterReturData: BeslutterRetur;
}

const BeslutterReturGraf: FunctionComponent<OwnProps> = ({ selectedGroup, height, beslutterReturData }) => {
  console.log('selected grouP: ' + selectedGroup);
  const filteredData = useMemo(
    () =>
      beslutterReturData.timeseriesData
        .filter(item => selectedGroup.includes(item.groupName))
        .flatMap(item => item.gruppeData),
    [beslutterReturData, selectedGroup],
  );
  const filteredLabels = useMemo(() => filteredData.map(item => item.returÅrsak), [filteredData]);
  const seriesData = useMemo(
    () : any =>
      filteredData.map(item => ({
        name: item.returÅrsak,
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series',
        },
        data: item.values,
      })),
    [filteredData],
  );
  console.log(seriesData);
  return (
    <Panel>
      <ReactECharts
        height={height}
        setOptionsOpt={{ notMerge: true }}
        option={{
          tooltip: {
            trigger: 'axis',
          },
          toolbox: {
            feature: {
              saveAsImage: {
                title: 'Lagre',
                name: 'Beslutterretur_graf',
              },
            },
          },
          legend: {
            data: filteredLabels,
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              data: beslutterReturData.ukenummer,
              axisLabel: {
                formatter: (value: string) => `Uke ${value}`,
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Antall',
            },
            {
              type: 'value',
              name: 'Totalt',
              position: 'right',
            },
          ],
          series: seriesData,
          color: ['#85d5f0', '#38a161'],
        }}
      />
    </Panel>
  );
};

export default BeslutterReturGraf;
