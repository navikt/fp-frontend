import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Label } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { TimeLineButton } from '@navikt/ft-tidslinje';
import { FastsattOpptjeningAktivitet } from '@navikt/fp-types';

import checkImg from '../images/check.svg';
import advarselImg from '../images/remove.svg';
import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';

import styles from './timeLineData.module.css';

const MELLOMLIGGENDE_PERIODE = 'MELLOMLIGGENDE_PERIODE';

const isoToDdMmYyyy = (dato: string): string => {
  const parsedDate = moment(dato, ISO_DATE_FORMAT, true);
  return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : dato;
};

const backgroundStyle = (kode: string): string => ((kode === MELLOMLIGGENDE_PERIODE
|| kode === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT
|| kode === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT) ? styles.godkjent : styles.avvist);

const periodStatus = (periodState: string): string => (periodState === opptjeningAktivitetKlassifisering.BEKREFTET_AVVIST
|| periodState === opptjeningAktivitetKlassifisering.ANTATT_AVVIST ? 'OpptjeningVilkarView.Avslatt' : 'OpptjeningVilkarView.Godkjent');

const isPeriodGodkjent = (period: string): boolean => !!(period === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT
  || period === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT
  || period === MELLOMLIGGENDE_PERIODE);

interface OwnProps {
  fastsattOpptjeningAktivitet: FastsattOpptjeningAktivitet;
  selectNextPeriod: (event: React.MouseEvent) => void;
  selectPrevPeriod: (event: React.MouseEvent) => void;
}

const TimeLineData: FunctionComponent<OwnProps> = ({
  fastsattOpptjeningAktivitet,
  selectNextPeriod,
  selectPrevPeriod,
}) => {
  const intl = useIntl();
  return (
    <div>
      <Label size="small">
        <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
      </Label>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={backgroundStyle(fastsattOpptjeningAktivitet.klasse)}>
            <FlexContainer>
              <FlexRow>
                <FlexColumn className={styles.colWidth}>
                  <Label size="small">
                    {`${isoToDdMmYyyy(fastsattOpptjeningAktivitet.fom)} - ${isoToDdMmYyyy(fastsattOpptjeningAktivitet.tom)}`}
                  </Label>
                </FlexColumn>
                <FlexColumn className={styles.colWidth}>
                  {isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && (
                    <span className={styles.image}>
                      <Image
                        src={checkImg}
                        className={styles.image}
                      />
                    </span>
                  )}
                  {!isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse) && (
                    <span className={styles.image}>
                      <Image
                        src={advarselImg}
                        className={styles.image}
                      />
                    </span>
                  )}
                  <FormattedMessage id={periodStatus(fastsattOpptjeningAktivitet.klasse)} />
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </FlexColumn>
          <FlexColumn className={styles.colWidth}>
            <TimeLineButton text={intl.formatMessage({ id: 'TimeLineData.prevPeriod' })} type="prev" callback={selectPrevPeriod} />
            <TimeLineButton text={intl.formatMessage({ id: 'TimeLineData.nextPeriod' })} type="next" callback={selectNextPeriod} />
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default TimeLineData;
