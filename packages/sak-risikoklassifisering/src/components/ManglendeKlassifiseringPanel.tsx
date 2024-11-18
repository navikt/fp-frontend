import React from 'react';
import { Box, HStack, Label } from '@navikt/ds-react';
import { HourglassTopFilledIcon } from '@navikt/aksel-icons';

import { FormattedMessage, useIntl } from 'react-intl';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
export const ManglendeKlassifiseringPanel = () => (
  <Box borderWidth="2" borderColor="border-divider" borderRadius="large" padding="3">
    <HStack gap="4" align="center">
      <HourglassTopFilledIcon
        title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
        color="var(--a-gray-600)"
        height={24}
        width={24}
      />
      <Label size="small">
        <FormattedMessage id="Risikopanel.Tittel.ManglerKlassifisering" />
      </Label>
    </HStack>
  </Box>
);
