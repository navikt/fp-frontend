import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import { ValueLabel } from '@navikt/fp-fakta-felles';
import type { FødselSøknad } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';

interface Props {
  søknad: FødselSøknad;
}

export const FaktaFødselFraSøknad = ({ søknad: { termindato, utstedtdato, antallBarn, barn } }: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'FaktaFødselFraSøknad.Tittel' });
  return (
    <FaktaKort label={tittel}>
      <VStack gap="4">
        {barn.length > 0 && (
          <ValueLabel label={<FormattedMessage id="Label.Fodselsdato" />}>
            <DateLabel dateString={barn[0].fødselsdato} />
          </ValueLabel>
        )}
        {termindato && (
          <ValueLabel label={<FormattedMessage id="Label.Termindato" />}>
            <DateLabel dateString={termindato} />
          </ValueLabel>
        )}
        {utstedtdato && (
          <ValueLabel label={<FormattedMessage id="Label.Utstedtdato" />}>
            <DateLabel dateString={utstedtdato} />
          </ValueLabel>
        )}
        {antallBarn && <ValueLabel label={<FormattedMessage id="Label.AntallBarn" />}>{antallBarn}</ValueLabel>}
      </VStack>
    </FaktaKort>
  );
};
