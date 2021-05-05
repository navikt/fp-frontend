import moment from 'moment/moment';
import 'moment/locale/nb';
import {
  DDMMYYYY_DATE_FORMAT, HHMM_TIME_FORMAT, ISO_DATE_FORMAT, YYYY_MM_FORMAT,
} from './formats';

export const TIDENES_ENDE = '9999-12-31';

type WeekAndDay = {
  id: string;
  weeks?: number;
  days?: number;
}

// TODO Denne funksjonen må ut ifrå utils. Dette er uttakslogikk
const checkDays = (weeks?: number, days?: number): WeekAndDay => {
  const weeksDaysObj = {
    weeks,
    days,
  };

  let id = 'UttakInfoPanel.AntallFlereDagerOgFlereUker';

  if (weeks === undefined && days === undefined) {
    id = 'UttakInfoPanel.TidenesEnde';
  }

  if (days === 0) {
    id = weeks === 1 ? 'UttakInfoPanel.AntallNullDagerOgEnUke' : 'UttakInfoPanel.AntallNullDagerOgFlereUker';
  }

  if (weeks === 0) {
    id = days === 1 ? 'UttakInfoPanel.AntallEnDagOgNullUker' : 'UttakInfoPanel.AntallFlereDagerOgNullUker';
  }

  if (days === 1) {
    id = weeks === 1 ? 'UttakInfoPanel.AntallEnDagOgEnUke' : 'UttakInfoPanel.AntallEnDagOgFlereUker';
  }

  if (weeks === 1) {
    id = 'UttakInfoPanel.AntallFlereDagerOgEnUke';
  }

  return {
    id,
    ...weeksDaysObj,
  };
};

export const calcDays = (fraDatoPeriode: string, tilDatoPeriode: string, notWeekends = true): number => {
  if (tilDatoPeriode === TIDENES_ENDE) {
    // @ts-ignore Kva er dette?
    return checkDays();
  }

  const fraDato = moment(fraDatoPeriode, ISO_DATE_FORMAT);
  const tilDato = moment(tilDatoPeriode, ISO_DATE_FORMAT);
  let numOfDays;

  if (notWeekends) {
    let count = tilDato.diff(fraDato, 'days');
    let date = moment(fraDatoPeriode, ISO_DATE_FORMAT);
    numOfDays = date.isoWeekday() !== 6 && date.isoWeekday() !== 7 ? 1 : 0;

    while (count > 0) {
      date = date.add(1, 'days');

      if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
        numOfDays += 1;
      }

      count -= 1;
    }
  } else {
    // Vi legger til én dag for å få med startdato i perioden
    numOfDays = tilDato.diff(fraDato, 'days') + 1;
  }

  return numOfDays;
};

export const calcDaysAndWeeks = (fraDatoPeriode: string, tilDatoPeriode: string): WeekAndDay => {
  const numOfDays = calcDays(fraDatoPeriode, tilDatoPeriode);

  const weeks = Math.floor(numOfDays / 5);
  const days = numOfDays % 5;

  return checkDays(weeks, days);
};

export const calcDaysAndWeeksWithWeekends = (fraDatoPeriode: string, tilDatoPeriode: string): WeekAndDay => {
  const notWeekends = false;

  const numOfDays = calcDays(fraDatoPeriode, tilDatoPeriode, notWeekends);

  const weeks = Math.floor(numOfDays / 7);
  const days = numOfDays % 7;

  return checkDays(weeks, days);
};

export const dateFormat = (date?: Date | string): string => moment(date).format(DDMMYYYY_DATE_FORMAT);

export const timeFormat = (date: string): string => moment(date).format(HHMM_TIME_FORMAT);

// Skal ikke legge til dag når dato er tidenes ende
export const addDaysToDate = (dateString: string, nrOfDays: number): string => (dateString === TIDENES_ENDE
  ? dateString
  : moment(dateString, ISO_DATE_FORMAT).add(nrOfDays, 'days').format(ISO_DATE_FORMAT));

export const findDifferenceInMonthsAndDays = (fomDate: string, tomDate: string): { months: number; days: number; } | undefined => {
  const fDate = moment(fomDate, ISO_DATE_FORMAT, true);
  const tDate = moment(tomDate, ISO_DATE_FORMAT, true).add(1, 'days');
  if (!fDate.isValid() || !tDate.isValid() || fDate.isAfter(tDate)) {
    return undefined;
  }

  const months = tDate.diff(fDate, 'months');
  fDate.add(months, 'months');

  return {
    months,
    days: tDate.diff(fDate, 'days'),
  };
};

export const getRangeOfMonths = (fom: string, tom: string): { month: string, year: string }[] => {
  moment.locale('nb');
  const fraMåned = moment(fom, YYYY_MM_FORMAT);
  const tilMåned = moment(tom, YYYY_MM_FORMAT);
  let currentMonth = fraMåned;
  const range = [{
    month: currentMonth.format('MMMM'),
    year: currentMonth.format('YY'),
  }];

  while (currentMonth.isBefore(tilMåned)) {
    currentMonth = currentMonth.add(1, 'month');
    range.push({
      month: currentMonth.format('MMMM'),
      year: currentMonth.format('YY'),
    });
  }

  return range;
};
