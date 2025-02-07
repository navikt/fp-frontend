import React, { forwardRef, type ForwardRefExoticComponent, type PropsWithChildren, type ReactNode } from 'react';

import { BodyShort, Box, Detail, HStack, Label, VStack } from '@navikt/ds-react';

import { FaktaKilde, getLabelForFaktaKilde } from './FaktaKilde';

export const FaktaGruppe = forwardRef((props, ref) => (
  <HStack gap="2" style={{ display: 'flex' }} {...props} ref={ref} />
)) as ForwardRefExoticComponent<PropsWithChildren & React.RefAttributes<HTMLDivElement>>;

FaktaGruppe.displayName = 'FaktaGruppe';

interface FaktaBoxProps {
  label: string | ReactNode;
  value: string;
  kilde: FaktaKilde;
}

export const FaktaBox = ({ label, value, kilde }: FaktaBoxProps) => {
  return (
    <Box background="bg-subtle" flexGrow="1" paddingBlock="2" paddingInline="4" borderRadius="medium">
      <VStack gap="6">
        <div>
          <Label size="small">{label}</Label>
          <BodyShort size="large">{value}</BodyShort>
        </div>
        <Detail uppercase>{getLabelForFaktaKilde(kilde)}</Detail>
      </VStack>
    </Box>
  );
};
