import { FormattedMessage } from 'react-intl';

import { BodyShort, ExpansionCard, HStack, Tag } from '@navikt/ds-react';

import { FaktaKilde, getLabelForFaktaKilde } from '@navikt/fp-fakta-felles';
import type { FamilieHendelse } from '@navikt/fp-types';

import { AvklartBarn } from './AvklartBarn';

interface Props {
  registerFamiliehendelse: FamilieHendelse | undefined;
}

export const FaktaFødselFraFReg = ({ registerFamiliehendelse }: Props) => {
  const harDødFødtBarn =
    registerFamiliehendelse &&
    registerFamiliehendelse.avklartBarn &&
    registerFamiliehendelse.avklartBarn.filter(barn => barn.dodsdato).length > 0;
  const { avklartBarn } = registerFamiliehendelse || {};
  return (
    <ExpansionCard size="small" aria-label="Opplysninger fra Folkeregisteret" defaultOpen={true}>
      <ExpansionCard.Header>
        <ExpansionCard.Title>
          <HStack gap="4">
            Opplysninger fra Folkeregisteret
            {harDødFødtBarn && (
              <Tag variant="info">
                <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
              </Tag>
            )}
          </HStack>
        </ExpansionCard.Title>
        <ExpansionCard.Description>{getLabelForFaktaKilde(FaktaKilde.FREG)}</ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        {!avklartBarn && <BodyShort>Det er ikke registrert noen fødselshendelse i folkeregisteret</BodyShort>}
        {avklartBarn && <AvklartBarn avklartBarn={avklartBarn} />}
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
