import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Tag } from '@navikt/ds-react';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FamilieHendelse } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

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
    <FaktaKort
      label={
        <HStack gap="4">
          <FormattedMessage id="FodselsammenligningPanel.OpplysningerFREG" />
          {harDødFødtBarn && (
            <Tag variant="info">
              <FormattedMessage id="FodselsammenligningPanel.Dodfodt" />
            </Tag>
          )}
        </HStack>
      }
    >
      <>
        {!avklartBarn && <BodyShort>Det er ikke registrert noen fødselshendelse i folkeregisteret</BodyShort>}
        {avklartBarn && (
          <>
            <ValueLabel label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}>
              {avklartBarn.length}
            </ValueLabel>
            <AvklartBarn avklartBarn={avklartBarn} />
          </>
        )}
      </>
    </FaktaKort>
  );
};
