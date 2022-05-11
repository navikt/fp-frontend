import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import moment from 'moment';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import { Image } from '@navikt/ft-ui-komponenter';

import checkImg from '@fpsak-frontend/assets/images/check.svg';
import advarselImg from '@fpsak-frontend/assets/images/remove.svg';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { TimeLineButton } from '@navikt/ft-tidslinje';
import { FastsattOpptjeningAktivitet } from '@fpsak-frontend/types';

import opptjeningAktivitetKlassifisering from '../kodeverk/opptjeningAktivitetKlassifisering';

import styles from './timeLineData.less';

const MELLOMLIGGENDE_PERIODE = 'MELLOMLIGGENDE_PERIODE';

const isoToDdMmYyyy = (dato: string): string => {
  const parsedDate = moment(dato, ISO_DATE_FORMAT, true);
  return parsedDate.isValid() ? parsedDate.format(DDMMYYYY_DATE_FORMAT) : dato;
};

const backgroundStyle = (kode: string): string => ((kode === MELLOMLIGGENDE_PERIODE
|| kode === opptjeningAktivitetKlassifisering.ANTATT_GODKJENT
|| kode === opptjeningAktivitetKlassifisering.BEKREFTET_GODKJENT) ? 'godkjent' : 'avvist');

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
      <Row>
        <Element>
          <FormattedMessage id="OpptjeningVilkarView.DetailsForSelectedPeriod" />
        </Element>
      </Row>
      <Row>
        <Column xs="6" className={backgroundStyle(fastsattOpptjeningAktivitet.klasse)}>
          <Row className={styles.timeLineDataContainer}>
            <Column xs="6">
              <div>
                <Element>
                  {`${isoToDdMmYyyy(fastsattOpptjeningAktivitet.fom)} - ${isoToDdMmYyyy(fastsattOpptjeningAktivitet.tom)}`}
                </Element>
              </div>
            </Column>
            <Column xs="6">
              {isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse)
              && (
              <span className={styles.image}>
                <Image
                  src={checkImg}
                  className={styles.image}
                />
              </span>
              )}
              {!isPeriodGodkjent(fastsattOpptjeningAktivitet.klasse)
            && (
            <span className={styles.image}>
              <Image
                src={advarselImg}
                className={styles.image}
              />
            </span>
            )}
              <FormattedMessage id={periodStatus(fastsattOpptjeningAktivitet.klasse)} />
            </Column>
          </Row>
        </Column>
        <Column xs="6">
          <TimeLineButton text={intl.formatMessage({ id: 'TimeLineData.prevPeriod' })} type="prev" callback={selectPrevPeriod} />
          <TimeLineButton text={intl.formatMessage({ id: 'TimeLineData.nextPeriod' })} type="next" callback={selectNextPeriod} />
        </Column>
      </Row>
      <Row />
    </div>
  );
};

export default TimeLineData;
