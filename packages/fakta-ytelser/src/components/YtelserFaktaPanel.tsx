import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading } from '@navikt/ds-react';

import { InntektArbeidYtelse, KodeverkMedNavn } from '@navikt/fp-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import PersonYtelserTable from './PersonYtelserTable';

interface OwnProps {
  inntektArbeidYtelse: InntektArbeidYtelse;
}

const YtelserFaktaPanel: FunctionComponent<OwnProps> = ({
  inntektArbeidYtelse,
}) => (
  <>
    <Heading size="small">
      <FormattedMessage id="YtelserFaktaPanel.SokersYtelser" />
    </Heading>
    <VerticalSpacer eightPx />
    <PersonYtelserTable
      ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForSoker}
    />
    {inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder &&
      inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder.length > 0 && (
        <>
          <VerticalSpacer fourtyPx />
          <Heading size="small">
            <FormattedMessage id="YtelserFaktaPanel.AnnenPartsYtelser" />
          </Heading>
          <VerticalSpacer eightPx />
          <PersonYtelserTable
            ytelser={inntektArbeidYtelse.relatertTilgrensendeYtelserForAnnenForelder}
          />
        </>
      )}
  </>
);

export default YtelserFaktaPanel;
