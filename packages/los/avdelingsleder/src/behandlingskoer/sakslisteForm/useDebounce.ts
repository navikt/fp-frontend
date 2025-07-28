import { useCallback, useEffect } from 'react';
import { type FieldValues, type Path, useFormContext, type UseFormTrigger } from 'react-hook-form';

import debounce from 'lodash.debounce';

const getTimeoutValue = () => (import.meta.env.MODE === 'test' ? 0 : 1000);

export const useDebounce = <VALUE, FORM_VALUES extends FieldValues>(
  feltNavn: Path<FORM_VALUES>,
  funksjon: (verdier: VALUE) => void,
  trigger?: UseFormTrigger<FORM_VALUES>,
) => {
  const context = useFormContext<FORM_VALUES>();
  const validationTrigger = trigger || context.trigger;

  const lagre = useCallback(
    debounce((verdi: VALUE) => {
      validationTrigger(feltNavn).then(isValid => isValid && funksjon(verdi));
    }, getTimeoutValue()),
    [funksjon],
  );

  useEffect(() => () => lagre.cancel(), []);

  return lagre;
};
