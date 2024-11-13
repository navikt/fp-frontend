import React from 'react';
import { Box, HStack, Label } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { FormattedMessage, useIntl } from 'react-intl';

/**
 * IngenRisikoPanel
 *
 * Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const IngenRisikoPanel = () => (
  <Box background="surface-success-subtle" borderRadius="large" padding="3">
    <HStack gap="4" align="center">
      <CheckmarkCircleFillIcon
        title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
        height={24}
        width={24}
        color="var(--a-surface-success)"
      />
      <Label size="small">
        <FormattedMessage id="Risikopanel.Tittel.IngenFaresignaler" />
      </Label>
    </HStack>
  </Box>
);
