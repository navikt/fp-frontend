import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { GLOBALE_SNARVEG_IDER } from './snarvegDefinisjoner';
import { useSnarvegInnstilling } from './useSnarvegInnstilling';

interface SnarvegerContextValue {
  /** Registrer ein handler for ein snarveg-id. Returnerer ein opprydjingsfunksjon. */
  registrer: (id: string, handler: () => void) => () => void;
  /** Køyr handleren som er registrert for id-en, om nokon. Returnerer true om noko vart køyrt. */
  dispatch: (id: string) => boolean;
  hjelpÅpen: boolean;
  settHjelpÅpen: (åpen: boolean) => void;
  aktiv: boolean;
  settAktiv: (verdi: boolean) => void;
}

const SnarvegerContext = createContext<SnarvegerContextValue | undefined>(undefined);

export const SnarvegerProvider = ({ children }: { children: ReactNode }) => {
  const handlereRef = useRef(new Map<string, () => void>());
  const [hjelpÅpen, setHjelpÅpen] = useState(false);
  const { aktiv, settAktiv } = useSnarvegInnstilling();
  const toggleHjelp = useCallback(() => {
    setHjelpÅpen(prev => !prev);
  }, []);

  const registrer = useCallback((id: string, handler: () => void) => {
    handlereRef.current.set(id, handler);
    return () => {
      if (handlereRef.current.get(id) === handler) {
        handlereRef.current.delete(id);
      }
    };
  }, []);

  const dispatch = useCallback((id: string) => {
    const handler = handlereRef.current.get(id);
    if (handler) {
      handler();
      return true;
    }
    return false;
  }, []);

  useEffect(() => registrer(GLOBALE_SNARVEG_IDER.HJELP, toggleHjelp), [registrer, toggleHjelp]);

  const value = useMemo<SnarvegerContextValue>(
    () => ({ registrer, dispatch, hjelpÅpen, settHjelpÅpen: setHjelpÅpen, aktiv, settAktiv }),
    [registrer, dispatch, hjelpÅpen, aktiv, settAktiv],
  );

  return <SnarvegerContext.Provider value={value}>{children}</SnarvegerContext.Provider>;
};

export const useSnarvegerContext = (): SnarvegerContextValue => {
  const context = useContext(SnarvegerContext);
  if (context === undefined) {
    throw new Error('useSnarvegerContext må brukast innanfor ein SnarvegerProvider');
  }
  return context;
};

/**
 * Som useSnarvegerContext, men returnerer undefined i staden for å kaste når det ikkje
 * finst nokon provider (t.d. i isolerte stories/tester).
 */
export const useSnarvegerContextValgfri = (): SnarvegerContextValue | undefined => useContext(SnarvegerContext);

/**
 * Registrerer ein handler for ein kontekst-snarveg så lenge komponenten er montert.
 *
 * Komponentar som eig ein handling (t.d. støttepanel-byte) kallar denne for å kople
 * seg på snarvegen utan å kjenne til tastane.
 */
export const useRegistrerSnarveg = (id: string, handler: () => void, aktivert = true): void => {
  const registrer = useContext(SnarvegerContext)?.registrer;
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    // Utan provider (t.d. i isolerte stories/tester) er snarvegen ein no-op.
    if (!registrer || !aktivert) {
      return undefined;
    }
    return registrer(id, () => handlerRef.current());
  }, [id, aktivert, registrer]);
};
