import { type RefObject, useLayoutEffect } from 'react';

export const useAvailableMenuHeight = (
  anchorEl: HTMLElement | null,
  menuRef: RefObject<HTMLDivElement | null>,
  open: boolean,
) => {
  useLayoutEffect(() => {
    if (!open || !anchorEl) {
      return;
    }
    const oppdaterHøyde = () => {
      const { top, bottom } = anchorEl.getBoundingClientRect();
      // Reserver 4 px mellom felt og meny, og 12 px til vinduskanten.
      const tilgjengeligHøyde = Math.max(0, Math.max(top, window.innerHeight - bottom) - 16);
      menuRef.current?.style.setProperty('--card-select-available-height', `${tilgjengeligHøyde}px`);
    };
    oppdaterHøyde();
    const observer = typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(oppdaterHøyde);
    observer?.observe(anchorEl);
    window.addEventListener('resize', oppdaterHøyde);
    window.addEventListener('scroll', oppdaterHøyde, true);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', oppdaterHøyde);
      window.removeEventListener('scroll', oppdaterHøyde, true);
    };
  }, [anchorEl, menuRef, open]);
};
