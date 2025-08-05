import React from 'react';

import { Label, VStack } from '@navikt/ds-react';

export const InntektsmeldingInfoBlokk = ({ tittel, children }: { tittel: string; children: React.ReactNode }) => {
  return (
    <VStack gap="space-4">
      <Label size="medium">{tittel}</Label>
      {children}
    </VStack>
  );
};
