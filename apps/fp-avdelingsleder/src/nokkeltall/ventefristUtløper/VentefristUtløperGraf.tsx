import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { ReactECharts } from '@navikt/fp-los-felles';

import type { BehandlingVentefrist } from '../../typer/behandlingVentefristTsType';

dayjs.extend(isSameOrBefore);

interface Koordinat {
  x: string;
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
                return params.value.toString();
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
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data,
            type: 'bar',
          },
        ],
        color: ['#337c9b'],
      }}
    />
  );
};

const lagKoordinater = (oppgaverManueltPaVent: BehandlingVentefrist[]): Koordinat[] =>
  oppgaverManueltPaVent.map(o => ({
    x: o.fristUke,
    y: o.antall,
  }));

const lagDatastruktur = (koordinater: Koordinat[]): (number | string)[][] => {
  const nyeKoordinater: Record<string, number> = koordinater.reduce(
    (acc, { x, y }) => {
      acc[x] = (acc[x] || 0) + y;
      return acc;
    },
    {} as Record<string, number>,
  );
  return Object.entries(nyeKoordinater).sort((a, b) => a[0].localeCompare(b[0]));
};
