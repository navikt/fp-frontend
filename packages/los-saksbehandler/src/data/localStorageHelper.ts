export const getValueFromLocalStorage = (key: string): string | undefined => {
  const value = window.localStorage.getItem(key);
  return value !== 'undefined' && value !== null ? value : undefined;
};

export const setValueInLocalStorage = (key: string, value: any): void => {
  window.localStorage.setItem(key, value);
};

export const removeValueFromLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};
