import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { InntektArbeidYtelse } from '@navikt/fp-types';

import { PersonYtelserTable } from './PersonYtelserTable';

interface Props {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

export const YtelserFaktaPanel = ({ inntektArbeidYtelse }: Props) => (
  <VStack gap="space-32">
    <VStack gap="space-16">
      <Heading size="small" level="2">
        <FormattedMessage id="YtelserFaktaPanel.SokersYtelser" />
      </Heading>
      <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker} />
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
