import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselSøknad } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

import { AvklartBarn } from './AvklartBarn';

interface Props {
  søknad: FødselSøknad;
}

export const FaktaFødselFraSøknad = ({ søknad }: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'FaktaFødselFraSøknad.Tittel' });
  return (
    <FaktaKort label={tittel}>
      <VStack gap="4">
        {søknad.barn.length > 0 && <AvklartBarn avklartBarn={søknad.barn} />}
        {søknad.termindato && (
          <ValueLabel label={<FormattedMessage id="Label.Termindato" />}>
            <DateLabel dateString={søknad.termindato} />
          </ValueLabel>
        )}
        {søknad.utstedtdato && (
          <ValueLabel label={<FormattedMessage id="Label.Utstedtdato" />}>
            <DateLabel dateString={søknad.utstedtdato} />
          </ValueLabel>
        )}
        {søknad.antallBarn && (
          <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{søknad.antallBarn}</ValueLabel>
        )}
      </VStack>
    </FaktaKort>
  );
};
