import React from 'react';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

import styles from './fagsakGrid.module.css';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
  style?: React.CSSProperties;
}

export const SidePanelKnapp = ({ toggleSideMeny, visSideMeny, style }: Props) => {
  return (
    <div className={styles.sidePanelKnapp}>
      <Button
        icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
        aria-label={visSideMeny ? 'Skjul sidepanel' : 'Vis sidepanel'}
        variant="tertiary-neutral"
        size="small"
        onClick={toggleSideMeny}
        style={style}
      />
    </div>
  );
};
