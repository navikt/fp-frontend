import moment from 'moment';
import {
  dateAfterOrEqual, dateBeforeOrEqual, dateRangesNotOverlapping, hasValidDate, isRequiredMessage, required,
} from '@navikt/ft-form-validators';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

const validateDate = (
  dateAsText: string,
  date: moment.Moment,
  earliestDate: moment.Moment | string | null,
  latestDate: moment.Moment | string | null,
): any => {
  const error = required(dateAsText) || hasValidDate(dateAsText);
  if (!error && earliestDate) {
    return dateAfterOrEqual(earliestDate)(date);
  }
  if (!error && latestDate) {
    return dateBeforeOrEqual(latestDate)(date);
  }
  return error;
};

export type Options = {
  todayOrBefore?: boolean;
  todayOrAfter?: boolean;
  tidligstDato?: string;
};

export const hasValidPeriodIncludingOtherErrors = (
  values: { periodeFom: string; periodeTom: string }[],
  otherErrors: Record<number, any> = [{}],
  options: Options = {},
): { periodeFom: string; periodeTom: string }[] | { _error: any } | null => {
  const today = moment().format(ISO_DATE_FORMAT);
  let earliestDate = options.todayOrAfter ? today : null;
  if (options.tidligstDato) {
    earliestDate = options.tidligstDato;
  }
  const latestDate = options.todayOrBefore ? today : null;
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const arrayErrors = values.map(({ periodeFom, periodeTom }, index) => {
    const periodeFomDate = moment(periodeFom, ISO_DATE_FORMAT);
    const periodeTomDate = moment(periodeTom, ISO_DATE_FORMAT);
    const periodeFomError = validateDate(periodeFom, periodeFomDate, earliestDate, latestDate);
    let periodeTomError = validateDate(periodeTom, periodeTomDate, earliestDate, latestDate);
    if (!periodeFomError) {
      periodeTomError = periodeTomError || dateAfterOrEqual(periodeFomDate)(periodeTomDate);
    }
    if (periodeFomError || periodeTomError || otherErrors[index] !== null) {
      return {
        periodeFom: periodeFomError,
        periodeTom: periodeTomError,
        ...otherErrors[index],
      };
    }
    return null;
  });
  if (arrayErrors.some((errors) => errors !== null)) {
    return arrayErrors;
  }
  const overlapError = dateRangesNotOverlapping(values.map(({ periodeFom, periodeTom }) => [periodeFom, periodeTom]));
  if (overlapError) {
    return { _error: overlapError };
  }
  return null;
};
