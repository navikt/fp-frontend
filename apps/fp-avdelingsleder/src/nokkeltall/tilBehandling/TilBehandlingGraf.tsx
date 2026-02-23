import type { AkselColor } from '@navikt/ds-react/types/theme';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { createLineSeries, createToolboxWithFilename, getStyle, ReactECharts } from '@navikt/fp-los-felles';
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

export type OppgaveForDatoGraf = {
  behandlingType: BehandlingType;
  statistikkDato: string;
  antall: number;
};

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
  const serieConfig = fyllInnManglendeDatoerOgSorterEtterDato(koordinater, periodeStart, periodeSlutt);
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
                return dayjs(params.value).format('D. MMMM YYYY');
              },
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_til_behandling'),
        xAxis: {
          type: 'time',
          axisLabel: {
            ...options.textStyle,
            formatter: '{d}. {MMM}',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            ...options.textStyle,
            formatter: (value: number) => value.toLocaleString('nb-NO'),
          },
        },
        series: serieConfig.map(([type, data]) =>
          createLineSeries(
            { name: finnBehandlingTypeNavn(behandlingTyper, type), data },
            behandlingstypeAkselFarger[type],
          ),
        ),
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
): [BehandlingType, [string, number][]][] =>
  Array.from(data.entries())
    .reduce((acc, [behandlingstype, behandlingstypeData]) => {
      const koordinater: [string, number][] = [];

      for (let dato = dayjs(periodeStart); dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'days')) {
        const funnetDato = behandlingstypeData.find(d => dayjs(d.x).startOf('day').isSame(dato.startOf('day')));
        koordinater.push(
          funnetDato ? [dayjs(funnetDato.x).format(ISO_DATE_FORMAT), funnetDato.y] : [dato.format(ISO_DATE_FORMAT), 0],
        );
      }

      acc.set(behandlingstype, koordinater);
      return acc;
    }, new Map<BehandlingType, [string, number][]>())
    .entries()
    .toArray();
