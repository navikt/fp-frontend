import React, { FC, PropsWithChildren } from 'react';
import { MedlemskapAvvik } from '@navikt/fp-types';
import { Box, ExpansionCard, HStack, VStack } from '@navikt/ds-react';
import { FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';

import AvvikStatus from './AvvikStatus';
import AvvikMerknad from './AvvikMerknad';

interface Props {
  kilde: FaktaKilde;
  tittel: string;
  relevanteAvvik: MedlemskapAvvik[];
  skalViseAvvik: boolean;
}

const EkspansjonsKort: FC<PropsWithChildren<Props>> = ({ tittel, kilde, relevanteAvvik, skalViseAvvik, children }) => {
  return (
    <ExpansionCard aria-label={tittel} size="small">
      <ExpansionCard.Header>
        <HStack gap="4" wrap={false}>
          {skalViseAvvik && (
            <div style={{ marginTop: 4 }}>
              <AvvikStatus harAvvik={relevanteAvvik.length > 0} />
            </div>
          )}
          <div>
            <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
            <ExpansionCard.Description>{getLabelForFaktaKilde(kilde)}</ExpansionCard.Description>
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Box padding="4" background="surface-subtle" borderRadius="medium">
          <VStack gap="4">
            {skalViseAvvik && relevanteAvvik.map(a => <AvvikMerknad key={a} avvik={a} />)}
            {children}
          </VStack>
        </Box>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

export default EkspansjonsKort;
