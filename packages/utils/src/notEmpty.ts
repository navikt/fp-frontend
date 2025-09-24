export const notEmpty = <T>(data: T, errorMessage?: string): NonNullable<T> => {
  if (data === undefined || data === null) {
    throw new Error(errorMessage ?? 'Data er ikke oppgitt');
  }
  return data;
};
