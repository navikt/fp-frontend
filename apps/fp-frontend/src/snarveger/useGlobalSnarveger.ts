import { useEffect, useRef } from 'react';

import { erSekvensStart, finnEnkelttastDefinisjon, finnSekvensDefinisjon } from './snarvegDefinisjoner';
import { useSnarvegerContext } from './SnarvegerContext';

const SEKVENS_TIMEOUT_MS = 1500;

const erSkrivefelt = (element: EventTarget | null): boolean => {
  if (!(element instanceof HTMLElement)) {
    return false;
  }
  if (element.isContentEditable) {
    return true;
  }
  const tag = element.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
    return true;
  }
  return element.getAttribute('role') === 'textbox';
};

const normaliserTast = (key: string): string => (key.length === 1 ? key.toUpperCase() : key);

const harAapenDialog = (): boolean =>
  globalThis.document.querySelector('dialog[open], [role="dialog"], [aria-modal="true"]') !== null;

/**
 * Global lyttar for tastatursnarvegar. Skal monterast éin gong, høgt i treet og innanfor Router.
 *
 * - Respekterer av/på-innstillinga (WCAG 2.1.4).
 * - Ignorerer tastetrykk medan fokus er i skrivefelt eller når modifikatortastar er nede.
 * - Handterer "G + tast"-sekvensar og enkelttast-snarvegar, og delegerer sjølve handlinga
 *   til handlarane som komponentane har registrert via {@link useRegistrerSnarveg}.
 */
export const useGlobalSnarveger = (): void => {
  const { dispatch, settHjelpAapen, aktiv, hjelpAapen } = useSnarvegerContext();

  const tilstandRef = useRef({ dispatch, settHjelpAapen, aktiv, hjelpAapen });
  useEffect(() => {
    tilstandRef.current = { dispatch, settHjelpAapen, aktiv, hjelpAapen };
  });

  const sekvensPrefiksRef = useRef<string | undefined>(undefined);
  const sekvensTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const nullstillSekvens = () => {
      sekvensPrefiksRef.current = undefined;
      if (sekvensTimeoutRef.current) {
        clearTimeout(sekvensTimeoutRef.current);
        sekvensTimeoutRef.current = undefined;
      }
    };

    const handterTast = (event: KeyboardEvent) => {
      const { aktiv: erAktiv, hjelpAapen: erHjelpAapen } = tilstandRef.current;

      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (erSkrivefelt(event.target)) {
        return;
      }

      if (!erHjelpAapen && harAapenDialog()) {
        nullstillSekvens();
        return;
      }

      if (event.key === '?') {
        tilstandRef.current.settHjelpAapen(!erHjelpAapen);
        nullstillSekvens();
        event.preventDefault();
        return;
      }

      // Medan hjelpa er open lèt vi Aksel-modalen styre tastaturet (t.d. Escape).
      if (erHjelpAapen) {
        return;
      }

      if (!erAktiv) {
        return;
      }

      if (sekvensPrefiksRef.current) {
        const def = finnSekvensDefinisjon(sekvensPrefiksRef.current, normaliserTast(event.key));
        nullstillSekvens();
        if (def && tilstandRef.current.dispatch(def.id)) {
          event.preventDefault();
        }
        return;
      }

      const tast = normaliserTast(event.key);
      if (erSekvensStart(tast)) {
        sekvensPrefiksRef.current = tast;
        sekvensTimeoutRef.current = setTimeout(nullstillSekvens, SEKVENS_TIMEOUT_MS);
        return;
      }

      const def = finnEnkelttastDefinisjon(tast);
      if (def && def.gruppe === 'behandling' && tilstandRef.current.dispatch(def.id)) {
        event.preventDefault();
      }
    };

    globalThis.addEventListener('keydown', handterTast);
    return () => {
      globalThis.removeEventListener('keydown', handterTast);
      nullstillSekvens();
    };
  }, []);
};
