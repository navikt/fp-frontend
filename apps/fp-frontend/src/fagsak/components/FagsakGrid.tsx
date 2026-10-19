import { type ReactNode, useLayoutEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import { SidePanelKnapp } from './SidePanelKnapp';

import styles from './fagsakGrid.module.css';

interface Props {
  behandlingContent: ReactNode;
  profileAndNavigationContent: ReactNode;
  supportContent: ReactNode;
  visittkortContent?: ReactNode;
  visSideMeny: boolean;
  toggleSideMeny: () => void;
}

/**
 * FagsakGrid
 *
 * Presentasjonskomponent. Har ansvar for å sette opp applikasjonens hovedgrid.
 */
export const FagsakGrid = ({
  behandlingContent,
  profileAndNavigationContent,
  supportContent,
  visittkortContent,
  visSideMeny,
  toggleSideMeny,
}: Props) => {
  const isTwoColumns = useMediaQuery({ minWidth: 1409 });
  const isWrappedUnder = useMediaQuery({ maxWidth: 1408 });
  const profileRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const support = supportRef.current;
    const profile = profileRef.current;
    if (!isTwoColumns || !visSideMeny || !support || !profile) {
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
  }, [isTwoColumns, visSideMeny]);

  return (
    <>
      {isWrappedUnder && (
        <VisittkortMedKnapp
          visittkortContent={visittkortContent}
          visSideMeny={visSideMeny}
          toggleSideMeny={toggleSideMeny}
        />
      )}
      <div className={styles['gridContainer']}>
        <div className={styles['leftColumn']}>
          {isTwoColumns && (
            <VisittkortMedKnapp
              visittkortContent={visittkortContent}
              visSideMeny={visSideMeny}
              toggleSideMeny={toggleSideMeny}
            />
          )}
          {behandlingContent}
        </div>
        <div className={visSideMeny || isWrappedUnder ? styles['rightColumn'] : styles['rightColumnHidden']}>
          <div ref={profileRef}>{profileAndNavigationContent}</div>
          <div ref={supportRef} className={styles['support']}>
            {supportContent}
          </div>
        </div>
      </div>
    </>
  );
};

const VisittkortMedKnapp = ({
  visittkortContent,
  visSideMeny,
  toggleSideMeny,
}: {
  visittkortContent?: ReactNode;
  visSideMeny: boolean;
  toggleSideMeny: () => void;
}) => {
  const isWrappedUnder = useMediaQuery({ maxWidth: 1408 });
  if (visSideMeny || isWrappedUnder) {
    return visittkortContent;
  }
  return (
    <>
      <span className={styles['floatRight']}>
        <SidePanelKnapp toggleSideMeny={toggleSideMeny} visSideMeny={visSideMeny} />
      </span>
      {visittkortContent}
    </>
  );
};
