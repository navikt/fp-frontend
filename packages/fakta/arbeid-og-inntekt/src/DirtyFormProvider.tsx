import React, { createContext, type PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

const DirtyFormContext = createContext<{
  isDirty: boolean;
  setDirty: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isDirty: false, setDirty: () => undefined });

/**
 * Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
 * mange steder i applikasjonen.
 */
export const DirtyFormProvider = ({ children }: PropsWithChildren) => {
  const [isDirty, setIsDirty] = useState(false);
  const value = useMemo(() => ({ isDirty, setDirty: setIsDirty }), [isDirty, setIsDirty]);

  return <DirtyFormContext.Provider value={value}>{children}</DirtyFormContext.Provider>;
};

export const useSetDirtyForm = (isDirty: boolean): void => {
  const context = useContext(DirtyFormContext);
  useEffect(() => {
    context.setDirty(isDirty);
  }, [isDirty]);
};

export const useIsFormDirty = (): boolean => useContext(DirtyFormContext).isDirty;
