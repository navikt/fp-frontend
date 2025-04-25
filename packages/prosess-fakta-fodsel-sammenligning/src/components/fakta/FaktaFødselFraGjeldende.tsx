import { ExpansionCard, VStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FamilieHendelse } from '@navikt/fp-types';

import { AvklartBarn } from './AvklartBarn.tsx';

interface Props {
  gjeldendeFamiliehendelse: FamilieHendelse | undefined;
}

export const FaktaFødselFraGjeldende = ({ gjeldendeFamiliehendelse }: Props) => {
  const { termindato, avklartBarn } = gjeldendeFamiliehendelse || {};
  return (
    <ExpansionCard size="small" aria-label="Opplysninger som er gjeldende" defaultOpen={true}>
      <ExpansionCard.Header>
        <ExpansionCard.Title>Gjeldende opplysninger</ExpansionCard.Title>
        <ExpansionCard.Description>Grunnlag som brukes for behandlingen</ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <VStack gap="4">
          {termindato && <ValueLabel label="Termindato">{dateFormat(termindato)}</ValueLabel>}
          {avklartBarn && <AvklartBarn avklartBarn={avklartBarn} />}
        </VStack>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
