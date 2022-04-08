import moment from 'moment';

import {
  dateRangesOverlappingMessage, invalidDateMessage, invalidDecimalMessage, ISO_DATE_FORMAT,
} from '@navikt/ft-utils';

import { PermisjonGraderingPanel } from './PermisjonGraderingPanel';

describe('<PermisjonGraderingPanel>', () => {
  const getPeriodDaysFromToday = (periodeForGradering: any, prosentandelArbeid: any, startDaysFromToday: any, endDaysFromToday: any) => ({
    periodeFom: moment().add(startDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    periodeTom: moment().add(endDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    periodeForGradering,
    prosentandelArbeid,
  });

  const getPeriod = (periodeForGradering: any, prosentandelArbeid: any, periodeFom: any, periodeTom: any) => ({
    periodeFom,
    periodeTom,
    periodeForGradering,
    prosentandelArbeid,
  });

  const periodeForGradering = 'TEST';
  const validDecimal = '40';
  const invalidDecimal = '40,222';

  it('skal validere at prosentandel er desimaltall', () => {
    const errorsWithInvalidDecimal = PermisjonGraderingPanel.validate([getPeriodDaysFromToday(periodeForGradering, invalidDecimal, -20, -15)]);
    const errorsWithValidNumber = PermisjonGraderingPanel.validate([getPeriodDaysFromToday(periodeForGradering, validDecimal, -20, -15)]);

    expect(errorsWithInvalidDecimal).toHaveLength(1);
    expect(errorsWithInvalidDecimal[0].prosentandelArbeid).toEqual(invalidDecimalMessage(invalidDecimal));
    expect(errorsWithInvalidDecimal[1]).toBeFalsy();

    expect(errorsWithValidNumber).toBeFalsy();
  });

  it('skal validere at alle perioder har gyldige datoer', () => {
    const errorsWithInvalidDates = PermisjonGraderingPanel.validate([getPeriod(periodeForGradering, validDecimal, 'abc', 'xyz'),
      getPeriodDaysFromToday(periodeForGradering, validDecimal, -20, -15)]);
    const errorsWithValidDates = PermisjonGraderingPanel.validate([getPeriodDaysFromToday(periodeForGradering, validDecimal, -10, -5),
      getPeriodDaysFromToday(periodeForGradering, validDecimal, -20, -15)]);

    expect(errorsWithInvalidDates).toHaveLength(2);
    expect(errorsWithInvalidDates[0].periodeFom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[0].periodeTom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[1]).toBeFalsy();

    expect(errorsWithValidDates).toBeFalsy();
  });

  it('skal validere at ingen perioder overlapper', () => {
    const errorsWithInvalidDates = PermisjonGraderingPanel.validate([getPeriodDaysFromToday(periodeForGradering, validDecimal, -20, -15),
      getPeriodDaysFromToday(periodeForGradering, validDecimal, -16, -11)]);
    const errorsWithValidDates = PermisjonGraderingPanel.validate([getPeriodDaysFromToday(periodeForGradering, validDecimal, -20, -15),
      getPeriodDaysFromToday(periodeForGradering, validDecimal, -14, -10)]);

    expect(errorsWithInvalidDates).toEqual({
      _error: 'Perioder kan ikke overlappe i tid',
    });
    // eslint-disable-next-line no-underscore-dangle
    expect(errorsWithInvalidDates._error).toEqual(dateRangesOverlappingMessage());

    expect(errorsWithValidDates).toBeFalsy();
  });
});
