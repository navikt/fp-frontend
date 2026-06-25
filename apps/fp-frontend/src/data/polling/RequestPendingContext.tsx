import { createContext, type ReactElement, use, useMemo, useState } from 'react';

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
