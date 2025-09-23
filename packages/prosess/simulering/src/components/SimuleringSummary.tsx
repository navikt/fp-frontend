import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

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
  <VStack gap="space-16">
    <BodyShort size="small" className={styles['summaryTitle']}>
      <FormattedMessage id="Simulering.bruker" />
    </BodyShort>
    <div className={styles['infoSummary']}>
      {ingenPerioderMedAvvik && (
        <div className={styles['ingenPerioder']}>
          <FormattedMessage id="Simulering.ingenPerioder" />
        </div>
      )}
      {!ingenPerioderMedAvvik && (
        <VStack gap="space-16">
          <Label size="small">{periodFormat(fom, tom)}</Label>
          <HStack gap="space-16">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.etterbetaling" />:
            </BodyShort>
            <BodyShort size="small">
              <BeløpLabel beløp={etterbetaling} />
            </BodyShort>
          </HStack>
          <HStack gap="space-16">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.tilbakekreving" />:
            </BodyShort>
            <BodyShort weight="semibold" size="small" className={styles['number']}>
              <BeløpLabel beløp={feilutbetaling} rød={feilutbetaling < 0} />
            </BodyShort>
          </HStack>
          {inntrekk != undefined && (
            <HStack gap="space-16">
              <BodyShort size="small">
                <FormattedMessage id="Simulering.inntrekk" />:
              </BodyShort>
              <BodyShort weight="semibold" size="small" className={styles['number']}>
                <BeløpLabel beløp={inntrekk} rød={inntrekk < 0} />
              </BodyShort>
            </HStack>
          )}
        </VStack>
      )}
    </div>
  </VStack>
);
