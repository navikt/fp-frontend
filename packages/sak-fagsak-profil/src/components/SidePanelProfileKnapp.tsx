import { SidebarRightIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

interface Props {
  toggleSideMeny: () => void;
  visSideMeny: boolean;
}

export const SidePanelProfileKnapp = ({ toggleSideMeny, visSideMeny }: Props) => {
  return (
    <Button
      icon={<SidebarRightIcon fontSize="1.7rem" aria-hidden />}
      aria-label={visSideMeny ? 'Skjul profil sidepanel' : 'Vis profil sidepanel'}
      variant="tertiary-neutral"
      size="small"
      onClick={toggleSideMeny}
    />
  );
};
