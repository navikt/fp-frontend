import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import styles from './simuleringSummary.module.css';

interface Props {
  fom: string;
  tom: string;
  feilutbetaling: number;
  etterbetaling: number;
  inntrekk?: number;
  ingenPerioderMedAvvik?: boolean;
}

/**
 * Simulering oppsummering
 */
export const SimuleringSummary = ({
  fom,
  tom,
  feilutbetaling,
  etterbetaling,
  inntrekk,
  ingenPerioderMedAvvik,
}: Props) => (
  <VStack gap="4">
    <BodyShort size="small" className={styles.summaryTitle}>
      <FormattedMessage id="Simulering.bruker" />
    </BodyShort>
    <div className={styles.infoSummary}>
      {ingenPerioderMedAvvik && (
        <div className={styles.ingenPerioder}>
          <FormattedMessage id="Simulering.ingenPerioder" />
        </div>
      )}
      {!ingenPerioderMedAvvik && (
        <VStack gap="4">
          <Label size="small">
            {`${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`}
          </Label>
          <HStack gap="4">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.etterbetaling" />:
            </BodyShort>
            <BodyShort size="small">{formatCurrencyNoKr(etterbetaling)}</BodyShort>
          </HStack>
          <HStack gap="4">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.tilbakekreving" />:
            </BodyShort>
            <BodyShort size="small">
              <span className={feilutbetaling ? styles.redNumber : styles.positivNumber}>
                {formatCurrencyNoKr(feilutbetaling)}
              </span>
            </BodyShort>
            {inntrekk !== null && (
              <BodyShort size="small">
                <FormattedMessage id="Simulering.inntrekk" />:
                <span className={inntrekk ? styles.redNumber : styles.positivNumber}>
                  {formatCurrencyNoKr(inntrekk)}
                </span>
              </BodyShort>
            )}
          </HStack>
        </VStack>
      )}
    </div>
  </VStack>
);
