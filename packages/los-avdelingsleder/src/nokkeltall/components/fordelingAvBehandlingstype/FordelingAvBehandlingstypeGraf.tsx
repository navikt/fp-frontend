import React, { FunctionComponent, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Panel } from '@navikt/ds-react';
import { BehandlingType } from '@navikt/ft-kodeverk';
import { ReactECharts } from '@navikt/fp-los-felles';
import { KodeverkMedNavn } from '@navikt/fp-types';

import OppgaverForAvdeling from '../../../typer/oppgaverForAvdelingTsType';

const behandlingstypeOrder = [
  BehandlingType.TILBAKEKREVING_REVURDERING,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.FORSTEGANGSSOKNAD];

const slåSammen = (oppgaverForAvdeling: OppgaverForAvdeling[]): number[] => {
  const test = oppgaverForAvdeling
    .reduce((acc, o) => {
      const index = behandlingstypeOrder.findIndex((bo) => bo === o.behandlingType) + 1;
      return {
        ...acc,
        [index]: (acc[index] ? acc[index] + o.antall : o.antall),
      };
    }, {} as Record<string, number>);

  return behandlingstypeOrder.map((b, index) => test[index + 1]);
};

interface OwnProps {
  height: number;
  behandlingTyper: KodeverkMedNavn[];
  oppgaverForAvdeling: OppgaverForAvdeling[];
}

/**
 * FordelingAvBehandlingstypeGraf.
 */
const FordelingAvBehandlingstypeGraf: FunctionComponent<OwnProps> = ({
  height,
  oppgaverForAvdeling,
  behandlingTyper,
}) => {
  const intl = useIntl();
  const tilBehandlingTekst = intl.formatMessage({ id: 'FordelingAvBehandlingstypeGraf.TilBehandling' });
  const tilBeslutterTekst = intl.formatMessage({ id: 'FordelingAvBehandlingstypeGraf.TilBeslutter' });

  const finnBehandlingTypeNavn = useMemo(() => behandlingstypeOrder.map((t) => {
    const type = behandlingTyper.find((bt) => bt.kode === t);
    return type ? type.navn : '';
  }), [behandlingTyper]);

  const tilBehandlingData = useMemo(() => slåSammen(oppgaverForAvdeling.filter((o) => o.tilBehandling)), [oppgaverForAvdeling]);
  const tilBeslutterData = useMemo(() => slåSammen(oppgaverForAvdeling.filter((o) => !o.tilBehandling)), [oppgaverForAvdeling]);

  return (
    <Panel>
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
    </Panel>
  );
};

export default FordelingAvBehandlingstypeGraf;
