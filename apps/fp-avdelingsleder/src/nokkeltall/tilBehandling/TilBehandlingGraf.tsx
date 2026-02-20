import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { createToolboxWithFilename, getStyle, ReactECharts } from '@navikt/fp-los-felles';
import type { BehandlingType, LosKodeverkMedNavn } from '@navikt/fp-types';

const behandlingstypeFarger = {
  ['BT-009']: '#ef5d28',
  ['BT-007']: '#ff842f',
  ['BT-006']: '#ffd23b',
  ['BT-003']: '#826ba1',
  ['BT-004']: '#3385d1',
  ['BT-002']: '#85d5f0',
  ['BT-008']: '#85d5f0',
  '-': '#85d5f0', // Eksisterer for TS: burde ikke inntreffe
};

export interface OppgaveForDatoGraf {
  behandlingType: BehandlingType;
  statistikkDato: string;
  antall: number;
}

type Koordinat = {
  x: Date;
  y: number;
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

  const options = getStyle();
  return (
    <ReactECharts
      height={height}
      option={{
        ...options,
        tooltip: {
          ...options.tooltip,
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              formatter: params => {
                if (params.axisDimension === 'y') {
                  return Number.parseInt(params.value as string, 10).toLocaleString('nb-NO');
                }
                return dayjs(params.value).format(DDMMYYYY_DATE_FORMAT);
              },
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_til_behandling'),
        xAxis: {
          type: 'time',
          axisLabel: {
            ...options.textStyle,
            formatter: '{dd}.{MM}.{yyyy}',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            ...options.textStyle,
          },
        },
        series: Array.from(data.entries()).map(([type, value]) => ({
          name: finnBehandlingTypeNavn(behandlingTyper, type),
          type: 'line',
          stack: 'stackname',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: value,
          color: behandlingstypeFarger[type],
        })),
      }}
    />
  );
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
): Map<BehandlingType, Koordinat[]> =>
  oppgaverForAvdeling.reduce<Map<BehandlingType, Koordinat[]>>((acc, o) => {
    const nyKoordinat = {
      x: dayjs(o.statistikkDato).startOf('day').toDate(),
      y: o.antall,
    };

    const eksisterendeKoordinater = acc.get(o.behandlingType);
    acc.set(o.behandlingType, eksisterendeKoordinater ? eksisterendeKoordinater.concat(nyKoordinat) : [nyKoordinat]);
    return acc;
  }, new Map());

const fyllInnManglendeDatoerOgSorterEtterDato = (
  data: Map<BehandlingType, Koordinat[]>,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): Map<BehandlingType, [string, number][]> =>
  Array.from(data.entries()).reduce((acc, [behandlingstype, behandlingstypeData]) => {
    const koordinater: [string, number][] = [];

    for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
      const funnetDato = behandlingstypeData.find(d => dayjs(d.x).startOf('day').isSame(dato.startOf('day')));
      koordinater.push(
        funnetDato ? [dayjs(funnetDato.x).format(ISO_DATE_FORMAT), funnetDato.y] : [dato.format(ISO_DATE_FORMAT), 0],
      );
    }

    acc.set(behandlingstype, koordinater);
    return acc;
  }, new Map<BehandlingType, [string, number][]>());
