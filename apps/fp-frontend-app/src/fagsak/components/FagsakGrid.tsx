import React, { FunctionComponent, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './fagsakGrid.module.css';

interface OwnProps {
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
const FagsakGrid: FunctionComponent<OwnProps> = ({
  behandlingContent,
  profileAndNavigationContent,
  supportContent,
  visittkortContent,
}) => {
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

export default FagsakGrid;
