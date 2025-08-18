import { FormattedMessage, useIntl } from 'react-intl';

import { HourglassTopFilledIcon } from '@navikt/aksel-icons';
import { Box, HStack, Label } from '@navikt/ds-react';

/**
 * ManglendeKlassifiseringPanel
 *
 * Statisk visning av panel som tilsier ingen risikoklassifisering er utført for valgt behandling, eller at ingen behandling er valgt.
 */
export const ManglendeKlassifiseringPanel = () => (
  <Box.New borderWidth="2" borderColor="neutral-subtle" borderRadius="large" padding="3">
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
  </Box.New>
);
