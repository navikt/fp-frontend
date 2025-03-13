import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import type { InntektArbeidYtelse } from '@navikt/fp-types';

import { PersonYtelserTable } from './PersonYtelserTable';

interface Props {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

export const YtelserFaktaPanel = ({ inntektArbeidYtelse }: Props) => (
  <VStack gap="8">
    <VStack gap="4">
      <Heading size="small">
        <FormattedMessage id="YtelserFaktaPanel.SokersYtelser" />
      </Heading>
      <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker} />
    </VStack>
    {inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder &&
      inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder.length > 0 && (
        <VStack gap="4">
          <Heading size="small">
            <FormattedMessage id="YtelserFaktaPanel.AnnenPartsYtelser" />
          </Heading>
          <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder} />
        </VStack>
      )}
  </VStack>
);
