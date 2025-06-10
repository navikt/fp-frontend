import type { ReactElement, ReactNode } from 'react';

import { BodyShort, Label, VStack } from '@navikt/ds-react';

interface Props {
  label: ReactElement | string;
  children: ReactNode | ReactElement | string | number | (ReactNode | string | ReactElement | null)[];
}

export const ValueLabel = ({ label, children }: Props) => {
  return (
    <VStack gap="1">
      <Label>{label}</Label>
      {isStringOrNumber(children) ? <BodyShort>{children}</BodyShort> : children}
    </VStack>
  );
};

const isStringOrNumber = (value: unknown): value is string | number => {
  return typeof value === 'string' || typeof value === 'number';
};
