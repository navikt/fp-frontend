import { type ReactNode } from 'react';

import { Box, Heading, HStack } from '@navikt/ds-react';

interface Props {
  children: ReactNode;
  label: string;
  tags?: ReactNode;
  merknaderFraBeslutter?: {
    notAccepted?: boolean;
  };
}

export const FaktaKort = ({ label, tags, children, merknaderFraBeslutter }: Props) => {
  const error = !!(merknaderFraBeslutter && merknaderFraBeslutter.notAccepted);
  return (
    <Box
      borderWidth={error ? '1' : undefined}
      borderColor={error ? 'border-danger' : undefined}
      borderRadius="0 0 medium medium"
      background="surface-subtle"
      aria-label={label}
    >
      <Box padding="4" borderRadius="medium medium 0 0" background="surface-neutral-moderate">
        <HStack gap="4">
          <Heading size="small">{label}</Heading>
          {tags}
        </HStack>
      </Box>
      <Box padding="4">{children}</Box>
    </Box>
  );
};
