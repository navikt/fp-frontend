import React, { FunctionComponent, useMemo } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import dayjs from 'dayjs';
import { Panel } from '@navikt/ds-react';
import { ReactECharts } from '@navikt/fp-los-felles';

import OppgaverSomErApneEllerPaVent from '../../../typer/oppgaverSomErApneEllerPaVentTsType';
import BehandlingVenteStatus from '../../../kodeverk/behandlingVenteStatus';

const UKJENT_DATO = 'UKJENT_DATO';

const getYearText = (month: number, intl: IntlShape): string =>
  intl.formatMessage({ id: `OppgaverSomErApneEllerPaVentGraf.${month}` });

interface KoordinatDatoEllerUkjent {
  x: string;
  y: number;
}

const finnGrafPeriode = (oppgaverSomErApneEllerPaVent: OppgaverSomErApneEllerPaVent[]): dayjs.Dayjs[] => {
  // Data er garantert å gå inntil 6 mnd tilbake og 10 mnd fram i tid. Utliggerne havner på første/siste mnd
  let periodeStart = dayjs().subtract(6, 'M');
  let periodeSlutt = dayjs().add(1, 'M');

  oppgaverSomErApneEllerPaVent
    .filter(oppgave => !!oppgave.førsteUttakMåned)
    .forEach(oppgave => {
      const dato = dayjs(oppgave.førsteUttakMåned);
      if (dato.isBefore(periodeStart)) {
        periodeStart = dato;
      }
      if (dato.isAfter(periodeSlutt)) {
        periodeSlutt = dato;
      }
    });

  // Ekstra kolonne for data med ukjent dato
  return [
    dayjs(periodeStart.startOf('month')),
    dayjs(periodeSlutt.add(1, 'months').startOf('month')),
  ];
};

const finnAntallPerDato = (
  oppgaverSomErApneEllerPaVent: OppgaverSomErApneEllerPaVent[],
): KoordinatDatoEllerUkjent[] => {
  const antallPerDatoOgUkjent = oppgaverSomErApneEllerPaVent.reduce((acc, oppgave) => {
    const { førsteUttakMåned, antall } = oppgave;
    const key = førsteUttakMåned || UKJENT_DATO;
    return {
      ...acc,
      [key]: acc[key] ? acc[key] + antall : antall,
    };
  }, {} as Record<string, number>);

  return Object.keys(antallPerDatoOgUkjent).map(k => ({ x: k, y: antallPerDatoOgUkjent[k] }));
};

const lagKoordinatForDato = (dato: dayjs.Dayjs, oppgaver: KoordinatDatoEllerUkjent[]): (number | Date)[] => {
  const eksisterendeDato = oppgaver.filter(o => o.x !== UKJENT_DATO).find(o => dayjs(o.x).isSame(dato));
  return [
    eksisterendeDato ? dayjs(eksisterendeDato.x).toDate() : dato.toDate(),
    eksisterendeDato ? eksisterendeDato.y : 0,
  ];
};

const fyllInnManglendeDatoerOgSorterEtterDato = (
  oppgaverPaVent: KoordinatDatoEllerUkjent[],
  oppgaverIkkePaVent: KoordinatDatoEllerUkjent[],
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): { koordinaterPaVent: (number | Date)[][]; koordinaterIkkePaVent: (number | Date)[][] } => {
  const koordinaterPaVent: (number | Date)[][] = [];
  const koordinaterIkkePaVent: (number | Date)[][] = [];

  // For å unngå kollisjon med Y-akse
  koordinaterPaVent.push([periodeStart.subtract(1, 'months').startOf('month').toDate(), 0]);
  let dato = dayjs(periodeStart);
  do {
    koordinaterPaVent.push(lagKoordinatForDato(dato, oppgaverPaVent));
    koordinaterIkkePaVent.push(lagKoordinatForDato(dato, oppgaverIkkePaVent));
    dato = dayjs(dato.add(1, 'month'));
  } while (dato.isBefore(periodeSlutt));

  koordinaterPaVent.push([periodeSlutt.toDate(), oppgaverPaVent.find(d => d.x === UKJENT_DATO)?.y || 0]);
  koordinaterIkkePaVent.push([periodeSlutt.toDate(), oppgaverIkkePaVent.find(d => d.x === UKJENT_DATO)?.y || 0]);

  return {
    koordinaterPaVent,
    koordinaterIkkePaVent,
  };
};

interface OwnProps {
  height: number;
  oppgaverApneEllerPaVent: OppgaverSomErApneEllerPaVent[];
}

/**
 * OppgaverSomErApneEllerPaVentGraf.
 */
const OppgaverSomErApneEllerPaVentGraf: FunctionComponent<OwnProps> = ({ height, oppgaverApneEllerPaVent }) => {
  const intl = useIntl();
  const paVentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.PaVent' });
  const ikkePaVentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.IkkePaVent' });
  const ukjentTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.Ukjent' });
  const datoTekst = intl.formatMessage({ id: 'OppgaverSomErApneEllerPaVentGraf.Dato' });

  const oppgaverPaVentPerDato = useMemo(
    () =>
      finnAntallPerDato(oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === BehandlingVenteStatus.PA_VENT)),
    [oppgaverApneEllerPaVent],
  );
  const oppgaverIkkePaVentPerDato = useMemo(
    () =>
      finnAntallPerDato(
        oppgaverApneEllerPaVent.filter(o => o.behandlingVenteStatus === BehandlingVenteStatus.IKKE_PA_VENT),
      ),
    [oppgaverApneEllerPaVent],
  );

  const [periodeStart, periodeSlutt] = useMemo(
    () => finnGrafPeriode(oppgaverApneEllerPaVent),
    [oppgaverApneEllerPaVent],
  );

  const { koordinaterPaVent, koordinaterIkkePaVent } = useMemo(
    () =>
      fyllInnManglendeDatoerOgSorterEtterDato(
        oppgaverPaVentPerDato,
        oppgaverIkkePaVentPerDato,
        periodeStart,
        periodeSlutt,
      ),
    [oppgaverPaVentPerDato, oppgaverIkkePaVentPerDato, periodeStart, periodeSlutt],
  );

  return (
    <Panel>
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
              boundaryGap: false,
              axisLabel: {
                formatter: (value: any) => {
                  const dato = dayjs(value);
                  const erSiste = dato.isSame(periodeSlutt);
                  const maned = erSiste ? ukjentTekst : getYearText(dato.month(), intl);
                  const ar = erSiste ? datoTekst : dato.year();

                  return `${maned}\n${ar}`;
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
            },
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
          ],
          color: ['#85d5f0', '#38a161'],
        }}
      />
    </Panel>
  );
};

export default OppgaverSomErApneEllerPaVentGraf;
