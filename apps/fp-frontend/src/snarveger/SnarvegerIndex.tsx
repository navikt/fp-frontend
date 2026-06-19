import { useIntl } from 'react-intl';

import { BodyShort, Box, Heading, VStack } from '@navikt/ds-react';

import { SnarvegerOversikt } from './SnarvegerOversikt';

/**
 * SnarvegerIndex
 *
 * Eiga side som listar opp alle tastatursnarvegane i applikasjonen. Nåast frå
 * header-menyen, og viser same innhald som hjelp-modalen (`?`).
 */
export const SnarvegerIndex = () => {
  const intl = useIntl();

  return (
    <Box maxWidth="768px" marginInline="auto" paddingInline="space-16" paddingBlock="space-32">
      <VStack gap="space-24">
        <div>
          <Heading size="large" level="1" spacing>
            {intl.formatMessage({ id: 'Snarveger.Tittel' })}
          </Heading>
          <BodyShort>{intl.formatMessage({ id: 'Snarveger.Ingress' })}</BodyShort>
        </div>
        <SnarvegerOversikt />
      </VStack>
    </Box>
  );
};
