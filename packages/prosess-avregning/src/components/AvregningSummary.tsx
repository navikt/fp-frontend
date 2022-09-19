import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Label, BodyShort } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './avregningSummary.less';

interface OwnProps {
  fom: string;
  tom: string;
  feilutbetaling: number;
  etterbetaling: number;
  inntrekk?: number;
  ingenPerioderMedAvvik?: boolean;
}

/**
 * Avregning oppsummering
 */
const AvregningSummary: FunctionComponent<OwnProps> = ({
  fom,
  tom,
  feilutbetaling,
  etterbetaling,
  inntrekk,
  ingenPerioderMedAvvik,
}) => (
  <>
    <BodyShort size="small" className={styles.summaryTitle}><FormattedMessage id="Avregning.bruker" /></BodyShort>
    <VerticalSpacer eightPx />
    <div className={styles.infoSummary}>
      {ingenPerioderMedAvvik && (
        <div className={styles.ingenPerioder}>
          <FormattedMessage id="Avregning.ingenPerioder" />
        </div>
      )}
      {!ingenPerioderMedAvvik && (
        <>
          <Row>
            <Column xs="12">
              <Label size="small">
                { `${moment(fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(tom).format(DDMMYYYY_DATE_FORMAT)}`}
              </Label>
            </Column>
          </Row>
          <div className={styles.resultSum}>
            <Row>
              <Column xs="3">
                <BodyShort size="small" className={styles.resultName}>
                  <FormattedMessage id="Avregning.etterbetaling" />
                  :
                </BodyShort>
              </Column>
              <Column xs="2">
                <span className={styles.number}>{ formatCurrencyNoKr(etterbetaling) }</span>
              </Column>
            </Row>
            <Row className={styles.redNumbers}>
              <Column xs="3">
                <BodyShort size="small" className={styles.resultName}>
                  <FormattedMessage id="Avregning.tilbakekreving" />
                  :
                </BodyShort>
              </Column>
              <Column xs="2">
                <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>{ formatCurrencyNoKr(feilutbetaling) }</span>
              </Column>
              {inntrekk !== null && (
                <Column xs="4">
                  <BodyShort size="small">
                    <FormattedMessage id="Avregning.inntrekk" />
                    :
                    <span className={inntrekk ? styles.lastNumberRed : styles.lastNumberPositiv}>{ formatCurrencyNoKr(inntrekk) }</span>
                  </BodyShort>
                </Column>
              )}
            </Row>
          </div>
        </>
      )}
    </div>
  </>
);

export default AvregningSummary;
