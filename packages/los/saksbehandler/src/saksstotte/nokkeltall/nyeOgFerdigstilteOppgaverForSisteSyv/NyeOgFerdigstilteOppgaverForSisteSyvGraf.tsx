import { useIntl } from 'react-intl';

import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { ReactECharts } from '@navikt/fp-los-felles';

import type { NyeOgFerdigstilteOppgaver } from '../../../typer/nyeOgFerdigstilteOppgaverTsType';

interface Props {
  height: number;
  nyeOgFerdigstilteOppgaver: NyeOgFerdigstilteOppgaver[];
}

export const NyeOgFerdigstilteOppgaverForSisteSyvGraf = ({ height, nyeOgFerdigstilteOppgaver }: Props) => {
  const intl = useIntl();
  const ferdigLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte' });
  const nyLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye' });

  const sammenslatteOppgaver = slåSammenBehandlingstyperOgFyllInnTomme(nyeOgFerdigstilteOppgaver);
  const ferdigstilteOppgaver = sammenslatteOppgaver.map(o => [o.dato.getTime(), o.antallFerdigstilte]);
  const nyeOppgaver = sammenslatteOppgaver.map(o => [o.dato.getTime(), o.antallNye]);

  return (
    <ReactECharts
      height={height}
      option={{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
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
        legend: {
          data: [ferdigLabel, nyLabel],
          top: 'bottom',
        },
        grid: {
          top: '5%',
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'time',
            axisLabel: {
              formatter: '{dd}.{MM}.{yyyy}',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: ferdigLabel,
            type: 'line',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: ferdigstilteOppgaver,
          },
          {
            name: nyLabel,
            type: 'line',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: nyeOppgaver,
          },
        ],
        color: ['#38a161', '#337c9b'],
      }}
    />
  );
};

const slåSammenBehandlingstyperOgFyllInnTomme = (
  nyeOgFerdigstilteOppgaver: NyeOgFerdigstilteOppgaver[],
): { antallNye: number; antallFerdigstilte: number; dato: Date }[] => {
  const oppgaver = [];
  if (nyeOgFerdigstilteOppgaver.length > 0) {
    const iDag = dayjs().startOf('day');
    const atteDagerSiden = dayjs().subtract(7, 'days').startOf('day');

    for (let dato = atteDagerSiden; dato.isBefore(iDag); dato = dato.add(1, 'days')) {
      const dataForDato = nyeOgFerdigstilteOppgaver.filter(o => dayjs(o.dato).startOf('day').isSame(dato));
      if (dataForDato.length === 0) {
        oppgaver.push({
          antallNye: 0,
          antallFerdigstilte: 0,
          dato: dato.toDate(),
        });
      } else {
        oppgaver.push({
          antallNye: dataForDato.reduce((acc, d) => acc + d.antallNye, 0),
          antallFerdigstilte: dataForDato.reduce((acc, d) => acc + d.antallFerdigstilte, 0),
          dato: dato.toDate(),
        });
      }
    }
  }

  return oppgaver;
};
