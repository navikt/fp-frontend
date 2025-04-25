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
      borderColor={error ? 'border-danger' : undefined}
      borderRadius="medium"
      background="surface-subtle"
      aria-label={label}
    >
      <Box padding="4" borderRadius="medium medium 0 0" background="surface-neutral-moderate">
        <Heading size="small">{label}</Heading>
      </Box>
      <Box padding="4">{children}</Box>
    </Box>
  );
};
