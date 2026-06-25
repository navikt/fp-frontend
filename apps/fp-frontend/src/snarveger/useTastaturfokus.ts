import { useCallback, useEffect, useRef } from 'react';

import { nesteFokusIndex } from './tastaturnavigasjon';

/**
 * Samlar tastaturfokus for eksisterande menyar/lister: finn fokuserbare element
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

/**
 * Flyttar fokus til panelinnhaldet når det valde panelet endrar seg etter ein snarveg.
 *
 * Brukast av tastatursnarvegar som byter panel (fakta, prosess, støttepanel): rett etter
 * byttet hamnar fokus på sjølve panel-containeren, slik at neste Tab går rett inn i første
 * skjemafelt i det nye panelet. Kall den returnerte funksjonen med målpanelet rett før du
 * byter – fokuseringa skjer fyrst når {@link aktivtPanel} har endra seg og DOM-en er
 * oppdatert, slik at vi ikkje treng å vente på asynkron lasting av innhaldet.
 *
 * Fokus blir berre planlagt når målpanelet skil seg frå det aktive panelet. Då unngår vi at
 * eit «armert» fokus blir liggjande når byttet er ein no-op (t.d. snarveg til det panelet
 * som alt er ope, eller ein meny med berre eitt panel) og seinare stel fokus ved ei
 * urelatert panelendring.
 */
export const useFokuserVedPanelbyte = (
  aktivtPanel: string | undefined,
  fokuser: () => void,
): ((målPanel: string | undefined) => void) => {
  const skalFokusereRef = useRef(false);
  const fokuserRef = useRef(fokuser);
  const aktivtPanelRef = useRef(aktivtPanel);

  useEffect(() => {
    fokuserRef.current = fokuser;
    aktivtPanelRef.current = aktivtPanel;
  });

  const planleggFokus = useCallback((målPanel: string | undefined) => {
    if (målPanel !== aktivtPanelRef.current) {
      skalFokusereRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (skalFokusereRef.current) {
      skalFokusereRef.current = false;
      fokuserRef.current();
    }
  }, [aktivtPanel]);

  return planleggFokus;
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
