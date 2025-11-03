import { createContext, type ReactElement, useContext, useEffect, useMemo, useState } from 'react';

import type { Behandling } from '@navikt/fp-types';

type MellomlagretFormData<T> = {
  mellomlagretFormData: T;
  setMellomlagretFormData: (data: T) => void;
};

const MellomlagretFormDataContext = createContext<unknown>(null);

export const MellomlagretFormDataProvider = <T,>({
  children,
  behandling,
}: {
  children: ReactElement | null;
  behandling: Behandling;
}) => {
  const [mellomlagretFormData, setMellomlagretFormData] = useState<T | undefined>();

  useEffect(() => {
    if (mellomlagretFormData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- OK, skjer kun ved endring av behandling
      setMellomlagretFormData(undefined);
    }
  }, [behandling.uuid, behandling.versjon]);

  const value = useMemo(
    () => ({
      mellomlagretFormData,
      setMellomlagretFormData,
    }),
    [mellomlagretFormData, setMellomlagretFormData],
  );

  return <MellomlagretFormDataContext value={value}>{children}</MellomlagretFormDataContext>;
};

export const useMellomlagretFormData = <T,>() => {
  const context = useContext(MellomlagretFormDataContext) as MellomlagretFormData<T | undefined> | null;
  if (!context) {
    throw new Error('MellomlagretFormDataContext er ikke satt opp');
  }
  return context;
};
