import { FunctionComponent, useEffect } from 'react';
import { setValueInLocalStorage } from './localStorageHelper';

interface OwnProps {
  stateKey: string;
  values: any;
}

/**
 * StoreValuesInLocalStorage
 *
 * Lagrer verdier i localstorage når komponenten blir kastet. Brukt for å mellomlagre form-state
 * ved navigering fra og til komponenter som har en final-form.
 */
const StoreValuesInLocalStorage: FunctionComponent<OwnProps> = ({
  stateKey,
  values,
}): null => {
  useEffect(() => {
    setValueInLocalStorage(stateKey, JSON.stringify(values));
  }, [values]);

  return null;
};

export default StoreValuesInLocalStorage;
