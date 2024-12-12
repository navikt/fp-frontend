import { useEffect } from 'react';

import { setValueInLocalStorage } from './localStorageHelper';

//TODO Skriv om til hook

interface Props {
  stateKey: string;
  values: any;
}

/**
 * StoreValuesInLocalStorage
 *
 * Lagrer verdier i localstorage når komponenten blir kastet. Brukt for å mellomlagre form-state
 * ved navigering fra og til komponenter som har en final-form.
 */
export const StoreValuesInLocalStorage = ({ stateKey, values }: Props): null => {
  useEffect(() => {
    setValueInLocalStorage(stateKey, JSON.stringify(values));
  }, [values]);

  return null;
};
