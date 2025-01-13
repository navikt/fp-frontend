import React, { createContext, ReactElement, useContext, useState } from 'react';

const RequestPendingContext = createContext<{
  isRequestPending: boolean;
  setIsRequestPending: (isPending: boolean) => void;
} | null>(null);

const RequestPendingProvider = ({ children }: { children: ReactElement }) => {
  const [isRequestPending, setIsRequestPending] = useState(false);

  return (
    <RequestPendingContext.Provider value={{ isRequestPending, setIsRequestPending }}>
      {children}
    </RequestPendingContext.Provider>
  );
};

const useRequestPendingContext = () => {
  const context = useContext(RequestPendingContext);
  if (!context) {
    throw new Error('useRequestPendingContext er avhengig av RequestPendingContext.Provider');
  }
  return context;
};

export { RequestPendingProvider, useRequestPendingContext };
