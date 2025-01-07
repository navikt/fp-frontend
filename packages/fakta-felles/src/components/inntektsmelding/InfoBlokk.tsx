import React from 'react';

import { Label, VStack } from '@navikt/ds-react';

export const InfoBlokk = ({ tittel, children }: { tittel: string | React.ReactNode; children: React.ReactNode }) => {
  return (
    <VStack>
      <Label size="medium">{tittel}</Label>
      {children}
    </VStack>
  );
};
