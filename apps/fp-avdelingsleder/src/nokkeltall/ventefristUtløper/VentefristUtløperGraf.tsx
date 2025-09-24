import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { ReactECharts } from '@navikt/fp-los-felles';

import type { BehandlingVentefrist } from '../../typer/behandlingVentefristTsType';

dayjs.extend(isSameOrBefore);

interface Koordinat {
  x: number;
  y: number;
}

interface Props {
  height: number;
  behandlingerPaVent: BehandlingVentefrist[];
}

export const VentefristUtløperGraf = ({ height, behandlingerPaVent }: Props) => {
  const koordinater = lagKoordinater(behandlingerPaVent);
  const data = lagDatastruktur(koordinater);
  return (
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
                  return Number.parseInt(params.value as string, 10).toString();
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
  );
};

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
      .reduce((sum, y) => sum + y, 0);
    nyeKoordinater.push([dato.toDate(), sumY]);
  }

  return nyeKoordinater;
};
