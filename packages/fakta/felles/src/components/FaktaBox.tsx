import { type ComponentProps, type ReactNode } from 'react';

import { BodyShort, Box, Detail, HStack, Label, VStack } from '@navikt/ds-react';

import { type FaktaKilde, getLabelForFaktaKilde } from './FaktaKilde';

export const FaktaGruppe = (props: ComponentProps<typeof HStack>) => (
  <HStack gap="space-8" style={{ display: 'flex' }} {...props} />
);

interface FaktaBoxProps {
  label: string | ReactNode;
  value: string | ReactNode;
  kilde: FaktaKilde;
}

export const FaktaBox = ({ label, value, kilde }: FaktaBoxProps) => {
  return (
    <Box
      background="neutral-soft"
      flexBasis="0%"
      flexGrow="1"
      borderRadius="4"
      paddingBlock="space-8"
      paddingInline="space-16"
      aria-label={typeof label === 'string' ? label : undefined}
    >
      <VStack gap="space-24" flexGrow="1" height="100%" justify="space-between">
        <div>
          <Label size="small">{label}</Label>
          <BodyShort size="large">{value}</BodyShort>
        </div>
        <Detail uppercase>{getLabelForFaktaKilde(kilde)}</Detail>
      </VStack>
    </Box>
  );
};
