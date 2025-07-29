import React, { forwardRef, type ForwardRefExoticComponent, type PropsWithChildren, type ReactNode } from 'react';

import { BodyShort, Box, Detail, HStack, Label, VStack } from '@navikt/ds-react';

import { type FaktaKilde, getLabelForFaktaKilde } from './FaktaKilde';

export const FaktaGruppe = forwardRef((props, ref) => (
  <HStack gap="2" style={{ display: 'flex' }} {...props} ref={ref} />
)) as ForwardRefExoticComponent<PropsWithChildren & React.RefAttributes<HTMLDivElement>>;

FaktaGruppe.displayName = 'FaktaGruppe';

interface FaktaBoxProps {
  label: string | ReactNode;
  value: string | ReactNode;
  kilde: FaktaKilde;
}

export const FaktaBox = ({ label, value, kilde }: FaktaBoxProps) => {
  return (
    <Box
      background="bg-subtle"
      flexBasis="0%"
      flexGrow="1"
      borderRadius="medium"
      paddingBlock="2"
      paddingInline="4"
      aria-label={typeof label === 'string' ? label : undefined}
    >
      <VStack gap="6" flexGrow="1" height="100%" justify="space-between">
        <div>
          <Label size="small">{label}</Label>
          <BodyShort size="large">{value}</BodyShort>
        </div>
        <Detail uppercase>{getLabelForFaktaKilde(kilde)}</Detail>
      </VStack>
    </Box>
  );
};
