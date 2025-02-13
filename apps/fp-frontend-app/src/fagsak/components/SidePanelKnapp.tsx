import React from 'react';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
  style?: React.CSSProperties;
}

export const SidePanelKnapp = ({ toggleSideMeny, visSideMeny }: Props) => {
  return (
    <Button
      icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
      aria-label={visSideMeny ? 'Skjul sidepanel' : 'Vis sidepanel'}
      variant="tertiary-neutral"
      size="small"
      onClick={toggleSideMeny}
      style={{ marginTop: '18px', backgroundColor: 'white' }}
    />
  );
};
