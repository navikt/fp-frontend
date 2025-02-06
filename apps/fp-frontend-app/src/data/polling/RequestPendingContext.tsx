import { createContext, type ReactElement, useContext, useMemo, useState } from 'react';

const RequestPendingContext = createContext<{
  isRequestPending: boolean;
  setIsRequestPending: (isPending: boolean) => void;
} | null>(null);

const RequestPendingProvider = ({ children }: { children: ReactElement }) => {
  const [isRequestPending, setIsRequestPending] = useState(false);

  const value = useMemo(
    () => ({
      isRequestPending,
      setIsRequestPending,
    }),
    [isRequestPending, setIsRequestPending],
  );

  return <RequestPendingContext.Provider value={value}>{children}</RequestPendingContext.Provider>;
};

const useRequestPendingContext = () => {
  const context = useContext(RequestPendingContext);
  if (!context) {
    throw new Error('useRequestPendingContext er avhengig av RequestPendingContext.Provider');
  }
  return context;
};

export { RequestPendingProvider, useRequestPendingContext };
