import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Button, Label, Panel } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Image, PeriodLabel, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';

import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import checkImg from '../images/check.svg';
import advarselImg from '../images/remove.svg';
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
          <FlexColumn>
            <Button
              className={styles.margin}
              size="small"
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
              size="small"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={velgNestePeriode}
              variant="secondary-neutral"
              type="button"
              title={intl.formatMessage({ id: 'TimeLineData.nextPeriod' })}
            >
              <FormattedMessage id="TimeLineData.nextPeriodShort" />
            </Button>
            <Button
              size="small"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="secondary-neutral"
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
      {isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && (
        <span className={styles.image}>
          <Image src={checkImg} className={styles.image} />
        </span>
      )}
      {!isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && (
        <span className={styles.image}>
          <Image src={advarselImg} className={styles.image} />
        </span>
      )}
      <FormattedMessage id={periodStatus(fastsattOpptjeningAktivitet.klasse)} />
    </Panel>
  );
};

export default TimeLineData;
