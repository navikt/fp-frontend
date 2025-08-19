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
    <Box.New
      borderWidth={error ? '2' : undefined}
      borderColor={error ? 'danger-strong' : undefined}
      borderRadius="medium"
      background="neutral-soft"
      aria-label={label}
    >
      <Box.New padding="4" borderRadius="medium medium 0 0" background="neutral-moderateA">
        <Heading size="small" level="3">
          {label}
        </Heading>
      </Box.New>
      <Box.New padding="4">{children}</Box.New>
    </Box.New>
  );
};
