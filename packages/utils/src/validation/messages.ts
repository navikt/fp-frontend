import createIntl from '../createIntl';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export const isRequiredMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.NotEmpty' });
export const minLengthMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.MinLength' }, { length });
export const maxLengthMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.MaxLength' }, { length });
export const maxLengthOrFodselsnrMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.maxLengthOrFodselsnr' }, { length });
export const minValueMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.MinValue' }, { length });
export const maxValueMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.MaxValue' }, { length });
export const invalidDateMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidDate' });
export const invalidIntegerMessage = (text: string): string => intl.formatMessage({ id: 'ValidationMessage.InvalidInteger' }, { text });
export const invalidDecimalMessage = (text: string): string => intl.formatMessage({ id: 'ValidationMessage.InvalidDecimal' }, { text });
export const dateNotBeforeOrEqualMessage = (limit: string): string => intl.formatMessage({ id: 'ValidationMessage.DateNotBeforeOrEqual' }, { limit });
export const dateNotAfterOrEqualMessage = (limit: string): string => intl.formatMessage({ id: 'ValidationMessage.DateNotAfterOrEqual' }, { limit });
export const dateRangesOverlappingMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.DateRangesOverlapping' });
export const datesNotEqual = (value: string): string => intl.formatMessage({ id: 'ValidationMessage.DatesNotEqual' }, { value });
export const invalidFodselsnummerFormatMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidFodselsnummerFormat' });
export const invalidFodselsnummerMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidFodselsnummer' });
export const sammeFodselsnummerSomSokerMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.SammeFodselsnummerSomSoker' });
export const invalidSaksnummerOrFodselsnummerFormatMessage = (): string => intl.formatMessage({
  id: 'ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat',
});
export const invalidTextMessage = (text: string): string => intl.formatMessage({ id: 'ValidationMessage.InvalidText' }, { text });
export const invalidValueMessage = (value: string): string => intl.formatMessage({ id: 'ValidationMessage.InvalidValue' }, { value });
export const arrayMinLengthMessage = (length: number): string => intl.formatMessage({ id: 'ValidationMessage.ArrayMinLength' }, { length });
export const invalidDatesInPeriodMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidDatesInPeriod' });
export const invalidPeriodMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidPeriod' });
export const invalidPeriodRangeMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidPeriodRange' });
export const utbetalingsgradErMerSamtidigUttaksprosentMessage = (): string => intl.formatMessage({
  id: 'ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent',
});
export const trekkdagerErMerEnnNullUtsettelseMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' });
export const utbetalingMerEnnNullUtsettelseMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' });
export const invalidNumberMessage = (text: string): string => intl.formatMessage({ id: 'ValidationMessage.InvalidNumber' }, { text });
export const ukerOgDagerVidNullUtbetalningsgradMessage = (): string => intl.formatMessage({
  id: 'ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage',
});
export const arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.UtsettelseUtenFullArbeid' });
export const merEn100ProsentMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.MerEn100Prosent' });
export const dateRangesOverlappingBetweenPeriodTypesMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.DateRangesOverlappingPeriodTypes' });
export const invalidOrgNumberMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidOrganisasjonsnummer' });
export const invalidOrgNumberOrFodselsnrMessage = (): string => intl.formatMessage({ id: 'ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr' });
export const hasWhiteSpace = (): string => intl.formatMessage({ id: 'ValidationMessage.NoWhiteSpace' });
