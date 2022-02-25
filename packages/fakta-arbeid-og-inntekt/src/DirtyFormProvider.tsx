import React, {
  createContext, FunctionComponent, ReactNode, useState, useContext, useEffect, useMemo,
} from 'react';

export const DirtyFormContext = createContext<{
  isDirty: boolean,
  setDirty: React.Dispatch<React.SetStateAction<boolean>>,
}>({ isDirty: false, setDirty: () => undefined });

interface OwnProps {
  children: ReactNode;
}

/**
 * Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
 * mange steder i applikasjonen.
 */
export const DirtyFormProvider: FunctionComponent<OwnProps> = ({
  children,
}): JSX.Element => {
  const [isDirty, setDirty] = useState(false);
  const value = useMemo(() => ({ isDirty, setDirty }), [isDirty, setDirty]);

  return (
    <DirtyFormContext.Provider value={value}>
      {children}
    </DirtyFormContext.Provider>
  );
};

export const useSetDirtyForm = (isDirty: boolean): void => {
  const context = useContext(DirtyFormContext);
  useEffect(() => {
    context.setDirty(isDirty);
  }, [isDirty]);
};

export const useIsFormDirty = (): boolean => useContext(DirtyFormContext).isDirty;
