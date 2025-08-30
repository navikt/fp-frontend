import { useIntl } from 'react-intl';

import { BehandlingTypeEnum } from '@navikt/fp-kodeverk';
import { ReactECharts } from '@navikt/fp-los-felles';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import type { OppgaverForAvdeling } from '../../typer/oppgaverForAvdelingTsType';

const behandlingstypeOrder = [
  BehandlingTypeEnum.TILBAKEKREVING_REVURDERING,
  BehandlingTypeEnum.TILBAKEKREVING,
  BehandlingTypeEnum.DOKUMENTINNSYN,
  BehandlingTypeEnum.KLAGE,
  BehandlingTypeEnum.REVURDERING,
  BehandlingTypeEnum.FORSTEGANGSSOKNAD,
];

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
  const test = oppgaverForAvdeling.reduce(
    (acc, o) => {
      const index = behandlingstypeOrder.findIndex(bo => bo === o.behandlingType) + 1;
      return {
        ...acc,
        [index]: acc[index] ? acc[index] + o.antall : o.antall,
      };
    },
    {} as Record<string, number>,
  );

  return behandlingstypeOrder.map((_b, index) => test[index + 1]);
};
