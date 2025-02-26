import { type PropsWithChildren } from 'react';

import { Box, ExpansionCard, HStack, VStack } from '@navikt/ds-react';

import { FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';

interface Props {
  kilde?: FaktaKilde;
  tittel: string;
  defaultOpen?: boolean;
}

export const EkspansjonsKort = ({ tittel, kilde, defaultOpen, children }: PropsWithChildren<Props>) => {
  return (
    <ExpansionCard aria-label={tittel} size="small" defaultOpen={defaultOpen}>
      <ExpansionCard.Header>
        <HStack gap="4" wrap={false}>
          <div>
            <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
            {kilde != null && <ExpansionCard.Description>{getLabelForFaktaKilde(kilde)}</ExpansionCard.Description>}
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Box padding="4" background="surface-subtle" borderRadius="medium">
          <VStack gap="4">{children}</VStack>
        </Box>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
