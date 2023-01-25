import React, { FunctionComponent, useMemo } from 'react';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { Panel } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { ReactECharts } from '@navikt/fp-los-felles';

import NyeOgFerdigstilteOppgaver from '../../../../typer/nyeOgFerdigstilteOppgaverTsType';

export const slaSammenBehandlingstyperOgFyllInnTomme = (nyeOgFerdigstilteOppgaver: NyeOgFerdigstilteOppgaver[]):
{ antallNye: number; antallFerdigstilte: number; dato: Date}[] => {
  const oppgaver = [];
  if (nyeOgFerdigstilteOppgaver.length > 0) {
    const iDag = dayjs().startOf('day');
    const atteDagerSiden = dayjs().subtract(7, 'days').startOf('day');

    for (let dato = atteDagerSiden; dato.isBefore(iDag); dato = dato.add(1, 'days')) {
      const dataForDato = nyeOgFerdigstilteOppgaver.filter((o) => dayjs(o.dato).startOf('day').isSame(dato));
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

interface OwnProps {
  height: number;
  nyeOgFerdigstilteOppgaver: NyeOgFerdigstilteOppgaver[];
}

/**
 * NyeOgFerdigstilteOppgaverForIdagGraf
 */
export const NyeOgFerdigstilteOppgaverForIdagGraf: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  height,
  nyeOgFerdigstilteOppgaver,
}) => {
  const ferdigLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForSisteSyvGraf.Ferdigstilte' });
  const nyLabel = intl.formatMessage({ id: 'NyeOgFerdigstilteOppgaverForSisteSyvGraf.Nye' });

  const sammenslatteOppgaver = useMemo(() => slaSammenBehandlingstyperOgFyllInnTomme(nyeOgFerdigstilteOppgaver), [nyeOgFerdigstilteOppgaver]);
  const ferdigstilteOppgaver = useMemo(() => sammenslatteOppgaver.map((o) => [o.dato.getTime(), o.antallFerdigstilte]), [sammenslatteOppgaver]);
  const nyeOppgaver = useMemo(() => sammenslatteOppgaver.map((o) => [o.dato.getTime(), o.antallNye]), [sammenslatteOppgaver]);

  return (
    <Panel>
      <ReactECharts
        height={height}
        option={{
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
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
          legend: {
            data: [ferdigLabel, nyLabel],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
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
    </Panel>
  );
};

export default injectIntl(NyeOgFerdigstilteOppgaverForIdagGraf);
