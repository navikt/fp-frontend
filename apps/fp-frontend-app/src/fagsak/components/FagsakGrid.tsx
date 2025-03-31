import type { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import { SidePanelKnapp } from './SidePanelKnapp';

import styles from './fagsakGrid.module.css';

interface Props {
  behandlingContent: ReactNode;
  profileAndNavigationContent: ReactNode;
  supportContent: ReactNode;
  visittkortContent: () => ReactNode;
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
  const isSmallScreen = useMediaQuery({ maxWidth: 1701 });
  const isBigScreen = useMediaQuery({ minWidth: 1702 });
  const isWrappedUnder = useMediaQuery({ maxWidth: 1408 });
  return (
    <>
      {isSmallScreen && (
        <VisittkortMedKnapp
          visittkortContent={visittkortContent}
          visSideMeny={visSideMeny}
          toggleSideMeny={toggleSideMeny}
        />
      )}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          {isBigScreen && (
            <VisittkortMedKnapp
              visittkortContent={visittkortContent}
              visSideMeny={visSideMeny}
              toggleSideMeny={toggleSideMeny}
            />
          )}
          {behandlingContent}
        </div>
        <div className={visSideMeny || isWrappedUnder ? styles.rightColumn : styles.rightColumnHidden}>
          <div>{profileAndNavigationContent}</div>
          <div>{supportContent}</div>
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
  visittkortContent: () => ReactNode;
  visSideMeny: boolean;
  toggleSideMeny: () => void;
}) => {
  const isWrappedUnder = useMediaQuery({ maxWidth: 1408 });
  if (visSideMeny || isWrappedUnder) {
    return visittkortContent();
  }
  return (
    <>
      <span className={styles.floatRight}>
        <SidePanelKnapp toggleSideMeny={toggleSideMeny} visSideMeny={visSideMeny} />
      </span>
      {visittkortContent()}
    </>
  );
};
