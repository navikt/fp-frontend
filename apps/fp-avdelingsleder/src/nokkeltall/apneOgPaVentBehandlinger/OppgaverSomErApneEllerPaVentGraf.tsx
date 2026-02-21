import { useIntl } from 'react-intl';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import {
  createBarSeries,
  createToolboxWithFilename,
  formaterMånedÅr,
  getAkselVariable,
  getStyle,
  ReactECharts,
} from '@navikt/fp-los-felles';
import { type NøkkeltallBehandlingFørsteUttakDto } from '@navikt/fp-types';

const UKJENT_DATO = 'UKJENT_DATO';

interface KoordinatDatoEllerUkjent {
  x: string;
  y: number;
}

interface Props {
  height: number;
  oppgaverApneEllerPaVent: NøkkeltallBehandlingFørsteUttakDto[];
}

export const OppgaverSomErApneEllerPaVentGraf = ({ height, oppgaverApneEllerPaVent }: Props) => {
  const intl = useIntl();
  const ukjentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.UkjentDato' });

  const oppgaverPaVentPerDato = finnAntallPerDato(
    oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === 'PÅ_VENT'),
  );
  const oppgaverIkkePaVentPerDato = finnAntallPerDato(
    oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === 'IKKE_PÅ_VENT'),
  );

  const maaneder: string[] = finnMaaneder(oppgaverApneEllerPaVent);
  const periodeSlutt = dayjs(maaneder.at(-1));

  const { koordinaterPaVent, koordinaterIkkePaVent } = fyllInnManglendeDatoerOgSorterEtterDato(
    maaneder,
    oppgaverPaVentPerDato,
    oppgaverIkkePaVentPerDato,
    periodeSlutt,
  );
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
              formatter: params => {
                const dato = dayjs(params.value);
                if (dato.isSame(periodeSlutt)) {
                  return ukjentTekst;
                }
                return formaterMånedÅr(params.value as string);
              },
            },
          },
        },
        toolbox: createToolboxWithFilename('Status_åpne_behandlinger'),
        xAxis: [
          {
            type: 'category',
            data: maaneder,
            axisLabel: {
              ...options.textStyle,
              formatter: value => {
                const dato = dayjs(value);
                if (dato.isSame(periodeSlutt)) {
                  return ukjentTekst;
                }
                return formaterMånedÅr(value);
              },
            },
          },
        ],
        yAxis: {
          type: 'value',
          name: intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.AntallGraf' }),
          axisLabel: {
            ...options.textStyle,
            formatter: (value: number) => value.toLocaleString('nb-NO'),
          },
        },
        series: [
          createBarSeries({
            name: intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.IkkePaVent' }),
            data: koordinaterIkkePaVent,
            color: getAkselVariable('--ax-bg-success-moderate-pressed'),
            itemStyle: {
              borderColor: getAkselVariable('--ax-bg-success-strong'),
            },
          }),
          createBarSeries({
            name: intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.PaVent' }),
            data: koordinaterPaVent,
            color: getAkselVariable('--ax-bg-accent-moderate-pressed'),
            itemStyle: {
              borderColor: getAkselVariable('--ax-bg-accent-strong'),
            },
          }),
        ],
      }}
    />
  );
};

const finnMaaneder = (oppgaverSomErApneEllerPaVent: NøkkeltallBehandlingFørsteUttakDto[]): string[] => {
  const alledatoer = new Set<string>(
    oppgaverSomErApneEllerPaVent
      .filter(oppgave => !!oppgave.førsteUttakMåned)
      .map(o => dayjs(o.førsteUttakMåned).startOf('month').format(ISO_DATE_FORMAT)),
  );

  const maaneder: string[] = Array.from(alledatoer)
    .map(m => dayjs(m))
    .sort((a, b) => (a.isBefore(b) ? -1 : 1))
    .map(d => d.format(ISO_DATE_FORMAT));
  const maxmaaned = maaneder.length > 0 ? maaneder.at(-1) : dayjs().startOf('month');
  const ekstra = dayjs(maxmaaned).add(1, 'months').startOf('month');
  maaneder.push(ekstra.format(ISO_DATE_FORMAT));
  return maaneder;
};

const finnAntallPerDato = (
  oppgaverSomErApneEllerPaVent: NøkkeltallBehandlingFørsteUttakDto[],
): KoordinatDatoEllerUkjent[] => {
  const antallPerDatoOgUkjent = oppgaverSomErApneEllerPaVent.reduce(
    (acc, oppgave) => {
      const { førsteUttakMåned, antall } = oppgave;
      const key = førsteUttakMåned ?? UKJENT_DATO;
      return {
        ...acc,
        [key]: acc[key] ? acc[key] + antall : antall,
      };
    },
    {} as Record<string, number>,
  );

  return Object.keys(antallPerDatoOgUkjent).map(k => ({ x: k, y: antallPerDatoOgUkjent[k]! }));
};

const lagKoordinatForDato = (dato: dayjs.Dayjs, oppgaver: KoordinatDatoEllerUkjent[]): number => {
  const eksisterendeDato = oppgaver.filter(o => o.x !== UKJENT_DATO).find(o => dayjs(o.x).isSame(dato));
  return eksisterendeDato ? eksisterendeDato.y : 0;
};

const lagKoordinatForUkjent = (oppgaver: KoordinatDatoEllerUkjent[]): number => {
  const ukjentDato = oppgaver.find(o => o.x === UKJENT_DATO);
  return ukjentDato ? ukjentDato.y : 0;
};

const fyllInnManglendeDatoerOgSorterEtterDato = (
  maaneder: string[],
  oppgaverPaVent: KoordinatDatoEllerUkjent[],
  oppgaverIkkePaVent: KoordinatDatoEllerUkjent[],
  periodeSlutt: dayjs.Dayjs,
): { koordinaterPaVent: number[]; koordinaterIkkePaVent: number[] } => {
  const koordinaterPaVent: number[] = [];
  const koordinaterIkkePaVent: number[] = [];

  maaneder
    .filter(m => !dayjs(m).isSame(periodeSlutt))
    .forEach(m => {
      const dato = dayjs(m);
      koordinaterPaVent.push(lagKoordinatForDato(dato, oppgaverPaVent));
      koordinaterIkkePaVent.push(lagKoordinatForDato(dato, oppgaverIkkePaVent));
    });
  koordinaterPaVent.push(lagKoordinatForUkjent(oppgaverPaVent));
  koordinaterIkkePaVent.push(lagKoordinatForUkjent(oppgaverIkkePaVent));

  return {
    koordinaterPaVent,
    koordinaterIkkePaVent,
  };
};
