import { useEffect, useMemo, useRef } from 'react';
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

  const sisteArgsRef = useRef({ validationTrigger, feltNavn, funksjon });
  useEffect(() => {
    sisteArgsRef.current = { validationTrigger, feltNavn, funksjon };
  });

  const lagre = useMemo(
    () =>
      // eslint-disable-next-line react-hooks/refs -- lesinga skjer inne i debounce-callbacken (etter render), ikkje under render
      debounce((verdi: VALUE) => {
        const { validationTrigger: validate, feltNavn: felt, funksjon: fn } = sisteArgsRef.current;
        void validate(felt).then(isValid => isValid && fn(verdi));
      }, getTimeoutValue()),
    [],
  );

  useEffect(() => () => lagre.cancel(), [lagre]);

  return lagre;
};
