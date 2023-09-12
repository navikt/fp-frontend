import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Button, HStack, Label, Panel } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArrowLeftIcon, ArrowRightIcon, CheckmarkIcon, XMarkIcon } from '@navikt/aksel-icons';

import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';

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

interface OwnProps {
  fastsattOpptjeningAktivitet: FastsattOpptjeningAktivitet;
  lukkPeriode: () => void;
  velgNestePeriode: () => void;
  velgForrigePeriode: () => void;
}

const TimeLineData: FunctionComponent<OwnProps> = ({
  fastsattOpptjeningAktivitet,
  lukkPeriode,
  velgNestePeriode,
  velgForrigePeriode,
}) => {
  const intl = useIntl();
  return (
    <Panel border>
      <FlexContainer>
        <FlexRow spaceBetween>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
            </Label>
          </FlexColumn>
          <FlexColumn className={styles.fix}>
            <Button
              className={styles.margin}
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
              className={styles.margin}
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
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <BodyShort size="small">
        <PeriodLabel dateStringFom={fastsattOpptjeningAktivitet.fom} dateStringTom={fastsattOpptjeningAktivitet.tom} />
      </BodyShort>
      <VerticalSpacer sixteenPx />
      <HStack>
        {isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && <CheckmarkIcon className={styles.godkjentImage} />}
        {!isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && <XMarkIcon className={styles.avslattImage} />}
        <FormattedMessage id={periodStatus(fastsattOpptjeningAktivitet.klasse)} />
      </HStack>
    </Panel>
  );
};

export default TimeLineData;
