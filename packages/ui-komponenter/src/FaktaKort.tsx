import { type ReactNode } from 'react';

import { Box, Heading } from '@navikt/ds-react';

interface Props {
  children: ReactNode;
  label: string;
  merknaderFraBeslutter?: {
    notAccepted?: boolean;
  };
}

export const FaktaKort = ({ label, children, merknaderFraBeslutter }: Props) => {
  const error = merknaderFraBeslutter?.notAccepted ?? false;
  return (
    <Box
      borderWidth={error ? '2' : undefined}
      borderColor={error ? 'danger-strong' : undefined}
      borderRadius="4"
      background="neutral-soft"
      aria-label={label}
    >
      <Box padding="space-16" borderRadius="4 4 0 0" background="neutral-moderateA">
        <Heading size="small" level="3">
          {label}
        </Heading>
      </Box>
      <Box padding="space-16">{children}</Box>
    </Box>
  );
};
