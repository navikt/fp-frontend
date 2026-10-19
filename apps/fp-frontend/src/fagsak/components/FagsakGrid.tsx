import { type ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import { SidePanelKnapp } from './SidePanelKnapp';
import { useSupportHeight } from './useSupportHeight';

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
  const { profileRef, supportRef } = useSupportHeight(isTwoColumns && visSideMeny);

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
