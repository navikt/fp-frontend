import { useIntl } from 'react-intl';

import { ExpandVerticalIcon, ShrinkIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleVisUtvidetBehandlingSupportIndexPanel: () => void;
  visUtvidetBehandlingSupportIndexPanel: boolean;
}

export const UtvidEllerMinskKnapp = ({
  toggleVisUtvidetBehandlingSupportIndexPanel,
  visUtvidetBehandlingSupportIndexPanel,
}: Props) => {
  const intl = useIntl();

  return (
    <Tooltip
      content={
        visUtvidetBehandlingSupportIndexPanel
          ? intl.formatMessage({ id: 'BehandlingSupportIndex.Minsk' })
          : intl.formatMessage({ id: 'BehandlingSupportIndex.Utvid' })
      }
      placement="bottom"
    >
      <Button
        icon={
          visUtvidetBehandlingSupportIndexPanel ? (
            <ShrinkIcon fontSize="1.4rem" aria-hidden />
          ) : (
            <ExpandVerticalIcon fontSize="1.4rem" aria-hidden />
          )
        }
        aria-label="Utvid historikk vindu"
        variant="tertiary-neutral"
        size="xsmall"
        onClick={toggleVisUtvidetBehandlingSupportIndexPanel}
      />
    </Tooltip>
  );
};
