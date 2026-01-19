import type { IntlShape } from 'react-intl';
import { useIntl } from 'react-intl';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { ReactECharts } from '@navikt/fp-los-felles';

import type { OppgaverForForsteStonadsdagUkeMnd } from '../../typer/oppgaverForForsteStonadsdagUkeMndTsType';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Koordinat {
  x: string;
  y: number;
}

interface Props {
  height: number;
  oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdagUkeMnd[];
}

const getYearText = (month: number, intl: IntlShape): string =>
  intl.formatMessage({ id: `OppgaverPerForsteStonadsdagGraf.${month}` });

export const OppgaverPerForsteStonadsdagGraf = ({ height, oppgaverPerForsteStonadsdag }: Props) => {
  const intl = useIntl();
  const koordinater = lagKoordinater(oppgaverPerForsteStonadsdag);
  const data = lagDatastruktur(koordinater);
  return (
    <ReactECharts
      height={height}
      option={{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              formatter: params => {
                const dato = dayjs(params.value);
                return `${getYearText(dato.month(), intl)} - ${dato.year()}`;
              },
            },
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Lagre ',
              name: 'Antall_førstegangsbehandling_oppgaver_fordelt_på_første_stønadsdag',
            },
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            formatter: value => {
              const dato = dayjs(value);
              return `${getYearText(dato.month(), intl)}\n${dato.year()}`;
            },
          },
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

const lagKoordinater = (oppgaverPerForsteStonadsdag: OppgaverForForsteStonadsdagUkeMnd[]): Koordinat[] =>
  oppgaverPerForsteStonadsdag.map(o => ({
    x: dayjs(o.førsteStønadsdag).startOf('month').format(ISO_DATE_FORMAT),
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
