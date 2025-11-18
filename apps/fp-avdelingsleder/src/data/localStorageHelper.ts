import { useEffect } from 'react';

export const getValueFromLocalStorage = (key: string): string | undefined => {
  const value = globalThis.localStorage.getItem(key);
  return value !== 'undefined' && value !== null ? value : undefined;
};

export const getParsedValueFromLocalStorage = <T>(key: string): T | undefined => {
  const stringFromStorage = getValueFromLocalStorage(key);
  return stringFromStorage ? (JSON.parse(stringFromStorage) as T) : undefined;
};

export const setValueInLocalStorage = (key: string, value: string): void => {
  globalThis.localStorage.setItem(key, value);
};

export const removeValueFromLocalStorage = (key: string): void => {
  globalThis.localStorage.removeItem(key);
};

export const useStoreValuesInLocalStorage = <T>(stateKey: string, values: T) => {
  useEffect(() => {
    setValueInLocalStorage(stateKey, JSON.stringify(values));
  }, [values]);
};
