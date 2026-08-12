import { type PropsWithChildren, type ReactNode, useId } from 'react';

import { Box, ExpansionCard, HStack, VStack } from '@navikt/ds-react';

import { type FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import { type MedlemskapAvvik } from '@navikt/fp-types';

import { AvvikMerknad } from './AvvikMerknad';
import { AvvikStatus } from './AvvikStatus';

interface Props {
  kilde: FaktaKilde;
  tittel: ReactNode;
  relevanteAvvik: MedlemskapAvvik[];
  skalViseAvvik: boolean;
}

export const EkspansjonsKort = ({
  tittel,
  kilde,
  relevanteAvvik,
  skalViseAvvik,
  children,
}: PropsWithChildren<Props>) => {
  const id = useId();
  return (
    <ExpansionCard aria-labelledby={id} size="small">
      <ExpansionCard.Header>
        <HStack gap="space-16" wrap={false}>
          {skalViseAvvik && (
            <div style={{ marginTop: 4 }}>
              <AvvikStatus harAvvik={relevanteAvvik.length > 0} />
            </div>
          )}
          <div>
            <ExpansionCard.Title id={id} size="small">
              {tittel}
            </ExpansionCard.Title>
            <ExpansionCard.Description>{getLabelForFaktaKilde(kilde)}</ExpansionCard.Description>
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Box padding="space-16" background="neutral-softA" borderRadius="4">
          <VStack gap="space-16">
            {skalViseAvvik && relevanteAvvik.map(a => <AvvikMerknad key={a} avvik={a} />)}
            {children}
          </VStack>
        </Box>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
