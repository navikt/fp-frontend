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
    <div className={styles['gridContainer']}>
      <div className={styles['visittkort']}>
        <VisittkortMedKnapp
          visittkortContent={visittkortContent}
          visSideMeny={visSideMeny}
          toggleSideMeny={toggleSideMeny}
        />
      </div>
      <div className={styles['leftColumn']}>{behandlingContent}</div>
      <div className={styles['rightColumn']} data-hide={!visSideMeny && !isWrappedUnder}>
        <div ref={profileRef}>{profileAndNavigationContent}</div>
        <div ref={supportRef} className={styles['support']}>
          {supportContent}
        </div>
      </div>
    </div>
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
    <div className={styles['visittkortWithButton']}>
      <div className={styles['visittkortContent']}>{visittkortContent}</div>
      <SidePanelKnapp toggleSideMeny={toggleSideMeny} visSideMeny={visSideMeny} />
    </div>
  );
};
