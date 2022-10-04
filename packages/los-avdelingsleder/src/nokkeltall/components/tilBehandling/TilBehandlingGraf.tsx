import React, { FunctionComponent, useMemo } from 'react';
import dayjs from 'dayjs';
import { Panel } from '@navikt/ds-react';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { ISO_DATE_FORMAT, dateFormat } from '@navikt/ft-utils';
import { BehandlingType } from '@navikt/ft-kodeverk';

import ReactECharts from '../../../ReactECharts';

const behandlingstypeOrder = [
  BehandlingType.TILBAKEKREVING_REVURDERING,
  BehandlingType.TILBAKEKREVING,
  BehandlingType.DOKUMENTINNSYN,
  BehandlingType.KLAGE,
  BehandlingType.REVURDERING,
  BehandlingType.FORSTEGANGSSOKNAD,
];

const behandlingstypeFarger = {
  [BehandlingType.TILBAKEKREVING_REVURDERING]: '#ef5d28',
  [BehandlingType.TILBAKEKREVING]: '#ff842f',
  [BehandlingType.DOKUMENTINNSYN]: '#ffd23b',
  [BehandlingType.KLAGE]: '#826ba1',
  [BehandlingType.REVURDERING]: '#3385d1',
  [BehandlingType.FORSTEGANGSSOKNAD]: '#85d5f0',
};

export interface OppgaveForDatoGraf {
  behandlingType: string;
  opprettetDato: string;
  antall: number;
}

type Koordinat = {
  x: Date,
  y: number,
}

const sorterBehandlingtyper = (b1: string, b2: string): number => {
  const index1 = behandlingstypeOrder.findIndex((bo) => bo === b1);
  const index2 = behandlingstypeOrder.findIndex((bo) => bo === b2);
  if (index1 === index2) {
    return 0;
  }
  return index1 > index2 ? -1 : 1;
};

const finnBehandlingTypeNavn = (behandlingTyper: KodeverkMedNavn[], behandlingTypeKode: string): string => {
  const type = behandlingTyper.find((bt) => bt.kode === behandlingTypeKode);
  return type ? type.navn : '';
};

const konverterTilKoordinaterGruppertPaBehandlingstype = (oppgaverForAvdeling: OppgaveForDatoGraf[]): Record<string, Koordinat[]> => oppgaverForAvdeling
  .reduce((acc, o) => {
    const nyKoordinat = {
      x: dayjs(o.opprettetDato).startOf('day').toDate(),
      y: o.antall,
    };

    const eksisterendeKoordinater = acc[o.behandlingType];
    return {
      ...acc,
      [o.behandlingType]: (eksisterendeKoordinater ? eksisterendeKoordinater.concat(nyKoordinat) : [nyKoordinat]),
    };
  }, {} as Record<string, Koordinat[]>);

const fyllInnManglendeDatoerOgSorterEtterDato = (
  data: Record<string, Koordinat[]>,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): Record<string, Date[][]> => Object.keys(data).reduce((acc, behandlingstype) => {
  const behandlingstypeData = data[behandlingstype];
  const koordinater = [];

  for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
    const funnetDato = behandlingstypeData.find((d) => dayjs(d.x).startOf('day').isSame(dato.startOf('day')));
    koordinater.push(funnetDato ? [dayjs(funnetDato.x).format(ISO_DATE_FORMAT), funnetDato.y] : [dato.format(ISO_DATE_FORMAT), 0]);
  }

  return {
    ...acc,
    [behandlingstype]: koordinater,
  };
}, {});

interface OwnProps {
  height: number;
  behandlingTyper: KodeverkMedNavn[];
  oppgaverPerDato: OppgaveForDatoGraf[];
  isToUkerValgt: boolean;
}

/**
 * TilBehandlingGraf
 */
export const TilBehandlingGraf: FunctionComponent<OwnProps> = ({
  height,
  oppgaverPerDato,
  isToUkerValgt,
  behandlingTyper,
}) => {
  const periodeStart = dayjs().subtract(isToUkerValgt ? 2 : 4, 'w').add(1, 'd');
  const periodeSlutt = dayjs();

  const koordinater = useMemo(() => konverterTilKoordinaterGruppertPaBehandlingstype(oppgaverPerDato), [oppgaverPerDato]);
  const data = useMemo(() => fyllInnManglendeDatoerOgSorterEtterDato(koordinater, periodeStart, periodeSlutt), [koordinater, periodeStart, periodeSlutt]);

  const alleBehandlingstyperSortert = behandlingTyper.map((bt) => bt.kode).sort(sorterBehandlingtyper);
  const sorterteBehandlingstyper = Object.keys(data).sort(sorterBehandlingtyper);
  const reversertSorterteBehandlingstyper = sorterteBehandlingstyper.slice().reverse();
  // @ts-ignore Fiks
  const farger = alleBehandlingstyperSortert.map((bt) => behandlingstypeFarger[bt]);

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
                  return dateFormat(params.value as string);
                },
              },
            },
          },
          toolbox: {
            feature: {
              saveAsImage: {
                title: 'Lagre ',
                name: 'Antall_til_behandling',
              },
            },
          },
          legend: {
            data: reversertSorterteBehandlingstyper.map((type) => finnBehandlingTypeNavn(behandlingTyper, type)),
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
          series: alleBehandlingstyperSortert
            .map((type) => ({
              name: finnBehandlingTypeNavn(behandlingTyper, type),
              type: 'line',
              stack: 'stackname',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: data[type],
            })),
          color: farger,
        }}
      />
    </Panel>
  );
};

export default TilBehandlingGraf;
