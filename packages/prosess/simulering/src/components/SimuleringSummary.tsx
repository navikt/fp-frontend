import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { periodFormat } from '@navikt/ft-utils';

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
  <VStack gap="space-4">
    <Label size="small">
      <FormattedMessage id="Simulering.bruker" />
    </Label>
    {ingenPerioderMedAvvik && (
      <BodyShort size="small">
        <FormattedMessage id="Simulering.ingenPerioder" tagName="i" />
      </BodyShort>
    )}
    {!ingenPerioderMedAvvik && (
      <Box background="neutral-soft" padding="space-20" maxWidth="300px">
        <VStack gap="space-8">
          <Label size="small">{periodFormat(fom, tom)}</Label>

          <HStack gap="space-16" justify="space-between">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.etterbetaling" />:
            </BodyShort>
            <BodyShort size="small">
              <BeløpLabel beløp={etterbetaling} kr />
            </BodyShort>
          </HStack>

          <HStack gap="space-16" justify="space-between">
            <BodyShort size="small">
              <FormattedMessage id="Simulering.tilbakekreving" />:
            </BodyShort>
            <BodyShort weight="semibold" size="small">
              <BeløpLabel beløp={feilutbetaling} rød={feilutbetaling < 0} kr />
            </BodyShort>
          </HStack>

          {inntrekk !== undefined && (
            <HStack gap="space-16" justify="space-between">
              <BodyShort size="small">
                <FormattedMessage id="Simulering.inntrekk" />:
              </BodyShort>
              <BodyShort weight="semibold" size="small">
                <BeløpLabel beløp={inntrekk} rød={inntrekk < 0} kr />
              </BodyShort>
            </HStack>
          )}
        </VStack>
      </Box>
    )}
  </VStack>
);
