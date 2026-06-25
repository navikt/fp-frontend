import { createContext, type ReactElement, use, useMemo, useState } from 'react';

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

  const behandlingKey = `${behandling.uuid}-${behandling.versjon}`;
  const [forrigeBehandlingKey, setForrigeBehandlingKey] = useState(behandlingKey);
  if (behandlingKey !== forrigeBehandlingKey) {
    setForrigeBehandlingKey(behandlingKey);
    if (mellomlagretFormData) {
      setMellomlagretFormData(undefined);
    }
  }

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
  const context = use(MellomlagretFormDataContext) as MellomlagretFormData<T | undefined> | null;
  if (!context) {
    throw new Error('MellomlagretFormDataContext er ikke satt opp');
  }
  return context;
};
