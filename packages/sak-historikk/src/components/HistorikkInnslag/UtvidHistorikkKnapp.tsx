import { useIntl } from 'react-intl';

import { ExpandVerticalIcon } from '@navikt/aksel-icons';
import { Button, Tooltip } from '@navikt/ds-react';

interface Props {
  toggleHistorikkPanel: () => void;
  utvidHistorikkPanel: boolean;
}

export const UtvidHistorikkKnapp = ({ toggleHistorikkPanel, utvidHistorikkPanel }: Props) => {
  const intl = useIntl();
  return (
    <Tooltip content={intl.formatMessage({ id: 'History.UtvidHistorikk' })} placement="bottom">
      <Button
        icon={<ExpandVerticalIcon fontSize="1.5rem" aria-hidden />}
        aria-label={utvidHistorikkPanel ? 'Utvid historikk vindu' : 'Minsk historikk vindu'}
        variant="tertiary-neutral"
        size="xsmall"
        onClick={toggleHistorikkPanel}
      />
    </Tooltip>
  );
};
