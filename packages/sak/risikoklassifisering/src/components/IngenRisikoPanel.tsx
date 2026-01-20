import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Box, HStack, Label } from '@navikt/ds-react';

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const IngenRisikoPanel = () => (
  <Box background="success-moderate" borderRadius="8" padding="space-12">
    <HStack gap="space-16" align="center">
      <CheckmarkCircleFillIcon
        title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
        height={24}
        width={24}
        color="var(--ax-bg-success-strong)"
      />
      <Label size="small">
        <FormattedMessage id="Risikopanel.Tittel.IngenFaresignaler" />
      </Label>
    </HStack>
  </Box>
);
