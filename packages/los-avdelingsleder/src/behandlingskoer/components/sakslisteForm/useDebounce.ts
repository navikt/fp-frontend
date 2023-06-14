import { useCallback, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { UseFormTrigger, useFormContext } from 'react-hook-form';

export const getTimeoutValue = () => (process.env.NODE_ENV === 'test' ? 0 : 1000);

const useDebounce = <Value>(feltNavn: string, funksjon: (verdier: Value) => void, trigger?: UseFormTrigger<any>) => {
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

export default useDebounce;
