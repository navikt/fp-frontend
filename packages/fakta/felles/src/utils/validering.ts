export const hasValue = (value: string | number | boolean | undefined | null): boolean =>
  value !== null && value !== undefined;

export const isNotEqual = (
  value1: number | string | undefined | null,
  value2: number | string | undefined | null,
): boolean => hasValue(value2) && value1 !== value2;
