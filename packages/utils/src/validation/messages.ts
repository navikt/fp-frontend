export type ValidationType = {
  id: string;
} | {
  length: number;
} | {
  text: any;
} | {
  limit: number;
} | {
  value: any;
}

export const isRequiredMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.NotEmpty' }]);
export const minLengthMessage = (length: number): ValidationType[] => ([{ id: 'ValidationMessage.MinLength' }, { length }]);
export const maxLengthMessage = (length): ValidationType[] => ([{ id: 'ValidationMessage.MaxLength' }, { length }]);
export const maxLengthOrFodselsnrMessage = (length): ValidationType[] => ([{ id: 'ValidationMessage.maxLengthOrFodselsnr' }, { length }]);
export const minValueMessage = (length): ValidationType[] => ([{ id: 'ValidationMessage.MinValue' }, { length }]);
export const maxValueMessage = (length): ValidationType[] => ([{ id: 'ValidationMessage.MaxValue' }, { length }]);
export const invalidDateMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidDate' }]);
export const invalidIntegerMessage = (text): ValidationType[] => ([{ id: 'ValidationMessage.InvalidInteger' }, { text }]);
export const invalidDecimalMessage = (text): ValidationType[] => ([{ id: 'ValidationMessage.InvalidDecimal' }, { text }]);
export const dateNotBeforeOrEqualMessage = (limit): ValidationType[] => ([{ id: 'ValidationMessage.DateNotBeforeOrEqual' }, { limit }]);
export const dateNotAfterOrEqualMessage = (limit): ValidationType[] => ([{ id: 'ValidationMessage.DateNotAfterOrEqual' }, { limit }]);
export const dateRangesOverlappingMessage = () => ([{ id: 'ValidationMessage.DateRangesOverlapping' }]);
export const datesNotEqual = (value): ValidationType[] => ([{ id: 'ValidationMessage.DatesNotEqual' }, { value }]);
export const invalidFodselsnummerFormatMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidFodselsnummerFormat' }]);
export const invalidFodselsnummerMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidFodselsnummer' }]);
export const sammeFodselsnummerSomSokerMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.SammeFodselsnummerSomSoker' }]);
export const invalidSaksnummerOrFodselsnummerFormatMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidSaksnummerOrFodselsnummerFormat' }]);
export const invalidTextMessage = (text): ValidationType[] => ([{ id: 'ValidationMessage.InvalidText' }, { text }]);
export const invalidValueMessage = (value): ValidationType[] => ([{ id: 'ValidationMessage.InvalidValue' }, { value }]);
export const arrayMinLengthMessage = (length): ValidationType[] => ([{ id: 'ValidationMessage.ArrayMinLength' }, { length }]);
export const invalidDatesInPeriodMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidDatesInPeriod' }]);
export const invalidPeriodMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidPeriod' }]);
export const invalidPeriodRangeMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidPeriodRange' }]);
export const utbetalingsgradErMerSamtidigUttaksprosentMessage = (): ValidationType[] => ([{
  id: 'ValidationMessage.utbetalingsgradErMerSamtidigUttaksprosent',
}]);
export const trekkdagerErMerEnnNullUtsettelseMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.trekkdagerErMerEnnNullUtsettelse' }]);
export const utbetalingMerEnnNullUtsettelseMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.utbetalingMerEnnNullUtsettelse' }]);
export const invalidNumberMessage = (text): ValidationType[] => ([{ id: 'ValidationMessage.InvalidNumber' }, { text }]);
export const ukerOgDagerVidNullUtbetalningsgradMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.ukerOgDagerVidNullUtbetalningsgradMessage' }]);
export const arbeidsprosentMåVare100VidUtsettelseAvArbeidMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.UtsettelseUtenFullArbeid' }]);
export const merEn100ProsentMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.MerEn100Prosent' }]);
export const dateRangesOverlappingBetweenPeriodTypesMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.DateRangesOverlappingPeriodTypes' }]);
export const invalidOrgNumberMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidOrganisasjonsnummer' }]);
export const invalidOrgNumberOrFodselsnrMessage = (): ValidationType[] => ([{ id: 'ValidationMessage.InvalidOrganisasjonsnummerOrFodselsnr' }]);
