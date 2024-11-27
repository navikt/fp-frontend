import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import OpptjeningTimeLineLight from './OpptjeningTimeLineLight';

interface OwnProps {
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
const OpptjeningVilkarViewImpl: FunctionComponent<OwnProps> = ({
  months,
  days,
  fastsattOpptjeningActivities = [],
  opptjeningFomDate,
  opptjeningTomDate,
}) => (
  <>
    <BodyShort size="small">
      <FormattedMessage id="OpptjeningVilkarView.MonthsAndDays" values={{ months, days }} />
    </BodyShort>
    <VerticalSpacer eightPx />
    <BodyShort size="small">
      <PeriodLabel dateStringFom={opptjeningFomDate} dateStringTom={opptjeningTomDate} />
    </BodyShort>
    <VerticalSpacer sixteenPx />
    {fastsattOpptjeningActivities.length > 0 && (
      <OpptjeningTimeLineLight
        opptjeningPeriods={fastsattOpptjeningActivities}
        opptjeningFomDate={opptjeningFomDate}
        opptjeningTomDate={opptjeningTomDate}
      />
    )}
  </>
);

export default OpptjeningVilkarViewImpl;
