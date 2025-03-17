import { useIntl } from 'react-intl';

import { ExpandVerticalIcon, ShrinkIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleVisUtvidetBehandlingDetaljerPanel: () => void;
  visUtvidetBehandlingDetaljerPanel: boolean;
}

export const UtvidEllerMinskKnapp = ({
  toggleVisUtvidetBehandlingDetaljerPanel,
  visUtvidetBehandlingDetaljerPanel,
}: Props) => {
  const intl = useIntl();

  return (
    <Tooltip
      content={
        visUtvidetBehandlingDetaljerPanel
          ? intl.formatMessage({ id: 'BehandlingSupportIndex.Minsk' })
          : intl.formatMessage({ id: 'BehandlingSupportIndex.Utvid' })
      }
      placement="bottom"
    >
      <Button
        icon={
          visUtvidetBehandlingDetaljerPanel ? (
            <ShrinkIcon fontSize="1.4rem" aria-hidden />
          ) : (
            <ExpandVerticalIcon fontSize="1.4rem" aria-hidden />
          )
        }
        aria-label="Utvid behandling detaljer panel"
        variant="tertiary-neutral"
        size="xsmall"
        onClick={toggleVisUtvidetBehandlingDetaljerPanel}
      />
    </Tooltip>
  );
};
