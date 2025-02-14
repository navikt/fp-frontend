import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
}

export const SidePanelKnapp = ({ toggleSideMeny, visSideMeny }: Props) => {
  return (
    <Tooltip content="Åpne sidemeny" placement="bottom">
      <Button
        icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
        aria-label={visSideMeny ? 'Skjul sidepanel' : 'Vis sidepanel'}
        variant="tertiary-neutral"
        size="small"
        onClick={toggleSideMeny}
        style={{ marginTop: '18px', backgroundColor: 'white' }}
      />
    </Tooltip>
  );
};
