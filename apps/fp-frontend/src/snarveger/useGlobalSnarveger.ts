import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { utbetalingsdataIs15RoutePath } from '../app/paths';
import { finnEnkelttastDefinisjon, finnSekvensDefinisjon, GLOBALE_SNARVEG_IDER } from './snarvegDefinisjoner';
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

/**
 * Global lyttar for tastatursnarvegar. Skal monterast éin gong, høgt i treet og innanfor Router.
 *
 * - Respekterer av/på-innstillinga (WCAG 2.1.4).
 * - Ignorerer tastetrykk medan fokus er i skrivefelt eller når modifikatortastar er nede.
 * - Handterer «G + tast»-sekvensar og enkelttast-snarvegar via det registrerte handler-registeret.
 */
export const useGlobalSnarveger = (): void => {
  const navigate = useNavigate();
  const { dispatch, settHjelpAapen, aktiv, hjelpAapen } = useSnarvegerContext();

  const tilstand = useRef({ dispatch, settHjelpAapen, aktiv, hjelpAapen, navigate });
  useEffect(() => {
    tilstand.current = { dispatch, settHjelpAapen, aktiv, hjelpAapen, navigate };
  });

  const ventarPaaSekvens = useRef(false);
  const sekvensTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const nullstillSekvens = () => {
      ventarPaaSekvens.current = false;
      if (sekvensTimeout.current) {
        clearTimeout(sekvensTimeout.current);
        sekvensTimeout.current = undefined;
      }
    };

    const utforSekvenshandling = (id: string): boolean => {
      if (id === GLOBALE_SNARVEG_IDER.GAA_OPPGAVELISTE) {
        void tilstand.current.navigate('/');
        return true;
      }
      if (id === GLOBALE_SNARVEG_IDER.GAA_INFOTRYGD) {
        void tilstand.current.navigate(utbetalingsdataIs15RoutePath);
        return true;
      }
      return false;
    };

    const handterTast = (event: KeyboardEvent) => {
      const { aktiv: erAktiv, hjelpAapen: erHjelpAapen } = tilstand.current;

      if (!erAktiv || event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (erSkrivefelt(event.target)) {
        return;
      }

      if (event.key === '?') {
        tilstand.current.settHjelpAapen(!erHjelpAapen);
        nullstillSekvens();
        event.preventDefault();
        return;
      }

      // Medan hjelpa er open lèt vi Aksel-modalen styre tastaturet (t.d. Escape).
      if (erHjelpAapen) {
        return;
      }

      if (ventarPaaSekvens.current) {
        const def = finnSekvensDefinisjon('G', normaliserTast(event.key));
        nullstillSekvens();
        if (def && (utforSekvenshandling(def.id) || tilstand.current.dispatch(def.id))) {
          event.preventDefault();
        }
        return;
      }

      if (event.key.toUpperCase() === 'G') {
        ventarPaaSekvens.current = true;
        sekvensTimeout.current = setTimeout(nullstillSekvens, SEKVENS_TIMEOUT_MS);
        return;
      }

      const def = finnEnkelttastDefinisjon(normaliserTast(event.key));
      if (def && def.gruppe === 'behandling' && tilstand.current.dispatch(def.id)) {
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
