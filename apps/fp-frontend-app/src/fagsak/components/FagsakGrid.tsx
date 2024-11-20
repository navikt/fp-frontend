import React, { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './fagsakGrid.module.css';

interface Props {
  behandlingContent: ReactNode;
  profileAndNavigationContent: ReactNode;
  supportContent: ReactNode;
  visittkortContent: () => ReactNode;
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
}: Props) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1701 });
  const isBigScreen = useMediaQuery({ minWidth: 1702 });
  return (
    <>
      {isSmallScreen && visittkortContent()}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          {isBigScreen && visittkortContent()}
          {behandlingContent}
        </div>
        <div className={styles.rightColumn}>
          <div>{profileAndNavigationContent}</div>
          <div>{supportContent}</div>
        </div>
      </div>
    </>
  );
};
