import dayjs from 'dayjs';

import { createBarSeries, createToolboxWithFilename, getStyle, ReactECharts } from '@navikt/fp-los-felles';
import { type LosKodeverkMedNavn } from '@navikt/fp-types';

import { behandlingstypeAkselFarger, finnBehandlingTypeNavn } from '../behandlingsTypeUtils';
import { lagGrafDataForBehandlingsType, type OppgaverForDato } from './oppgaveUtils';

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  oppgaverPerDato: OppgaverForDato[];
  periodeStart: dayjs.Dayjs;
  periodeSlutt: dayjs.Dayjs;
}

export const OpprettetAvsluttetGraf = ({
  height,
  oppgaverPerDato,
  behandlingTyper,
  periodeStart,
  periodeSlutt,
}: Props) => {
  const dataOpprettet = lagGrafDataForBehandlingsType(oppgaverPerDato, o => o.opprettet, periodeStart, periodeSlutt);
  const dataAvsluttet = lagGrafDataForBehandlingsType(oppgaverPerDato, o => o.avsluttet, periodeStart, periodeSlutt);

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
                  return (params.value as number).toLocaleString('nb-NO');
                }
                return dayjs(params.value).format('D. MMMM YYYY');
              },
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_til_behandling'),
        legend: [
          {
            ...options.legend,
            data: dataOpprettet.map(([type]) => `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`),
          },
          {
            ...options.legend,
            top: 25,
            data: dataAvsluttet.map(([type]) => `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`),
          },
        ],
        grid: { ...options.grid, top: 70 },
        xAxis: {
          type: 'time',
          axisLabel: {
            ...options.textStyle,
            formatter: '{dd}.{MM}.{yy}',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: { ...options.textStyle },
        },
        series: [
          ...dataOpprettet.map(([type, verdi]) =>
            createBarSeries(
              {
                name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`,
                data: verdi,
                stack: 'opprettet',
              },
              behandlingstypeAkselFarger[type],
              'moderate-pressed',
            ),
          ),
          ...dataAvsluttet.map(([type, verdi]) =>
            createBarSeries(
              {
                name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`,
                data: verdi,
                stack: 'avsluttet',
              },
              behandlingstypeAkselFarger[type],
              'soft',
            ),
          ),
        ],
      }}
    />
  );
};
