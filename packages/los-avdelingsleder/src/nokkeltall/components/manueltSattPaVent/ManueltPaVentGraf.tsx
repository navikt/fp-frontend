import React, {
  FunctionComponent, useMemo,
} from 'react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Panel } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import OppgaverManueltPaVent from '../../../typer/oppgaverManueltPaVentTsType';
import ReactECharts from '../../../ReactECharts';

dayjs.extend(isSameOrBefore);

interface Koordinat {
  x: number;
  y: number;
}

const lagKoordinater = (oppgaverManueltPaVent: OppgaverManueltPaVent[]): Koordinat[] => oppgaverManueltPaVent.map((o) => ({
  x: dayjs(o.behandlingFrist).startOf('day').toDate().getTime(),
  y: o.antall,
}));

const lagDatastruktur = (koordinater: Koordinat[], isFireUkerValgt: boolean): (number | Date)[][] => {
  const nyeKoordinater = [];
  const periodeStart = dayjs().startOf('day').toDate();
  const periodeSlutt = dayjs().add(isFireUkerValgt ? 4 : 8, 'w').toDate();

  for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
    const funnetKoordinat = koordinater.find((k) => dayjs(k.x).isSame(dato));
    nyeKoordinater.push([dato.toDate(), funnetKoordinat ? funnetKoordinat.y : 0]);
  }

  return nyeKoordinater;
};

interface OwnProps {
  height: number;
  isFireUkerValgt: boolean;
  oppgaverManueltPaVent: OppgaverManueltPaVent[];
}

/**
 * ManueltPaVentGraf.
 */
const ManueltPaVentGraf: FunctionComponent<OwnProps> = ({
  height,
  isFireUkerValgt,
  oppgaverManueltPaVent,
}) => {
  const koordinater = useMemo(() => lagKoordinater(oppgaverManueltPaVent), [oppgaverManueltPaVent]);
  const data = useMemo(() => lagDatastruktur(koordinater, isFireUkerValgt), [koordinater, isFireUkerValgt]);
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
                formatter: (params) => {
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
                name: 'Antall_behandlinger_satt_på_vent_manuelt',
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

export default ManueltPaVentGraf;
