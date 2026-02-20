import { useIntl } from 'react-intl';

import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
}

export const SidePanelProfileKnapp = ({ toggleSideMeny, visSideMeny }: Props) => {
  const intl = useIntl();
  return (
    <Tooltip content={intl.formatMessage({ id: 'FagsakProfile.SkjulSidemeny' })} placement="bottom">
      <Button
        data-color="neutral"
        icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
        aria-label={visSideMeny ? 'Skjul profil sidepanel' : 'Vis profil sidepanel'}
        variant="tertiary"
        size="small"
        onClick={toggleSideMeny}
      />
    </Tooltip>
  );
};
