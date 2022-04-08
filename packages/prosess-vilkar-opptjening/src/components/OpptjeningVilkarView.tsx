import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';

import { FastsattOpptjeningAktivitet } from '@fpsak-frontend/types';
import { PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';

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
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarViewImpl: FunctionComponent<OwnProps> = ({
  months,
  days,
  fastsattOpptjeningActivities = [],
  opptjeningFomDate,
  opptjeningTomDate,
}) => (
  <>
    <FormattedMessage
      id="OpptjeningVilkarView.MonthsAndDays"
      values={{ months, days }}
    />
    <Normaltekst>
      <PeriodLabel dateStringFom={opptjeningFomDate} dateStringTom={opptjeningTomDate} />
    </Normaltekst>
    <VerticalSpacer fourPx />
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
