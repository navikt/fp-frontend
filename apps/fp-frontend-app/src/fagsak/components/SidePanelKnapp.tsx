import { useIntl } from 'react-intl';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
}

export const SidePanelKnapp = ({ toggleSideMeny, visSideMeny }: Props) => {
  const intl = useIntl();
  return (
    <Tooltip content={intl.formatMessage({ id: 'FagsakGrid.ApneSidemeny' })} placement="bottom">
      <Button
        icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
        aria-label={visSideMeny ? 'Skjul sidepanel' : 'Vis sidepanel'}
        variant="tertiary-neutral"
        size="small"
        onClick={toggleSideMeny}
        style={{ marginTop: '18px', backgroundColor: 'var(--ax-text-neutral)' }}
      />
    </Tooltip>
  );
};
