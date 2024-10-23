import React from 'react';
import { Label, VStack } from '@navikt/ds-react';

export const InntektsmeldingInfoBlokk = ({ tittel, children }: { tittel: string; children: React.ReactNode }) => {
  return (
    <VStack>
      <Label size="medium">{tittel}</Label>
      {children}
    </VStack>
  );
};
