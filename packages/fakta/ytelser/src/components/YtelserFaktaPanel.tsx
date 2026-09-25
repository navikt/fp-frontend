import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import { FaktaPanelTittel } from '@navikt/fp-fakta-felles';
import type { InntektArbeidYtelse } from '@navikt/fp-types';

import { PersonYtelserTable } from './PersonYtelserTable';

interface Props {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

export const YtelserFaktaPanel = ({ inntektArbeidYtelse }: Props) => (
  <VStack gap="space-32">
    <FaktaPanelTittel />
    <VStack gap="space-16">
      <Heading size="small" level="3">
        <FormattedMessage id="YtelserFaktaPanel.SokersYtelser" />
      </Heading>
      <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForSøker} />
    </VStack>
    {inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder.length > 0 && (
      <VStack gap="space-16">
        <Heading size="small" level="3">
          <FormattedMessage id="YtelserFaktaPanel.AnnenPartsYtelser" />
        </Heading>
        <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder} />
      </VStack>
    )}
  </VStack>
);
