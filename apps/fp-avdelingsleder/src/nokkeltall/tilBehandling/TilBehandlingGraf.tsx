import dayjs from 'dayjs';

import { createLineSeries, createToolboxWithFilename, getStyle, ReactECharts } from '@navikt/fp-los-felles';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { behandlingstypeAkselFarger, finnBehandlingTypeNavn } from '../behandlingsTypeUtils';
import { lagGrafDataForBehandlingsType, type OppgaverForDato } from './oppgaveUtils';

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  oppgaverPerDato: OppgaverForDato[];
  periodeStart: dayjs.Dayjs;
  periodeSlutt: dayjs.Dayjs;
}

export const TilBehandlingGraf = ({ height, oppgaverPerDato, behandlingTyper, periodeStart, periodeSlutt }: Props) => {
  const dataAntall = lagGrafDataForBehandlingsType(oppgaverPerDato, o => o.antall, periodeStart, periodeSlutt);

  const options = getStyle();
  return (
    <ReactECharts
      height={height}
      option={{
        ...options,
        tooltip: {
          ...options.tooltip,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              formatter: params => {
                if (params.axisDimension === 'y') {
                  return Number.parseInt(params.value as string, 10).toLocaleString('nb-NO');
                }
                return dayjs(params.value).format('D. MMMM YYYY');
              },
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_til_behandling'),
        xAxis: {
          type: 'time',
          axisLabel: {
            ...options.textStyle,
            formatter: '{dd}.{MM}.{yy}',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            ...options.textStyle,
            formatter: (value: number) => value.toLocaleString('nb-NO'),
          },
        },
        series: dataAntall.map(([type, data]) =>
          createLineSeries(
            { name: finnBehandlingTypeNavn(behandlingTyper, type), data },
            behandlingstypeAkselFarger[type],
          ),
        ),
      }}
    />
  );
};
