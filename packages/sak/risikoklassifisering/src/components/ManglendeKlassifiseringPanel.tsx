import { FormattedMessage, useIntl } from 'react-intl';

import { HourglassTopFilledIcon } from '@navikt/aksel-icons';
import { Box, HStack, Label } from '@navikt/ds-react';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
export const ManglendeKlassifiseringPanel = () => (
  <Box borderWidth="2" borderColor="neutral-subtle" borderRadius="8" padding="space-12">
    <HStack gap="space-16" align="center">
      <HourglassTopFilledIcon
        title={useIntl().formatMessage({ id: 'Risikopanel.Tittel' })}
        color="var(--ax-neutral-700)"
        height={24}
        width={24}
      />
      <Label size="small">
        <FormattedMessage id="Risikopanel.Tittel.ManglerKlassifisering" />
      </Label>
    </HStack>
  </Box>
);
