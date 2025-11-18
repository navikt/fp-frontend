import { FormattedMessage } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { FastsattOpptjening } from '@navikt/fp-types';

import { OpptjeningTimeLineLight } from './OpptjeningTimeLineLight';

interface Props {
  fastsattOpptjening: FastsattOpptjening;
}

/**
 * OpptjeningVilkarView
 *
 * Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarView = ({
  fastsattOpptjening: {
    opptjeningperiode: { måneder, dager },
    opptjeningFom,
    opptjeningTom,
    fastsattOpptjeningAktivitetList,
  },
}: Props) => (
  <VStack gap="space-16">
    <ReadOnlyField
      size="small"
      label={<FormattedMessage id="OpptjeningVilkarView.MonthsAndDaysLabel" />}
      value={<FormattedMessage id="OpptjeningVilkarView.MonthsAndDays" values={{ months: måneder, days: dager }} />}
    />
    {fastsattOpptjeningAktivitetList.length === 0 && (
      <BodyShort size="small">
        <FormattedMessage id="OpptjeningVilkarView.IngenAktiviteter" />
      </BodyShort>
    )}
    <ReadOnlyField
      size="small"
      label={<FormattedMessage id="OpptjeningVilkarView.Opptjeningsperiode" />}
      value={<PeriodLabel dateStringFom={opptjeningFom} dateStringTom={opptjeningTom} />}
    />

    {fastsattOpptjeningAktivitetList.length > 0 && (
      <OpptjeningTimeLineLight
        opptjeningPeriods={fastsattOpptjeningAktivitetList}
        opptjeningFomDate={opptjeningFom}
        opptjeningTomDate={opptjeningTom}
      />
    )}
  </VStack>
);
