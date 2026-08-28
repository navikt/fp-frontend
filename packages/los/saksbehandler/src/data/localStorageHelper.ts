export const getValueFromLocalStorage = (key: string): string | undefined => {
  const value = localStorage.getItem(key);
  return value !== 'undefined' && value !== null ? value : undefined;
};

export const setValueInLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeValueFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
