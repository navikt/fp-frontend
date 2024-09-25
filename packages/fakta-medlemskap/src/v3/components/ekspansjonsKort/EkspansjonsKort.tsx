import React, { FC, PropsWithChildren } from 'react';
import { MedlemskapAvvik } from '@navikt/fp-types';
import { Box, ExpansionCard, HStack, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import AvvikStatus from './AvvikStatus';
import AvvikMerknad from './AvvikMerknad';
import { FaktaKilde, getFormateringsIdForKilde } from '../../faktaKilde';

interface Props {
  kilde: FaktaKilde;
  tittel: string;
  relevanteAvvik: MedlemskapAvvik[];
  avvikValues?: Record<string, string>;
  skalViseAvvik: boolean;
}

const EkspansjonsKort: FC<PropsWithChildren<Props>> = ({
  tittel,
  kilde,
  relevanteAvvik,
  avvikValues,
  skalViseAvvik,
  children,
}) => {
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
            <ExpansionCard.Description>
              <FormattedMessage id={getFormateringsIdForKilde(kilde)}></FormattedMessage>
            </ExpansionCard.Description>
          </div>
        </HStack>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <Box padding="4" background="surface-subtle" borderRadius="medium">
          <VStack gap="4">
            {skalViseAvvik && relevanteAvvik.map(a => <AvvikMerknad key={a} avvik={a} values={avvikValues} />)}
            {children}
          </VStack>
        </Box>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};

export default EkspansjonsKort;
