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
} as const;

// Avsluttet uses the same hue but with a light (semi-transparent) fill and a solid border
const lagAvsluttetFarge = (farge: string): { color: string; borderColor: string; borderWidth: number } => ({
  color: farge + '55', // ~33% opacity
  borderColor: farge,
  borderWidth: 2,
});

export interface EndringForDatoGraf {
  behandlingType: BehandlingType;
  statistikkDato: string;
  opprettet: number;
  avsluttet: number;
}

type Koordinat = {
  x: Date;
  y: number;
};

interface Props {
  height: number;
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[];
  endringPerDato: EndringForDatoGraf[];
  isToUkerValgt: boolean;
}

export const OpprettetAvsluttetGraf = ({ height, endringPerDato, isToUkerValgt, behandlingTyper }: Props) => {
  const periodeStart = dayjs()
    .subtract(isToUkerValgt ? 2 : 4, 'w');
  const periodeSlutt = dayjs().subtract(1, 'd');

  const kOpprettet = konverterTilKoordinaterGruppertPaBehandlingstype(endringPerDato, o => o.opprettet);
  const dataOpprettet = fyllInnManglendeDatoerOgSorterEtterDato(kOpprettet, periodeStart, periodeSlutt);
  const kAvsluttet = konverterTilKoordinaterGruppertPaBehandlingstype(endringPerDato, o => o.avsluttet);
  const dataAvsluttet = fyllInnManglendeDatoerOgSorterEtterDato(kAvsluttet, periodeStart, periodeSlutt);

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
        legend: [
          {
            data: Array.from(dataOpprettet.keys()).map(type => `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`),
            top: 0,
            left: 'center',
            textStyle: { ...options.textStyle },
          },
          {
            data: Array.from(dataAvsluttet.keys()).map(type => `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`),
            top: 25,
            left: 'center',
            textStyle: { ...options.textStyle },
          },
        ],
        grid: { top: 70 },
        xAxis: {
          type: 'time',
          axisLabel: {
            ...options.textStyle,
            formatter: '{dd}.{MM}.{yyyy}',
          },
        },
        yAxis: {
          type: 'value',
          nameTextStyle: { ...options.textStyle },
          axisLabel: { ...options.textStyle },
        },
        series: [
          ...Array.from(dataOpprettet.entries()).map(([type, value]) => ({
            name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`,
            type: 'bar' as const,
            stack: 'opprettet',
            data: value,
            color: behandlingstypeFarger[type],
          })),
          ...Array.from(dataAvsluttet.entries()).map(([type, value]) => ({
            name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`,
            type: 'bar' as const,
            stack: 'avsluttet',
            data: value,
            itemStyle: lagAvsluttetFarge(behandlingstypeFarger[type]),
          })),
        ]
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
  oppgaverForAvdeling: EndringForDatoGraf[],
  mapFunc: (o: EndringForDatoGraf) => number,
): Map<BehandlingType, Koordinat[]> =>
  oppgaverForAvdeling.reduce<Map<BehandlingType, Koordinat[]>>((acc, o) => {
    const nyKoordinat = {
      x: dayjs(o.statistikkDato).startOf('day').toDate(),
      y: mapFunc(o),
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
