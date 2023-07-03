import React, { FunctionComponent, ReactNode } from 'react';

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
}) => (
  <div className={styles.gridContainer}>
    <div className={styles.leftColumn}>
      {visittkortContent()}
      {behandlingContent}
    </div>
    <div className={styles.rightColumn}>
      <div>{profileAndNavigationContent}</div>
      <div>{supportContent}</div>
    </div>
  </div>
);

export default FagsakGrid;
