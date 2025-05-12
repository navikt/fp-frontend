import { FormattedMessage } from 'react-intl';

import { HStack } from '@navikt/ds-react';
import { dateFormat } from '@navikt/ft-utils';

import { FaktaBox, FaktaKilde } from '@navikt/fp-fakta-felles';
import type { FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

interface Props {
  familiehendelse: FamilieHendelseSamling;
  søknad: Soknad;
}

// TODO(siri): legg inn kilde når den kommer fra backend
export const Situasjon = ({ familiehendelse }: Props) => {
  const { avklartBarn, termindato } = familiehendelse.gjeldende || {};

  return (
    <HStack gap="4">
      {termindato && (
        <FaktaBox
          kilde={FaktaKilde.INGEN}
          label={<FormattedMessage id="FodselsammenligningPanel.Termindato" />}
          value={dateFormat(termindato)}
        />
      )}
      {avklartBarn && (
        <FaktaBox
          kilde={FaktaKilde.INGEN}
          value={avklartBarn.map(barn => dateFormat(barn.fodselsdato)).join(', ')}
          label={<FormattedMessage id="FodselsammenligningPanel.Fodselsdato" />}
        />
      )}
      {avklartBarn && (
        <FaktaBox
          kilde={FaktaKilde.INGEN}
          label={<FormattedMessage id="FodselsammenligningPanel.AntallBarn" />}
          value={avklartBarn.length.toString()}
        />
      )}
    </HStack>
  );
};
