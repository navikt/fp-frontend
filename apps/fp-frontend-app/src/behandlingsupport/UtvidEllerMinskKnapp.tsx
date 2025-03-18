import { useIntl } from 'react-intl';

import { ExpandVerticalIcon, ShrinkIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleVisUtvidetBehandlingDetaljer: () => void;
  visUtvidetBehandlingDetaljer: boolean;
}

export const UtvidEllerMinskKnapp = ({ toggleVisUtvidetBehandlingDetaljer, visUtvidetBehandlingDetaljer }: Props) => {
  const intl = useIntl();

  return (
    <Tooltip
      content={
        visUtvidetBehandlingDetaljer
          ? intl.formatMessage({ id: 'BehandlingSupportIndex.Minsk' })
          : intl.formatMessage({ id: 'BehandlingSupportIndex.Utvid' })
      }
      placement="bottom"
    >
      <Button
        icon={
          visUtvidetBehandlingDetaljer ? (
            <ShrinkIcon fontSize="1.4rem" aria-hidden />
          ) : (
            <ExpandVerticalIcon fontSize="1.4rem" aria-hidden />
          )
        }
        aria-label="Utvid behandling detaljer panel"
        variant="tertiary-neutral"
        size="xsmall"
        onClick={toggleVisUtvidetBehandlingDetaljer}
      />
    </Tooltip>
  );
};
