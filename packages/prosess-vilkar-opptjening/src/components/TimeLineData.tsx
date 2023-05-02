import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Image, PeriodLabel } from '@navikt/ft-ui-komponenter';

import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import checkImg from '../images/check.svg';
import advarselImg from '../images/remove.svg';
import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';

import styles from './timeLineData.module.css';

const MELLOMLIGGENDE_PERIODE = 'MELLOMLIGGENDE_PERIODE';

const backgroundStyle = (kode: string): string =>
  kode === MELLOMLIGGENDE_PERIODE ||
  kode === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT ||
  kode === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT
    ? styles.godkjent
    : styles.avvist;

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
}

const TimeLineData: FunctionComponent<OwnProps> = ({ fastsattOpptjeningAktivitet }) => (
  <div className={backgroundStyle(fastsattOpptjeningAktivitet.klasse)}>
    <Label size="small">
      <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
    </Label>
    <FlexContainer>
      <FlexRow>
        <FlexColumn className={styles.colWidth}>
          <Label size="small">
            <PeriodLabel
              dateStringFom={fastsattOpptjeningAktivitet.fom}
              dateStringTom={fastsattOpptjeningAktivitet.tom}
            />
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.colWidth}>
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
        </FlexColumn>
      </FlexRow>
    </FlexContainer>
  </div>
);

export default TimeLineData;
