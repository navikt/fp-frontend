import type { AkselColor } from '@navikt/ds-react/types/theme';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  createBarSeriesWithColorResolver,
  createToolboxWithFilename,
  getAkselColorPair,
  getSoftAkselColorPair,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';
import type { BehandlingType, LosKodeverkMedNavn } from '@navikt/fp-types';

const behandlingstypeAkselFarger: Record<BehandlingType, AkselColor> = {
  ['BT-002']: 'accent', // Førstegangsbehandling
  ['BT-003']: 'meta-purple', // Klage
  ['BT-004']: 'success', // Revurdering
  ['BT-006']: 'warning', // Innsyn
  ['BT-007']: 'brand-beige', // Tilbakebetaling
  ['BT-008']: 'meta-lime', // Anke
  ['BT-009']: 'danger', // Tilbakebetaling revurdering
  '-': 'neutral', // Eksisterer for TS: burde ikke inntreffe
};


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
            data: Array.from(dataOpprettet.keys()).map(
              type => `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`,
            ),
            top: 0,
            left: 'center',
            textStyle: { ...options.textStyle },
          },
          {
            data: Array.from(dataAvsluttet.keys()).map(
              type => `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`,
            ),
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
          ...Array.from(dataOpprettet.entries()).map(([type, verdi]) =>
            createBarSeriesWithColorResolver(
              { name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (opprettet)`, data: verdi, stack: 'opprettet' },
              behandlingstypeAkselFarger[type],
              getAkselColorPair,
            ),
          ),
          ...Array.from(dataAvsluttet.entries()).map(([type, verdi]) =>
            createBarSeriesWithColorResolver(
              {
                name: `${finnBehandlingTypeNavn(behandlingTyper, type)} (avsluttet)`,
                data: verdi,
                stack: 'avsluttet',
                label: {
                  show: true,
                  formatter: params => {
                    const val = Array.isArray(params.value) ? params.value[1] : params.value;
                    return typeof val === 'number' && val !== 0 ? val.toLocaleString('nb-NO') : '';
                  },
                },
              },
              behandlingstypeAkselFarger[type],
              getSoftAkselColorPair,
            ),
          ),
        ],
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
