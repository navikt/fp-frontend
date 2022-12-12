import React, {
  FunctionComponent, useMemo,
} from 'react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { Panel } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { ReactECharts } from '@fpsak-frontend/los-felles';

import OppgaverForForsteStonadsdag from '../../../typer/oppgaverForForsteStonadsdagTsType';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Koordinat {
  x: number;
  y: number;
}

export const lagKoordinater = (oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[]): Koordinat[] => oppgaverPerForsteStonadsdag
  .map((o) => ({
    x: dayjs(o.forsteStonadsdag).startOf('day').toDate().getTime(),
    y: o.antall,
  }));

export const lagDatastruktur = (koordinater: Koordinat[]): number[][] => {
  const nyeKoordinater = [];
  const periodeStart = koordinater
    .map((koordinat) => dayjs(koordinat.x))
    .reduce((tidligesteDato, dato) => (tidligesteDato.isSameOrBefore(dato) ? tidligesteDato : dato), dayjs().startOf('day'))
    .toDate();
  const periodeSlutt = koordinater
    .map((koordinat) => dayjs(koordinat.x))
    .reduce((senesteDato, dato) => (senesteDato.isSameOrAfter(dato) ? senesteDato : dato), dayjs().startOf('day'))
    .toDate();

  for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
    const funnetKoordinat = koordinater.find((k) => dayjs(k.x).isSame(dato));
    nyeKoordinater.push([dato.toDate().getTime(), funnetKoordinat ? funnetKoordinat.y : 0]);
  }
  return nyeKoordinater;
};

interface OwnProps {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[];
}

/**
 * OppgaverPerForsteStonadsdagGraf.
 */
const OppgaverPerForsteStonadsdagGraf: FunctionComponent<OwnProps> = ({
  height,
  oppgaverPerForsteStonadsdag,
}) => {
  const koordinater = useMemo(() => lagKoordinater(oppgaverPerForsteStonadsdag), [oppgaverPerForsteStonadsdag]);
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
                formatter: (params) => dayjs(params.value).format(DDMMYYYY_DATE_FORMAT),
              },
            },
          },
          toolbox: {
            feature: {
              saveAsImage: {
                title: 'Lagre ',
                name: 'Antall_førstegangsbehandlinger_fordelt_på_første_stønadsdag',
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
          series: [{
            data,
            type: 'line',
            areaStyle: {},
          }],
          color: ['#337c9b'],
        }}
      />
    </Panel>
  );
};

export default OppgaverPerForsteStonadsdagGraf;
