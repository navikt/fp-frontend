export const notEmpty = <T>(data: T, errorMessage?: string): NonNullable<T> => {
  if (data === undefined || data === null) {
    throw Error(errorMessage ?? 'Data er ikke oppgitt');
  }
  return data;
};
