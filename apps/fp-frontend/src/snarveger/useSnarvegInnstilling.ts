import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'fp-frontend-snarveger-aktiv';

const lesInnstilling = (): boolean => {
  try {
    // Default på: berre slått av dersom brukaren eksplisitt har valt det.
    return globalThis.localStorage?.getItem(STORAGE_KEY) !== 'false';
  } catch {
    return true;
  }
};

/**
 * Av/på-innstilling for tastatursnarvegar, lagra i localStorage.
 *
 * WCAG 2.1.4 (Character Key Shortcuts) krev at enkelttast-snarvegar kan slåast av.
 */
export const useSnarvegInnstilling = (): { aktiv: boolean; settAktiv: (verdi: boolean) => void } => {
  const [aktiv, setAktivState] = useState<boolean>(lesInnstilling);

  const settAktiv = useCallback((verdi: boolean) => {
    setAktivState(verdi);
    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, String(verdi));
    } catch {
      // Ignorer dersom localStorage ikkje er tilgjengeleg.
    }
  }, []);

  useEffect(() => {
    const handterEndring = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setAktivState(lesInnstilling());
      }
    };
    globalThis.addEventListener('storage', handterEndring);
    return () => globalThis.removeEventListener('storage', handterEndring);
  }, []);

  return { aktiv, settAktiv };
};
