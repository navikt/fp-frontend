import moment from 'moment';

import { fodselsnummerPattern, isValidFodselsnummer } from '../fodselsnummerUtils';
import { removeSpacesFromNumber } from '../currencyUtils';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '../formats';
import {
  arrayMinLengthMessage,
  dateNotAfterOrEqualMessage,
  dateNotBeforeOrEqualMessage,
  dateRangesOverlappingBetweenPeriodTypesMessage,
  dateRangesOverlappingMessage,
  datesNotEqual,
  invalidDateMessage,
  invalidDatesInPeriodMessage,
  invalidDecimalMessage,
  invalidFodselsnummerFormatMessage,
  invalidFodselsnummerMessage,
  invalidIntegerMessage,
  invalidNumberMessage,
  invalidOrgNumberMessage,
  invalidOrgNumberOrFodselsnrMessage,
  invalidPeriodMessage,
  invalidPeriodRangeMessage,
  invalidSaksnummerOrFodselsnummerFormatMessage,
  invalidTextMessage,
  invalidValueMessage,
  isRequiredMessage,
  maxLengthMessage,
  maxLengthOrFodselsnrMessage,
  maxValueMessage,
  minLengthMessage,
  minValueMessage,
  trekkdagerErMerEnnNullUtsettelseMessage,
  ukerOgDagerVidNullUtbetalningsgradMessage,
  utbetalingMerEnnNullUtsettelseMessage,
  utbetalingsgradErMerSamtidigUttaksprosentMessage,
  hasWhiteSpace,
} from './messages';
import {
  dateRangesAreSequential,
  decimalRegex,
  integerRegex,
  isEmpty,
  isoDateRegex,
  nameGyldigRegex,
  nameRegex,
  numberRegex,
  saksnummerOrFodselsnummerPattern,
  textGyldigRegex,
  textRegex,
  tomorrow,
  yesterday,
} from './validatorsHelper';

type DateType = moment.Moment | Date | string;

type InputValue = string | number | boolean;

type FormValidationResult = string | null | undefined;

export const maxLengthOrFodselsnr = (length: number) => (text: string): FormValidationResult => (isEmpty(text)
  // eslint-disable-next-line react/destructuring-assignment
  || text.toString().trim().length <= length ? null : maxLengthOrFodselsnrMessage(length));
export const required = (value?: InputValue): FormValidationResult => (isEmpty(value) ? isRequiredMessage() : undefined);
export const notDash = (value: InputValue): FormValidationResult => (value === '-' ? isRequiredMessage() : undefined);

export const requiredIfNotPristine = (
  value?: InputValue | null, // NOSONAR
  // @ts-ignore Fiks
  _allValues: any,
  props: { pristine: boolean},
): FormValidationResult => (props.pristine
  || !isEmpty(value) ? undefined : isRequiredMessage());

export const requiredIfCustomFunctionIsTrue = (
  // @ts-ignore Fiks
  isRequiredFunction: (values?: InputValue | null, props: { pristine: boolean}) => any,
) => (
  value?: InputValue | null, // NOSONAR
  allValues?: InputValue | null, // NOSONAR
  // @ts-ignore Fiks
  props: { pristine: boolean},
): FormValidationResult => (isEmpty(value) && isRequiredFunction(allValues, props) ? isRequiredMessage() : undefined);

export const requiredIfCustomFunctionIsTrueNew = (
  isRequiredFunction: (value?: InputValue) => boolean,
) => (
  value?: InputValue,
): FormValidationResult => (isEmpty(value) && isRequiredFunction(value) ? isRequiredMessage() : undefined);

export const minLength = (length: number) => (text: string): FormValidationResult => (isEmpty(text)
  // eslint-disable-next-line react/destructuring-assignment
  || text.toString().trim().length >= length ? null : minLengthMessage(length));
export const maxLength = (length: number) => (text: string): FormValidationResult => (isEmpty(text)
  // eslint-disable-next-line react/destructuring-assignment
  || text.toString().trim().length <= length ? null : maxLengthMessage(length));

export const minValue = (length: number) => (number: number): FormValidationResult => (number >= length ? null : minValueMessage(length));
export const maxValue = (length: number) => (number: number): FormValidationResult => (number <= length ? null : maxValueMessage(length));

export const minValueFormatted = (min: number) => (number: number): FormValidationResult => (removeSpacesFromNumber(number) >= min
  ? null : minValueMessage(min));
export const maxValueFormatted = (max: number) => (number: number): FormValidationResult => (removeSpacesFromNumber(number) <= max
  ? null : maxValueMessage(max));

