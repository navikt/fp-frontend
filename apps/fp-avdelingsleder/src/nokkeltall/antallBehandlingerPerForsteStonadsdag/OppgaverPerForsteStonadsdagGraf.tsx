import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { ReactECharts } from '@navikt/fp-los-felles';

import type { OppgaverForForsteStonadsdag } from '../../typer/oppgaverForForsteStonadsdagTsType';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Koordinat {
  x: number;
  y: number;
}

interface Props {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[];
}

export const OppgaverPerForsteStonadsdagGraf = ({ height, oppgaverPerForsteStonadsdag }: Props) => {
  const koordinater = lagKoordinater(oppgaverPerForsteStonadsdag);
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
              formatter: params => dayjs(params.value).format(DDMMYYYY_DATE_FORMAT),
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

const lagKoordinater = (oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdag[]): Koordinat[] =>
  oppgaverPerForsteStonadsdag.map(o => ({
    x: dayjs(o.forsteStonadsdag).startOf('day').toDate().getTime(),
    y: o.antall,
  }));

const lagDatastruktur = (koordinater: Koordinat[]): number[][] => {
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
    const funnetKoordinat = koordinater.find(k => dayjs(k.x).isSame(dato));
    nyeKoordinater.push([dato.toDate().getTime(), funnetKoordinat ? funnetKoordinat.y : 0]);
  }
  return nyeKoordinater;
};
