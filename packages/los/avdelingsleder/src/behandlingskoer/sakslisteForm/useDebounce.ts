import { useCallback, useEffect } from 'react';
import { useFormContext, type UseFormTrigger } from 'react-hook-form';

import debounce from 'lodash.debounce';

export const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 1000);

export const useDebounce = <Value>(
  feltNavn: string,
  funksjon: (verdier: Value) => void,
  trigger?: UseFormTrigger<any>,
) => {
  const context = useFormContext();
  const validationTrigger = trigger || context.trigger;

  const lagre = useCallback(
    debounce((verdi: Value) => {
      validationTrigger(feltNavn).then(isValid => isValid && funksjon(verdi));
    }, getTimeoutValue()),
    [funksjon],
  );

  useEffect(() => () => lagre.cancel(), []);

  return lagre;
};
