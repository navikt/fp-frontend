import React from 'react';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  style?: React.CSSProperties;
}

export const SidePanelKnapp = ({ toggleSideMeny, style }: Props) => {
  return (
    <div>
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
