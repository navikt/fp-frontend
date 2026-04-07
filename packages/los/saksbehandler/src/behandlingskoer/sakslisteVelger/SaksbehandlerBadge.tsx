import type { ReactNode } from 'react';

import { BodyShort, Box, HStack } from '@navikt/ds-react';

interface Props {
  icon: ReactNode;
  label: ReactNode;
}

export const SaksbehandlerBadge = ({ icon, label }: Props) => (
  <Box background="neutral-moderateA" paddingInline="space-12" paddingBlock="space-4" borderRadius="full">
    <HStack asChild gap="space-4" align="center">
      <BodyShort>
        <span className="text-2xl text-ax-text-neutral-decoration">{icon}</span>
        {label}
      </BodyShort>
    </HStack>
  </Box>
);