export const hasValidOrgNumber = (number: number): FormValidationResult => (number.toString().trim().length === 9 ? null : invalidOrgNumberMessage());
export const hasValidOrgNumberOrFodselsnr = (number: number): FormValidationResult => (number.toString().trim().length === 9
|| number.toString().trim().length === 11 ? null : invalidOrgNumberOrFodselsnrMessage());
export const hasNoWhiteSpace = (value: string): FormValidationResult => (/\s/g.test(value) ? hasWhiteSpace() : null);

const hasValidNumber = (text: string | number): FormValidationResult => (isEmpty(text) || numberRegex.test(text.toString())
  ? null : invalidNumberMessage(text.toString()));
const hasValidInt = (text: string | number): FormValidationResult => (isEmpty(text) || integerRegex.test(text.toString())
  ? null : invalidIntegerMessage(text.toString()));
const hasValidDec = (text: string | number): FormValidationResult => (isEmpty(text) || decimalRegex.test(text.toString())
  ? null : invalidDecimalMessage(text.toString()));
export const hasValidInteger = (text: string | number): FormValidationResult => (hasValidNumber(text) || hasValidInt(text));
export const hasValidDecimal = (text: string | number): FormValidationResult => (hasValidNumber(text) || hasValidDec(text));

export const hasValidSaksnummerOrFodselsnummerFormat = (text: string): FormValidationResult => (isEmpty(text) || saksnummerOrFodselsnummerPattern.test(text)
  ? null : invalidSaksnummerOrFodselsnummerFormatMessage());

export const hasValidDate = (text: string): FormValidationResult => (isEmpty(text) || isoDateRegex.test(text) ? null : invalidDateMessage());
export const dateBeforeOrEqual = (latest: DateType) => (text?: moment.Moment | string): FormValidationResult => (
  (isEmpty(text) || moment(text).isSameOrBefore(moment(latest).startOf('day')))
    ? null
    : dateNotBeforeOrEqualMessage(moment(latest).format(DDMMYYYY_DATE_FORMAT))
);
const getErrorMessage = (earliest: DateType, customErrorMessage?: (date: string) => FormValidationResult): FormValidationResult => {
  const date = moment(earliest).format(DDMMYYYY_DATE_FORMAT);
  return customErrorMessage ? customErrorMessage(date) : dateNotAfterOrEqualMessage(date);
};
export const dateAfterOrEqual = (earliest: DateType, customErrorMessageFunction?: (date: string) => FormValidationResult) => (
  text?: moment.Moment | string,
): FormValidationResult => (
  (isEmpty(text) || moment(text).isSameOrAfter(moment(earliest).startOf('day')))
    ? null
    : getErrorMessage(earliest, customErrorMessageFunction)
);
export const dateIsBefore = (dateToCheckAgainst: string, errorMessageFunction: (date: string) => FormValidationResult) => (
  inputDate: string,
): FormValidationResult => (
  (isEmpty(inputDate) || moment(inputDate).isBefore(moment(dateToCheckAgainst).startOf('day')))
    ? null
    : errorMessageFunction(moment(dateToCheckAgainst).format(DDMMYYYY_DATE_FORMAT))
);

export const dateRangesNotOverlapping = (ranges: string[][]): FormValidationResult => (dateRangesAreSequential(ranges) ? null : dateRangesOverlappingMessage());
export const dateRangesNotOverlappingCrossTypes = (ranges: string[][]): FormValidationResult => (dateRangesAreSequential(ranges)
  ? null : dateRangesOverlappingBetweenPeriodTypesMessage());

export const dateBeforeToday = (text?: moment.Moment | string): FormValidationResult => dateBeforeOrEqual(yesterday())(text);
export const dateBeforeOrEqualToToday = (text?: moment.Moment | string): FormValidationResult => dateBeforeOrEqual(moment().startOf('day'))(text);
export const dateAfterToday = (text?: moment.Moment | string): FormValidationResult => dateAfterOrEqual(tomorrow())(text);
export const dateAfterOrEqualToToday = (text?: moment.Moment | string): FormValidationResult => dateAfterOrEqual(moment().startOf('day'))(text);

export const hasValidFodselsnummerFormat = (text: string): FormValidationResult => (!fodselsnummerPattern.test(text)
  ? invalidFodselsnummerFormatMessage() : null);
export const hasValidFodselsnummer = (text: string): FormValidationResult => (!isValidFodselsnummer(text) ? invalidFodselsnummerMessage() : null);

