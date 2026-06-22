import { useCallback, useEffect, useRef } from 'react';

import { nesteFokusIndex } from './tastaturnavigasjon';

/**
 * Samlar roving-fokus for eksisterande menyar/lister: finn fokuserbare element
 * inni ein container, flyttar fokus med piltastar/Home/End og kan lukke med Escape.
 */
export const useTastaturfokus = <TContainer extends HTMLElement, TElement extends HTMLElement>({
  selector,
  scrollVedFokus = false,
  onEscape,
  lyttPåContainer = false,
}: TastaturfokusOptions) => {
  const containerRef = useRef<TContainer>(null);

  const hentElementer = useCallback(
    (): TElement[] => Array.from(containerRef.current?.querySelectorAll<TElement>(selector) ?? []),
    [selector],
  );

  const fokuserElement = useCallback(
    (index: number) => {
      const element = hentElementer()[index];
      if (element) {
        if (scrollVedFokus) {
          element.scrollIntoView({ block: 'nearest' });
        }
        element.focus();
      }
    },
    [hentElementer, scrollVedFokus],
  );

  const håndterTast = useCallback(
    (event: Tastaturhendelse) => {
      if (event.key === 'Escape' && onEscape) {
        onEscape();
        return;
      }

      const elementer = hentElementer();
      const aktivIndex = elementer.indexOf(document.activeElement as TElement);
      const nyIndex = nesteFokusIndex(event.key, aktivIndex, elementer.length);
      if (nyIndex !== undefined) {
        event.preventDefault();
        fokuserElement(nyIndex);
      }
    },
    [fokuserElement, hentElementer, onEscape],
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!lyttPåContainer || !element) {
      return undefined;
    }

    element.addEventListener('keydown', håndterTast);
    return () => element.removeEventListener('keydown', håndterTast);
  }, [håndterTast, lyttPåContainer]);

  return { containerRef, hentElementer, fokuserElement, håndterTast };
};

export const useFokusNårKlar = (kanFokusere: boolean, fokuser: () => void): (() => void) => {
  const skalFokusereRef = useRef(false);

  const fokuserNårKlar = useCallback(() => {
    skalFokusereRef.current = true;
  }, []);

  useEffect(() => {
    if (kanFokusere && skalFokusereRef.current) {
      skalFokusereRef.current = false;
      fokuser();
    }
  }, [fokuser, kanFokusere]);

  return fokuserNårKlar;
};

interface Tastaturhendelse {
  key: string;
  preventDefault: () => void;
}

interface TastaturfokusOptions {
  selector: string;
  scrollVedFokus?: boolean;
  onEscape?: () => void;
  lyttPåContainer?: boolean;
}
