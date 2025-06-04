import { FormattedMessage, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselRegister } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import { AvklartBarn } from './AvklartBarn';

interface Props {
  register: FødselRegister;
}

export const FaktaFødselFraFReg = ({ register }: Props) => {
  const intl = useIntl();
  const { barn } = register || {};

  return (
    <FaktaKort label={intl.formatMessage({ id: 'FaktaFødselFraFReg.Tittel' })}>
      <VStack gap="4">
        {barn.length > 0 ? (
          <>
            <AvklartBarn avklartBarn={barn} />
            <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{barn.length}</ValueLabel>
          </>
        ) : (
          <BodyShort>
            <FormattedMessage id="FaktaFødselFraFReg.IngenBarn" />
          </BodyShort>
        )}
      </VStack>
    </FaktaKort>
  );
};
