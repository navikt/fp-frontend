import { useIntl } from 'react-intl';

import { ReactECharts } from '@navikt/fp-los-felles';
import type { BehandlingType, LosKodeverkMedNavn } from '@navikt/fp-types';

import type { OppgaverForAvdeling } from '../../typer/oppgaverForAvdelingTsType';

const behandlingstypeOrder = ['BT-009', 'BT-007', 'BT-006', 'BT-003', 'BT-004', 'BT-002'] satisfies BehandlingType[];

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  oppgaverForAvdeling: OppgaverForAvdeling[];
}

export const FordelingAvBehandlingstypeGraf = ({ height, oppgaverForAvdeling, behandlingTyper }: Props) => {
  const intl = useIntl();
  const tilBehandlingTekst = intl.formatMessage({ id: 'FordelingAvBehandlingstypeGraf.TilBehandling' });
  const tilBeslutterTekst = intl.formatMessage({ id: 'FordelingAvBehandlingstypeGraf.TilBeslutter' });

  const finnBehandlingTypeNavn = behandlingstypeOrder.map(t => {
    const type = behandlingTyper.find(bt => bt.kode === t);
    return type ? type.navn : '';
  });

  const tilBehandlingData = slåSammen(oppgaverForAvdeling.filter(o => o.tilBehandling));
  const tilBeslutterData = slåSammen(oppgaverForAvdeling.filter(o => !o.tilBehandling));

  return (
    <ReactECharts
      height={height}
      option={{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Lagre ',
              name: 'Antall_åpne_behandlinger',
            },
          },
        },
        legend: {
          data: [tilBehandlingTekst, tilBeslutterTekst],
          top: 'top',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: finnBehandlingTypeNavn,
        },
        series: [
          {
            name: tilBehandlingTekst,
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: tilBehandlingData,
          },
          {
            name: tilBeslutterTekst,
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: tilBeslutterData,
          },
        ],
        color: ['#337c9b', '#38a161'],
      }}
    />
  );
};

const slåSammen = (oppgaverForAvdeling: OppgaverForAvdeling[]): number[] => {
  const sammenslått = oppgaverForAvdeling.reduce(
    (acc, o) => {
      const index = behandlingstypeOrder.findIndex(bo => bo === o.behandlingType) + 1;
      const antall = acc[index] ?? 0;
      return {
        ...acc,
        [index]: antall + o.antall,
      };
    },
    {} as Record<string, number>,
  );

  return behandlingstypeOrder.map((_b, index) => sammenslått[index + 1] || 0);
};
