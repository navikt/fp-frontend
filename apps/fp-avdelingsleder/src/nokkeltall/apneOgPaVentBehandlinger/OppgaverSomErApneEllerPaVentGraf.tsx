import { type IntlShape, useIntl } from 'react-intl';

import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { ReactECharts } from '@navikt/fp-los-felles';

import { BehandlingVenteStatus } from '../../kodeverk/behandlingVenteStatus';
import type { OppgaverSomErApneEllerPaVent } from '../../typer/oppgaverSomErApneEllerPaVentTsType';

const UKJENT_DATO = 'UKJENT_DATO';

const getYearText = (month: number, intl: IntlShape): string =>
  intl.formatMessage({ id: `OppgaverSomErApneEllerPaVentGraf.${month}` });

interface KoordinatDatoEllerUkjent {
  x: string;
  y: number;
}

interface Props {
  height: number;
  oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[];
}

export const OppgaverSomErApneEllerPaVentGraf = ({ height, oppgaverApneEllerPaVent }: Props) => {
  const intl = useIntl();
  const paVentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.PaVent' });
  const ikkePaVentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.IkkePaVent' });
  const ukjentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.Ukjent' });
  const datoTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.Dato' });

  const oppgaverPaVentPerDato = finnAntallPerDato(
    oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === BehandlingVenteStatus.PA_VENT),
  );
  const oppgaverIkkePaVentPerDato = finnAntallPerDato(
    oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === BehandlingVenteStatus.IKKE_PA_VENT),
  );

  const maaneder: string[] = finnMaaneder(oppgaverApneEllerPaVent);
  const periodeSlutt = dayjs(maaneder.at(-1));

  const { koordinaterPaVent, koordinaterIkkePaVent } = fyllInnManglendeDatoerOgSorterEtterDato(
    maaneder,
    oppgaverPaVentPerDato,
    oppgaverIkkePaVentPerDato,
    periodeSlutt,
  );

  return (
    <ReactECharts
      height={height}
      option={{
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              formatter: params => {
                const dato = dayjs(params.value);
                if (dato.isSame(periodeSlutt)) {
                  return `${ukjentTekst} ${datoTekst}`;
                }
                return `${getYearText(dato.month(), intl)} - ${dato.year()}`;
              },
            },
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {
              title: 'Lagre ',
              name: 'Status_åpne_behandlinger',
            },
          },
        },
        legend: {
          data: [paVentTekst, ikkePaVentTekst],
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
            type: 'category',
            boundaryGap: true,
            data: maaneder,
            axisLabel: {
              formatter: value => {
                const dato = dayjs(value);
                if (dato.isSame(periodeSlutt)) {
                  return `${ukjentTekst}\n${datoTekst}`;
                }
                return `${getYearText(dato.month(), intl)}\n${dato.year()}`;
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.AntallGraf' }),
          },
        ],
        series: [
          {
            name: ikkePaVentTekst,
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: koordinaterIkkePaVent,
          },
          {
            name: paVentTekst,
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: koordinaterPaVent,
          }
        ],
        color: ['#38a161', '#85d5f0'],
      }}
    />
  );
};

const finnMaaneder = (oppgaverSomErApneEllerPaVent: OppgaverSomErApneEllerPaVent[]): string[] => {
  const alledatoer = new Set<string>(oppgaverSomErApneEllerPaVent
    .filter(oppgave => !!oppgave.førsteUttakMåned)
    .map(o => dayjs(o.førsteUttakMåned).startOf('month').format(ISO_DATE_FORMAT)));

  const maaneder: string[] = Array.from(alledatoer).map(m => dayjs(m)).sort((a, b) => a.isBefore(b) ? -1 : 1).map(d => d.format(ISO_DATE_FORMAT));
  const maxmaaned = maaneder.length > 0 ? maaneder.at(-1) : dayjs().startOf('month');
  const ekstra = dayjs(maxmaaned).add(1, 'months').startOf('month');
  maaneder.push(ekstra.format(ISO_DATE_FORMAT));
  return maaneder;
};

const finnAntallPerDato = (
  oppgaverSomErApneEllerPaVent: OppgaverSomErApneEllerPaVent[],
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

  maaneder.filter(m => !dayjs(m).isSame(periodeSlutt)).forEach(m => {
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
