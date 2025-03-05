import { FormattedMessage } from 'react-intl';

import { Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr } from '@navikt/ft-utils';

import type { BeregningsresultatEs } from '@navikt/fp-types';

import styles from './beregningsresultatEngangsstonadForm.module.css';

interface Props {
  behandlingResultatstruktur?: BeregningsresultatEs;
}

/**
 * BeregningsresultatEngangsstonadForm
 *
 * Viser beregnet engangsstønad.
 */
export const BeregningsresultatEngangsstonadForm = ({
  behandlingResultatstruktur = {
    beregnetTilkjentYtelse: 0,
    antallBarn: 0,
    satsVerdi: 0,
  },
}: Props) => {
  return (
    <VStack gap="4" className={styles.container}>
      <Heading size="small">
        <FormattedMessage id="BeregningEngangsstonadForm.Beregning" />
      </Heading>
      <VStack gap="2">
        <HStack justify="space-between">
          <Detail>
            <FormattedMessage id="BeregningEngangsstonadForm.Sats" />
          </Detail>
          <Label size="small">
            {behandlingResultatstruktur?.satsVerdi ? formatCurrencyWithKr(behandlingResultatstruktur.satsVerdi) : '-'}
          </Label>
        </HStack>
        <HStack justify="space-between">
          <Detail>
            <FormattedMessage id="BeregningEngangsstonadForm.AntallBarn" />
          </Detail>
          <Label size="small">{behandlingResultatstruktur?.antallBarn ?? '-'}</Label>
        </HStack>
        <AvsnittSkiller dividerParagraf={true} />
        <HStack justify="space-between">
          <Detail>
            <FormattedMessage id="BeregningEngangsstonadForm.BeregnetEngangsstonad" />
          </Detail>
          <Label size="small">
            {behandlingResultatstruktur?.beregnetTilkjentYtelse
              ? formatCurrencyWithKr(behandlingResultatstruktur.beregnetTilkjentYtelse)
              : '-'}
          </Label>
        </HStack>
      </VStack>
    </VStack>
  );
};
