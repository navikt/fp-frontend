import { useLayoutEffect, useRef } from 'react';

export const useSupportHeight = (enabled: boolean) => {
  const profileRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const support = supportRef.current;
    const profile = profileRef.current;
    if (!enabled || !support || !profile) {
      return;
    }

    let frame: number | undefined;
    const updateHeight = () => {
      frame = undefined;
      const top = Math.max(0, support.getBoundingClientRect().top);
      support.style.setProperty('--support-height', `${Math.max(0, window.innerHeight - top)}px`);
    };
    const scheduleUpdate = () => {
      frame ??= requestAnimationFrame(updateHeight);
    };

    updateHeight();
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(profile);
    observer.observe(support);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame !== undefined) {
        cancelAnimationFrame(frame);
      }
      support.style.removeProperty('--support-height');
    };
  }, [enabled]);

  return { profileRef, supportRef };
};
