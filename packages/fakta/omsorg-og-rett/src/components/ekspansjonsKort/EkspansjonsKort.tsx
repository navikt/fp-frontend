import { type PropsWithChildren } from 'react';

import { Box, ExpansionCard, HStack, VStack } from '@navikt/ds-react';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';

interface Props {
  kilde: FaktaKilde;
  tittel: string;
  defaultOpen?: boolean;
}

export const EkspansjonsKort = ({ tittel, kilde, defaultOpen, children }: PropsWithChildren<Props>) => {
  return (
    <ExpansionCard aria-label={tittel} size="small" defaultOpen={defaultOpen}>
      <ExpansionCard.Header>
        <HStack gap="space-16" wrap={false}>
          <div>
            <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
            <ExpansionCard.Description>{getLabelForFaktaKilde(kilde)}</ExpansionCard.Description>
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Box padding="space-16" background="neutral-soft" borderRadius="medium">
          <VStack gap="space-16">{children}</VStack>
        </Box>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
