import moment from 'moment';

import { dateRangesOverlappingMessage, invalidDateMessage, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';

import { PermisjonOppholdPanel } from './PermisjonOppholdPanel';

describe('<PermisjonOppholdPanel>', () => {
  const getPeriodDaysFromToday = (startDaysFromToday: any, endDaysFromToday: any) => ({
    periodeFom: moment().add(startDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    periodeTom: moment().add(endDaysFromToday, 'days').format(ISO_DATE_FORMAT),
    årsak: 'TEST',
  });

  const getPeriod = (periodeFom: any, periodeTom: any) => ({
    periodeFom,
    periodeTom,
    årsak: 'TEST',
  });

  it('skal validere at alle perioder har gyldige datoer', () => {
    const errorsWithInvalidDates = PermisjonOppholdPanel.validate([getPeriod('abc', 'xyz'), getPeriodDaysFromToday(-20, -15)]);
    const errorsWithValidDates = PermisjonOppholdPanel.validate([getPeriodDaysFromToday(-10, -5), getPeriodDaysFromToday(-20, -15)]);

    expect(errorsWithInvalidDates).toHaveLength(2);
    expect(errorsWithInvalidDates[0].periodeFom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[0].periodeTom).toEqual(invalidDateMessage());
    expect(errorsWithInvalidDates[1]).toBeFalsy();

    expect(errorsWithValidDates).toBeFalsy();
  });

  it('skal validere at ingen perioder overlapper', () => {
    const errorsWithInvalidDates = PermisjonOppholdPanel.validate([getPeriodDaysFromToday(-20, -15), getPeriodDaysFromToday(-16, -11)]);
    const errorsWithValidDates = PermisjonOppholdPanel.validate([getPeriodDaysFromToday(-20, -15), getPeriodDaysFromToday(-14, -10)]);

    expect(errorsWithInvalidDates).toEqual({ _error: 'Perioder kan ikke overlappe i tid' });
    // eslint-disable-next-line no-underscore-dangle
    expect(errorsWithInvalidDates._error).toEqual(dateRangesOverlappingMessage());

    expect(errorsWithValidDates).toBeFalsy();
  });
});
