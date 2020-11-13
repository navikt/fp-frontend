export type FormValidationError = [{
  id: string;
}, ...Array<{ text: string } | { length: number } | { limit: string } | { value: any }>];

export const isRequiredMessage = (): FormValidationError => ([{ id: 'ValidationMessage.NotEmpty' }]);
export const minLengthMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.MinLength' }, { length }]);
export const maxLengthMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.MaxLength' }, { length }]);
export const maxLengthOrFodselsnrMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.maxLengthOrFodselsnr' }, { length }]);
export const minValueMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.MinValue' }, { length }]);
export const maxValueMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.MaxValue' }, { length }]);
export const invalidDateMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidDate' }]);
export const invalidIntegerMessage = (text: string): FormValidationError => ([{ id: 'ValidationMessage.InvalidInteger' }, { text }]);
export const invalidDecimalMessage = (text: string): FormValidationError => ([{ id: 'ValidationMessage.InvalidDecimal' }, { text }]);
export const dateNotBeforeOrEqualMessage = (limit: string): FormValidationError => ([{ id: 'ValidationMessage.DateNotBeforeOrEqual' }, { limit }]);
export const dateNotAfterOrEqualMessage = (limit: string): FormValidationError => ([{ id: 'ValidationMessage.DateNotAfterOrEqual' }, { limit }]);
export const dateRangesOverlappingMessage = () => ([{ id: 'ValidationMessage.DateRangesOverlapping' }]);
export const datesNotEqual = (value): FormValidationError => ([{ id: 'ValidationMessage.DatesNotEqual' }, { value }]);
export const invalidFodselsnummerFormatMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidFodselsnummerFormat' }]);
export const invalidFodselsnummerMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidFodselsnummer' }]);
export const sammeFodselsnummerSomSokerMessage = (): FormValidationError => ([{ id: 'ValidationMessage.SammeFodselsnummerSomSoker' }]);
export const invalidSaksnummerOrFodselsnummerFormatMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat' }]);
export const invalidTextMessage = (text: string): FormValidationError => ([{ id: 'ValidationMessage.InvalidText' }, { text }]);
export const invalidValueMessage = (value): FormValidationError => ([{ id: 'ValidationMessage.InvalidValue' }, { value }]);
export const arrayMinLengthMessage = (length: number): FormValidationError => ([{ id: 'ValidationMessage.ArrayMinLength' }, { length }]);
export const invalidDatesInPeriodMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidDatesInPeriod' }]);
export const invalidPeriodMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidPeriod' }]);
export const invalidPeriodRangeMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidPeriodRange' }]);
export const utbetalingsgradErMerSamtidigUttaksprosentMessage = (): FormValidationError => ([{
  id: 'ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent',
}]);
export const trekkdagerErMerEnnNullUtsettelseMessage = (): FormValidationError => ([{ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' }]);
export const utbetalingMerEnnNullUtsettelseMessage = (): FormValidationError => ([{ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' }]);
export const invalidNumberMessage = (text: string): FormValidationError => ([{ id: 'ValidationMessage.InvalidNumber' }, { text }]);
export const ukerOgDagerVidNullUtbetalningsgradMessage = (): FormValidationError => ([{ id: 'ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage' }]);
export const arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage = (): FormValidationError => ([{ id: 'ValidationMessage.UtsettelseUtenFullArbeid' }]);
export const merEn100ProsentMessage = (): FormValidationError => ([{ id: 'ValidationMessage.MerEn100Prosent' }]);
export const dateRangesOverlappingBetweenPeriodTypesMessage = (): FormValidationError => ([{ id: 'ValidationMessage.DateRangesOverlappingPeriodTypes' }]);
export const invalidOrgNumberMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidOrganisasjonsnummer' }]);
export const invalidOrgNumberOrFodselsnrMessage = (): FormValidationError => ([{ id: 'ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr' }]);
