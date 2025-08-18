import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, CheckmarkIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, Label, VStack } from '@navikt/ds-react';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';

import type { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import { opptjeningAktivitetKlassifisering } from '../kodeverk/opptjeningAktivitetKlassifisering';

import styles from './timeLineData.module.css';

const MELLOMLIGGENDE_PERIODE = 'MELLOMLIGGENDE_PERIODE';

const periodStatus = (periodState: string): string =>
  periodState === opptjeningAktivitetKlassifisering.BEKREFTET_AVVIST ||
  periodState === opptjeningAktivitetKlassifisering.ANTATT_AVVIST
    ? 'OpptjeningVilkarView.Avslatt'
    : 'OpptjeningVilkarView.Godkjent';

const isPeriodGodkjent = (period: string): boolean =>
  !!(
    period === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT ||
    period === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT ||
    period === MELLOMLIGGENDE_PERIODE
  );

interface Props {
  fastsattOpptjeningAktivitet: FastsattOpptjeningAktivitet;
  lukkPeriode: () => void;
  velgNestePeriode: () => void;
  velgForrigePeriode: () => void;
}

export const TimeLineData = ({
  fastsattOpptjeningAktivitet,
  lukkPeriode,
  velgNestePeriode,
  velgForrigePeriode,
}: Props) => {
  const intl = useIntl();
  return (
    <Box.New borderWidth="1" padding="4">
      <VStack gap="space-16">
        <HStack justify="space-between">
          <Label size="small">
            <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
          </Label>
          <HStack gap="space-8">
            <Button
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={velgForrigePeriode}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.prevPeriod' })}
            >
              <FormattedMessage id="TimeLineData.prevPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={velgNestePeriode}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.nextPeriod' })}
              iconPosition="right"
            >
              <FormattedMessage id="TimeLineData.nextPeriodShort" />
            </Button>
            <Button
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.lukkPeriode' })}
            />
          </HStack>
        </HStack>
        <BodyShort size="small">
          <PeriodLabel
            dateStringFom={fastsattOpptjeningAktivitet.fom}
            dateStringTom={fastsattOpptjeningAktivitet.tom}
          />
        </BodyShort>
        <HStack gap="space-4">
          {isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && <CheckmarkIcon className={styles.godkjentImage} />}
          {!isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && <XMarkIcon className={styles.avslattImage} />}
          <BodyShort size="small">
            <FormattedMessage id={periodStatus(fastsattOpptjeningAktivitet.klasse)} />
          </BodyShort>
        </HStack>
      </VStack>
    </Box.New>
  );
};
