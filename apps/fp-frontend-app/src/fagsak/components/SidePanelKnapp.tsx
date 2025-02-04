import React from 'react';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

import styles from './fagsakGrid.module.css';

interface Props {
  toggleSideMeny: () => void;
  style?: React.CSSProperties;
}

export const SidePanelKnapp = ({ toggleSideMeny, style }: Props) => {
  return (
    <div className={styles.sidePanelKnapp}>
       <Button
         icon={<SidebarRightIcon title="Toogle visning av sidepanel" fontSize="1.7rem" aria-hidden />}
         title="vis/skjul sidepanel"
         variant="tertiary-neutral"
         size="small"
         onClick={toggleSideMeny}
         style={style}
       />
    </div>
  );
};
