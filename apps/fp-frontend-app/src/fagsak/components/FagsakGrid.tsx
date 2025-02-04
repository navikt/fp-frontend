import React, { ReactNode } from 'react';
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
  return (
    <>
      {isSmallScreen && (
        <div className={styles.leftColumnContainer}>
          <div className={styles.leftColumnVisittContent}>{visittkortContent()}</div>
          {!visSideMeny && (
            <div className={styles.leftColumnSideMenyKnapp}>
              <SidePanelKnapp toggleSideMeny={toggleSideMeny} style={{ marginTop: '18px' }} />
            </div>
          )}
        </div>
      )}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          {isBigScreen && (
            <div className={styles.leftColumnContainer}>
              <div className={styles.leftColumnVisittContent}>{visittkortContent()}</div>
              {!visSideMeny && (
                <div className={styles.leftColumnSideMenyKnapp}>
                  <SidePanelKnapp toggleSideMeny={toggleSideMeny} style={{ marginTop: '18px' }} />
                </div>
              )}
            </div>
          )}
          {behandlingContent}
        </div>
          <div className={`${styles.rightColumn} ${visSideMeny ? styles.show : styles.hide}`}>
            <div>{profileAndNavigationContent}</div>
            <div>{supportContent}</div>
          </div>
      </div>
    </>
  );
};
