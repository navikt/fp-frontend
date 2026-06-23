import { useEffect, useRef } from 'react';

import {
  erSekvensStart,
  finnEnkelttastDefinisjon,
  finnSekvensDefinisjon,
  GLOBALE_SNARVEG_IDER,
} from './snarvegDefinisjoner';
import { useSnarvegerContext } from './SnarvegerContext';

/**
 * Global lyttar for tastatursnarvegar. Skal monterast éin gong, høgt i treet og innanfor Router.
 *
 * - Respekterer av/på-innstillinga (WCAG 2.1.4).
 * - Ignorerer tastetrykk medan fokus er i skrivefelt eller når modifikatortastar er nede.
 * - Handterer "G + tast"-sekvensar og enkelttast-snarvegar, og delegerer sjølve handlinga
 *   til handlarane som komponentane har registrert via {@link useRegistrerSnarveg}.
 */
export const useGlobalSnarveger = (): void => {
  const { dispatch, aktiv, snarveiModalÅpen } = useSnarvegerContext();

  const tilstandRef = useRef({ dispatch, aktiv, snarveiModalÅpen });
  useEffect(() => {
    tilstandRef.current = { dispatch, aktiv, snarveiModalÅpen };
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
      const { aktiv: erAktiv, snarveiModalÅpen: erSnarveiModalÅpen } = tilstandRef.current;

      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (erSkrivefelt(event.target)) {
        return;
      }

      if (!erSnarveiModalÅpen && harÅpenDialog()) {
        nullstillSekvens();
        return;
      }

      const tast = normaliserTast(event.key);
      const enkelttastDefinisjon = finnEnkelttastDefinisjon(tast);

      if (
        enkelttastDefinisjon?.id === GLOBALE_SNARVEG_IDER.HJELP &&
        tilstandRef.current.dispatch(enkelttastDefinisjon.id)
      ) {
        nullstillSekvens();
        event.preventDefault();
        return;
      }

      // Medan hjelpa er open lèt vi Aksel-modalen styre tastaturet (t.d. Escape).
      if (erSnarveiModalÅpen) {
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

      if (erSekvensStart(tast)) {
        sekvensPrefiksRef.current = tast;
        sekvensTimeoutRef.current = setTimeout(nullstillSekvens, SEKVENS_TIMEOUT_MS);
        return;
      }

      if (enkelttastDefinisjon?.gruppe === 'behandling' && tilstandRef.current.dispatch(enkelttastDefinisjon.id)) {
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

const erÅpenDialog = (element: Element): boolean => {
  if (element.tagName === 'DIALOG') {
    return element.hasAttribute('open');
  }
  if (!(element instanceof HTMLElement)) {
    return false;
  }
  if (element.hidden || element.getAttribute('aria-hidden') === 'true') {
    return false;
  }

  const style = globalThis.getComputedStyle(element);
  return style.display !== 'none' && style.visibility !== 'hidden';
};

const harÅpenDialog = (): boolean =>
  Array.from(globalThis.document.querySelectorAll('dialog, [role="dialog"], [aria-modal="true"]')).some(erÅpenDialog);
