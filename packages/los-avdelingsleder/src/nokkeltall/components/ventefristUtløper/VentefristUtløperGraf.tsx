import React, { FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Panel } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { ReactECharts } from '@navikt/fp-los-felles';

import BehandlingVentefrist from '../../../typer/behandlingVentefristTsType';

dayjs.extend(isSameOrBefore);

interface Koordinat {
  x: number;
  y: number;
}

const lagKoordinater = (oppgaverManueltPaVent: BehandlingVentefrist[]): Koordinat[] =>
  oppgaverManueltPaVent.map(o => ({
    x: dayjs(o.behandlingFrist).startOf('day').toDate().getTime(),
    y: o.antall,
  }));

const lagDatastruktur = (koordinater: Koordinat[]): (number | Date)[][] => {
  const nyeKoordinater = [];
  const periodeStart = koordinater
    .map(koordinat => dayjs(koordinat.x))
    .reduce(
      (tidligesteDato, dato) => (tidligesteDato.isSameOrBefore(dato) ? tidligesteDato : dato),
      dayjs().startOf('day'),
    )
    .toDate();
  const periodeSlutt = koordinater
    .map(koordinat => dayjs(koordinat.x))
    .reduce((senesteDato, dato) => (senesteDato.isSameOrAfter(dato) ? senesteDato : dato), dayjs().startOf('day'))
    .toDate();

  for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
    const sumY = koordinater
      .filter(k => dayjs(k.x).isSame(dato))
      .map(k => k.y)
      .reduce((sum, y)  => sum + y, 0);
    nyeKoordinater.push([dato.toDate(), sumY]);
  }

  return nyeKoordinater;
};

interface OwnProps {
  height: number;
  behandlingerPaVent: BehandlingVentefrist[];
}

/**
 * VentefristUtløperGraf.
 */
const VentefristUtløperGraf: FunctionComponent<OwnProps> = ({ height, behandlingerPaVent }) => {
  const koordinater = useMemo(() => lagKoordinater(behandlingerPaVent), [behandlingerPaVent]);
  const data = useMemo(() => lagDatastruktur(koordinater), [koordinater]);
  return (
    <Panel>
      <ReactECharts
        height={height}
        option={{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              snap: true,
              label: {
                formatter: params => {
                  if (params.axisDimension === 'y') {
                    return parseInt(params.value as string, 10).toString();
                  }
                  return dayjs(params.value).format(DDMMYYYY_DATE_FORMAT);
                },
              },
            },
          },
          toolbox: {
            feature: {
              saveAsImage: {
                title: 'Lagre ',
                name: 'Antall_forstegangsbehandlinger_der_frist_utloper',
              },
            },
          },
          xAxis: {
            type: 'time',
            axisLabel: {
              formatter: '{dd}.{MM}.{yyyy}',
            },
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data,
              type: 'line',
              areaStyle: {},
            },
          ],
          color: ['#337c9b'],
        }}
      />
    </Panel>
  );
};

export default VentefristUtløperGraf;
