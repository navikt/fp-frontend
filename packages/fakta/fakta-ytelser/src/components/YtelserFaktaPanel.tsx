import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import type { InntektArbeidYtelse } from '@navikt/fp-types';

import { PersonYtelserTable } from './PersonYtelserTable';

interface Props {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

export const YtelserFaktaPanel = ({ inntektArbeidYtelse }: Props) => (
  <>
    <Heading size="small">
      <FormattedMessage id="YtelserFaktaPanel.SokersYtelser" />
    </Heading>
    <VerticalSpacer eightPx />
    <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker} />
    {inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder &&
      inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder.length > 0 && (
        <>
          <VerticalSpacer fourtyPx />
          <Heading size="small">
            <FormattedMessage id="YtelserFaktaPanel.AnnenPartsYtelser" />
          </Heading>
          <VerticalSpacer eightPx />
          <PersonYtelserTable ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder} />
        </>
      )}
  </>
);
