import React, { createContext, type PropsWithChildren, use, useEffect, useMemo, useState } from 'react';

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

  return <DirtyFormContext value={value}>{children}</DirtyFormContext>;
};

export const useSetDirtyForm = (isDirty: boolean): void => {
  const context = use(DirtyFormContext);
  useEffect(() => {
    context.setDirty(isDirty);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- skal kun oppdatere dirty-state når isDirty-arg endrar seg; context er stabil
  }, [isDirty]);
};

export const useIsFormDirty = (): boolean => use(DirtyFormContext).isDirty;
