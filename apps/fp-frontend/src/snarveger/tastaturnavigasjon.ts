const wrapIndex = (index: number, antall: number): number => ((index % antall) + antall) % antall;

/**
 * Reknar ut kva element som skal fokuserast i ei liste ut frå ein piltast-trykk.
 * Brukast til roving-fokus i menyar/lister (pil opp/ned syklar, Home/End hoppar til endane).
 *
 * @returns ny indeks, eller undefined dersom tasten ikkje er ein navigasjonstast (eller lista er tom).
 */
export const nesteFokusIndex = (key: string, aktivIndex: number, antall: number): number | undefined => {
  if (antall <= 0) {
    return undefined;
  }
  switch (key) {
    case 'ArrowDown':
      return wrapIndex(aktivIndex + 1, antall);
    case 'ArrowUp':
      return wrapIndex(aktivIndex - 1, antall);
    case 'Home':
      return 0;
    case 'End':
      return antall - 1;
    default:
      return undefined;
  }
};
