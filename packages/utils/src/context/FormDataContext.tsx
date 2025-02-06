import { createContext, ReactElement, useContext, useEffect, useMemo, useState } from 'react';

import { Behandling } from '@navikt/fp-types';

export type FormDataType<T> = {
  formData: T;
  setFormData: (data: T) => void;
};

const FormDataContext = createContext<any>(null);

export const FormDataProvider = <T,>({
  children,
  behandling,
}: {
  children: ReactElement | null;
  behandling: Behandling;
}) => {
  const [formData, setFormData] = useState<T | undefined>();

  useEffect(() => {
    if (formData) {
      setFormData(undefined);
    }
  }, [behandling.uuid, behandling.versjon]);

  const value = useMemo(
    () => ({
      formData,
      setFormData,
    }),
    [formData, setFormData],
  );

  return <FormDataContext value={value}>{children}</FormDataContext>;
};

export const useFormData = <T,>() => {
  const context = useContext<FormDataType<T | undefined>>(FormDataContext);
  if (!context) {
    throw new Error('FormDataContext.Provider er ikke satt opp');
  }
  return context;
};
