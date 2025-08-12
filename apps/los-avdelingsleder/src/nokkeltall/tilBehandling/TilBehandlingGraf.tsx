import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { BehandlingType } from '@navikt/fp-kodeverk';
import { ReactECharts } from '@navikt/fp-los-felles';
import type { LosKodeverkMedNavn } from '@navikt/fp-types';

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
  [BehandlingType.ANKE]: '#85d5f0',
};

export interface OppgaveForDatoGraf {
  behandlingType: string;
  opprettetDato: string;
  antall: number;
}

type Koordinat = {
  x: Date;
  y: number;
};

const keysFromObject = <T extends object>(object: T): (keyof T)[] => {
  return Object.keys(object) as (keyof T)[];
};

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  oppgaverPerDato: OppgaveForDatoGraf[];
  isToUkerValgt: boolean;
}

export const TilBehandlingGraf = ({ height, oppgaverPerDato, isToUkerValgt, behandlingTyper }: Props) => {
  const periodeStart = dayjs()
    .subtract(isToUkerValgt ? 2 : 4, 'w')
    .add(1, 'd');
  const periodeSlutt = dayjs();

  const koordinater = konverterTilKoordinaterGruppertPaBehandlingstype(oppgaverPerDato);
  const data = fyllInnManglendeDatoerOgSorterEtterDato(koordinater, periodeStart, periodeSlutt);

  const alleBehandlingstyperSortert = behandlingTyper.map(bt => bt.kode).sort(sorterBehandlingtyper);
  const sorterteBehandlingstyper = keysFromObject(data).sort(sorterBehandlingtyper);
  const reversertSorterteBehandlingstyper = sorterteBehandlingstyper.slice().reverse();
  const farger = alleBehandlingstyperSortert.map(bt => behandlingstypeFarger[bt]);

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
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Lagre ',
              name: 'Antall_til_behandling',
            },
          },
        },
        legend: {
          data: reversertSorterteBehandlingstyper.map(type => finnBehandlingTypeNavn(behandlingTyper, type)),
          top: 'top',
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
        series: alleBehandlingstyperSortert.map(type => ({
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
  );
};

const sorterBehandlingtyper = (b1: BehandlingType, b2: BehandlingType): number => {
  const index1 = behandlingstypeOrder.findIndex(bo => bo === b1);
  const index2 = behandlingstypeOrder.findIndex(bo => bo === b2);
  if (index1 === index2) {
    return 0;
  }
  return index1 > index2 ? -1 : 1;
};

const finnBehandlingTypeNavn = (
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[],
  behandlingTypeKode: BehandlingType,
): string => {
  const type = behandlingTyper.find(bt => bt.kode === behandlingTypeKode);
  return type ? type.navn : '';
};

const konverterTilKoordinaterGruppertPaBehandlingstype = (
  oppgaverForAvdeling: OppgaveForDatoGraf[],
): Record<string, Koordinat[]> =>
  oppgaverForAvdeling.reduce(
    (acc, o) => {
      const nyKoordinat = {
        x: dayjs(o.opprettetDato).startOf('day').toDate(),
        y: o.antall,
      };

      const eksisterendeKoordinater = acc[o.behandlingType];
      return {
        ...acc,
        [o.behandlingType]: eksisterendeKoordinater ? eksisterendeKoordinater.concat(nyKoordinat) : [nyKoordinat],
      };
    },
    {} as Record<string, Koordinat[]>,
  );

const fyllInnManglendeDatoerOgSorterEtterDato = (
  data: Record<BehandlingType, Koordinat[]>,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): Record<BehandlingType, Date[][]> =>
  keysFromObject(data).reduce(
    (acc, behandlingstype) => {
      const behandlingstypeData = data[behandlingstype];
      const koordinater = [];

      for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
        const funnetDato = behandlingstypeData.find(d => dayjs(d.x).startOf('day').isSame(dato.startOf('day')));
        koordinater.push(
          funnetDato ? [dayjs(funnetDato.x).format(ISO_DATE_FORMAT), funnetDato.y] : [dato.format(ISO_DATE_FORMAT), 0],
        );
      }

      return {
        ...acc,
        [behandlingstype]: koordinater,
      };
    },
    {} as Record<BehandlingType, Date[][]>,
  );
