import { createContext, type ReactElement, use, useCallback, useMemo, useState } from 'react';

const RequestPendingContext = createContext<{
  isRequestPending: boolean;
  setIsRequestPending: (isPending: boolean) => void;
} | null>(null);

const RequestPendingProvider = ({ children }: { children: ReactElement }) => {
  const [antallAktiveOperasjoner, setAntallAktiveOperasjoner] = useState(0);
  const setIsRequestPending = useCallback((isPending: boolean) => {
    setAntallAktiveOperasjoner(antall => antall + (isPending ? 1 : -1));
  }, []);
  const isRequestPending = antallAktiveOperasjoner > 0;

  const value = useMemo(
    () => ({
      isRequestPending,
      setIsRequestPending,
    }),
    [isRequestPending, setIsRequestPending],
  );

  return <RequestPendingContext value={value}>{children}</RequestPendingContext>;
};

const useRequestPendingContext = () => {
  const context = use(RequestPendingContext);
  if (!context) {
    throw new Error('useRequestPendingContext er avhengig av RequestPendingContext.Provider');
  }
  return context;
};

export { RequestPendingProvider, useRequestPendingContext };
