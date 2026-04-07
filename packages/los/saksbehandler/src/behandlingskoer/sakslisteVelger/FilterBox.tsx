import type { ReactNode } from 'react';

import { Box, HStack, Label } from '@navikt/ds-react';

interface FilterBoxProps {
  label: ReactNode;
  icon: ReactNode;
  value: ReactNode;
}

export const FilterBox = ({ label, icon, value }: FilterBoxProps) => (
  <Box background="neutral-moderateA" padding="space-16" borderRadius="8" flexBasis="0%" flexGrow="1">
    <HStack justify="space-between">
      <Label size="small">{label}</Label>
      <div className="text-2xl text-ax-text-neutral-decoration">{icon}</div>
    </HStack>
    {value}
  </Box>
);
