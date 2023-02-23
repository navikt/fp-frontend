import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import styles from './avregningSummary.module.css';

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
          <Label size="small">
            { `${moment(fom).format(DDMMYYYY_DATE_FORMAT)} - ${moment(tom).format(DDMMYYYY_DATE_FORMAT)}`}
          </Label>
          <VerticalSpacer sixteenPx />
          <FlexContainer>
            <FlexRow>
              <FlexColumn className={styles.resultName}>
                <BodyShort size="small">
                  <FormattedMessage id="Avregning.etterbetaling" />
                  :
                </BodyShort>
              </FlexColumn>
              <FlexColumn>
                <BodyShort size="small">
                  { formatCurrencyNoKr(etterbetaling) }
                </BodyShort>
              </FlexColumn>
            </FlexRow>
            <FlexRow>
              <FlexColumn className={styles.resultName}>
                <BodyShort size="small">
                  <FormattedMessage id="Avregning.tilbakekreving" />
                  :
                </BodyShort>
              </FlexColumn>
              <FlexColumn>
                <BodyShort size="small">
                  <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>{ formatCurrencyNoKr(feilutbetaling) }</span>
                </BodyShort>
              </FlexColumn>
              {inntrekk !== null && (
                <FlexColumn>
                  <BodyShort size="small">
                    <FormattedMessage id="Avregning.inntrekk" />
                    :
                    <span className={inntrekk ? styles.redNumber : styles.positivNumber}>{ formatCurrencyNoKr(inntrekk) }</span>
                  </BodyShort>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </>
      )}
    </div>
  </>
);

export default AvregningSummary;
