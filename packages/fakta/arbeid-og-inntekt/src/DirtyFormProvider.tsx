import { createContext, type PropsWithChildren, use, useCallback, useEffect, useId, useMemo, useState } from 'react';

const DirtyFormContext = createContext<{
  isDirty: boolean;
  setDirty: (skjemaId: string, isDirty: boolean) => void;
}>({ isDirty: false, setDirty: () => {} });

export const DirtyFormProvider = ({ children }: PropsWithChildren) => {
  const [dirtySkjemaIder, setDirtySkjemaIder] = useState<ReadonlySet<string>>(() => new Set());

  const setDirty = useCallback((skjemaId: string, isDirty: boolean) => {
    setDirtySkjemaIder(forrige => {
      if (forrige.has(skjemaId) === isDirty) {
        return forrige;
      }
      const neste = new Set(forrige);
      if (isDirty) {
        neste.add(skjemaId);
      } else {
        neste.delete(skjemaId);
      }
      return neste;
    });
  }, []);

  const isDirty = dirtySkjemaIder.size > 0;
  const value = useMemo(() => ({ isDirty, setDirty }), [isDirty, setDirty]);

  return <DirtyFormContext value={value}>{children}</DirtyFormContext>;
};

export const useSetDirtyForm = (isDirty: boolean): void => {
  const { setDirty } = use(DirtyFormContext);
  const skjemaId = useId();
  useEffect(() => {
    setDirty(skjemaId, isDirty);
    return () => setDirty(skjemaId, false);
  }, [skjemaId, isDirty, setDirty]);
};

export const useIsFormDirty = (): boolean => use(DirtyFormContext).isDirty;
