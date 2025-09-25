export const getValueFromLocalStorage = (key: string): string | undefined => {
  const value = globalThis.localStorage.getItem(key);
  return value !== 'undefined' && value !== null ? value : undefined;
};

export const setValueInLocalStorage = (key: string, value: string): void => {
  globalThis.localStorage.setItem(key, value);
};

export const removeValueFromLocalStorage = (key: string): void => {
  globalThis.localStorage.removeItem(key);
};
