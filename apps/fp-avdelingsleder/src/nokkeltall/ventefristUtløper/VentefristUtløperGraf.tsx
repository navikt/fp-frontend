import { createBarSeries, createToolboxWithFilename, getStyle, ReactECharts } from '@navikt/fp-los-felles';
import type { FagsakYtelseType, NøkkeltallBehandlingVentefristUtløperDto } from '@navikt/fp-types';

import { useLosKodeverk } from '../../data/useLosKodeverk';

interface Props {
  height: number;
  behandlingerPaVent: NøkkeltallBehandlingVentefristUtløperDto[];
}

export const VentefristUtløperGraf = ({ height, behandlingerPaVent }: Props) => {
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');
  const options = getStyle();

  return (
    <ReactECharts
      height={height}
      option={{
        ...options,
        tooltip: {
          ...options.tooltip,
          trigger: 'axis',
          valueFormatter: value => (value as number).toLocaleString('nb-NO'),
          axisPointer: {
            type: 'shadow',
            label: {
              formatter: params => formaterUkeÅr(params.value as string),
            },
          },
        },
        toolbox: createToolboxWithFilename('Antall_forstegangsbehandlinger_der_frist_utloper'),
        xAxis: {
          type: 'category',
          data: getUkeKategorier(behandlingerPaVent),
          axisLabel: {
            ...options.textStyle,
            formatter: formaterUkeÅr,
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            ...options.textStyle,
            formatter: (value: number) => value.toLocaleString('nb-NO'),
          },
        },
        series: [
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'FP')?.navn,
              data: lagDatastruktur(behandlingerPaVent, 'FP'),
            },
            'accent',
          ),
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'SVP')?.navn,
              data: lagDatastruktur(behandlingerPaVent, 'SVP'),
            },
            'warning',
          ),
          createBarSeries(
            {
              name: fagsakYtelseTyper.find(b => b.kode === 'ES')?.navn,
              data: lagDatastruktur(behandlingerPaVent, 'ES'),
            },
            'success',
          ),
        ],
      }}
    />
  );
};

const lagDatastruktur = (
  oppgaverManueltPaVent: NøkkeltallBehandlingVentefristUtløperDto[],
  fagsakYtelseType: FagsakYtelseType,
): [string, number][] => {
  const nyeKoordinater = oppgaverManueltPaVent
    .filter(o => o.fagsakYtelseType === fagsakYtelseType)
    .map(o => ({
      x: o.fristUke,
      y: o.antall,
    }))
    .reduce(
      (acc, { x, y }) => {
        acc[x] = (acc[x] || 0) + y;
        return acc;
      },
      {} as Record<string, number>,
    );
  return Object.entries(nyeKoordinater).sort((a, b) => a[0].localeCompare(b[0]));
};

const formaterUkeÅr = (value: string): string => {
  return 'Uke ' + value.split('-')[1] + ' ' + value.split('-')[0];
};

const getUkeKategorier = (behandlingerPaVent: NøkkeltallBehandlingVentefristUtløperDto[]): string[] =>
  Array.from(new Set(behandlingerPaVent.map(behandling => behandling.fristUke))).sort((a, b) => a.localeCompare(b));
