import { type ReactNode } from 'react';

import { Box, Heading } from '@navikt/ds-react';

interface Props {
  children: ReactNode;
  label: ReactNode;
  merknaderFraBeslutter?: {
    notAccepted?: boolean;
  };
}

export const FaktaKort = ({ label, children, merknaderFraBeslutter }: Props) => {
  const error = !!(merknaderFraBeslutter && merknaderFraBeslutter.notAccepted);
  return (
    <Box borderWidth={error ? '1' : undefined} borderColor={error ? 'border-danger' : undefined}>
      <Box padding="4" borderRadius="medium medium 0 0" background="surface-neutral-moderate">
        <Heading size="small">{label}</Heading>
      </Box>
      <Box padding="4" borderRadius="0 0 medium medium" background="surface-subtle">
        {children}
      </Box>
    </Box>
  );
};