export const hasValidText = (text: string): FormValidationResult => {
  if (!textRegex.test(text)) {
    const illegalChars = text.replace(textGyldigRegex, '');
    return invalidTextMessage(illegalChars.replace(/[\t]/g, 'Tabulatortegn'));
  }
  return null;
};

export const hasValidName = (text: string): FormValidationResult => {
  if (!nameRegex.test(text)) {
    const illegalChars = text.replace(nameGyldigRegex, '');
    return invalidTextMessage(illegalChars.replace(/[\t]/g, 'Tabulatortegn'));
  }
  return null;
};

export const hasValidValue = (value: string) => (invalidValue: string): FormValidationResult => (value === invalidValue ? invalidValueMessage(value) : null);
// eslint-disable-next-line react/destructuring-assignment
export const arrayMinLength = (length: number) => (value: string): FormValidationResult => (value && value.length >= length
  ? null : arrayMinLengthMessage(length));

export const dateIsAfter = (date: string, checkAgainsDate: string): boolean => moment(date).isAfter(checkAgainsDate);
export const isDatesEqual = (date1: string, date2: string): FormValidationResult => (date1 !== date2
  ? datesNotEqual(moment(date2).format(DDMMYYYY_DATE_FORMAT)) : null);

const validateDate = (
  dateAsText: string,
  date: moment.Moment,
  earliestDate: moment.Moment | string | null,
  latestDate: moment.Moment | string | null,
): FormValidationResult => {
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
): { periodeFom: string; periodeTom: string }[] | { _error: FormValidationResult } | null => {
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

export const validPeriodeFomTom = (fomDate: string, tomDate: string): FormValidationResult => {
  if (isEmpty(fomDate) && isEmpty(tomDate)) {
    return null;
  }
  return moment(fomDate).isSameOrBefore(moment(tomDate).startOf('day')) ? null : invalidPeriodMessage();
};

export const hasValidPeriod = (fomDate: string, tomDate: string): FormValidationResult => {
  if (isEmpty(fomDate) && isEmpty(tomDate)) {
    return null;
  }
  if (!isoDateRegex.test(fomDate) || !isoDateRegex.test(tomDate)) {
    return invalidDatesInPeriodMessage();
  }
  return moment(fomDate).isSameOrBefore(moment(tomDate).startOf('day')) ? null : invalidPeriodMessage();
};

export const isWithinOpptjeningsperiode = (fomDateLimit: string, tomDateLimit: string) => (fom: string, tom: string): FormValidationResult => {
  const isBefore = moment(fom).isBefore(moment(fomDateLimit));
  const isAfter = moment(tom).isAfter(moment(tomDateLimit));
  return isBefore || isAfter ? invalidPeriodRangeMessage() : null;
};

export const isUtbetalingsgradMerSamitidigUttaksprosent = (samtidigUttaksProsent: number, utbetalingsgrad: number): FormValidationResult => {
  if (samtidigUttaksProsent < utbetalingsgrad) {
    return utbetalingsgradErMerSamtidigUttaksprosentMessage();
  }
  return null;
};

export const isUkerOgDagerVidNullUtbetalningsgrad = (weeks: number, days: number, utbetalingsgrad: number): FormValidationResult => {
  if (weeks === 0 && days === 0 && utbetalingsgrad > 0) {
    return ukerOgDagerVidNullUtbetalningsgradMessage();
  }
  return null;
};

export const validateProsentandel = (prosentandel: string | number): FormValidationResult => required(prosentandel)
  || hasValidDecimal(prosentandel) || hasValidNumber(prosentandel.toString().replace('.', ''));

export const ariaCheck = (): void => {
  let errors: any;
  setTimeout(() => {
    if (document.getElementsByClassName('skjemaelement__feilmelding').length > 0) {
      errors = document.getElementsByClassName('skjemaelement__feilmelding');
    } else if (document.getElementsByClassName('alertstripe--advarsel')) {
      errors = (document.getElementsByClassName('alertstripe--advarsel'));
    }
    if (errors && errors.length > 0) {
      const ariaNavTab = document.createAttribute('tabindex');
      ariaNavTab.value = '-1';
      const firstError = errors[0];
      firstError.setAttributeNode(ariaNavTab);
      const element = document.activeElement as HTMLElement;
      element.blur();
      firstError.focus();
    }
  }, 300);
};

export const isTrekkdagerMerEnnNullUtsettelse = (value: number): FormValidationResult => (value > 0 ? trekkdagerErMerEnnNullUtsettelseMessage() : null);

export const isUtbetalingMerEnnNullUtsettelse = (value: number): FormValidationResult => (value > 0 ? utbetalingMerEnnNullUtsettelseMessage() : null);
