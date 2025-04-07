import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { OpptjeningTimeLineLight } from './OpptjeningTimeLineLight';

interface Props {
  months: number;
  days: number;
  fastsattOpptjeningActivities?: FastsattOpptjeningAktivitet[];
  opptjeningFomDate: string;
  opptjeningTomDate: string;
}

/**
 * OpptjeningVilkarView
 *
 * Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarView = ({
  months,
  days,
  fastsattOpptjeningActivities = [],
  opptjeningFomDate,
  opptjeningTomDate,
}: Props) => (
  <VStack gap="4">
    <BodyShort size="small">
      <FormattedMessage id="OpptjeningVilkarView.MonthsAndDays" values={{ months, days }} />
    </BodyShort>
    <BodyShort size="small">
      <PeriodLabel dateStringFom={opptjeningFomDate} dateStringTom={opptjeningTomDate} />
    </BodyShort>
    {fastsattOpptjeningActivities.length > 0 && (
      <OpptjeningTimeLineLight
        opptjeningPeriods={fastsattOpptjeningActivities}
        opptjeningFomDate={opptjeningFomDate}
        opptjeningTomDate={opptjeningTomDate}
      />
    )}
  </VStack>
);
