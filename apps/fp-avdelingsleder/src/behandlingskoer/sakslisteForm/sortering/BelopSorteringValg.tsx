import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack } from '@navikt/ds-react';
import { RhfNumericField } from '@navikt/ft-form-hooks';
import { maxValue, minValue } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { FormValues } from '../UtvalgskriterierForSakslisteForm';
import { validerTilLikEllerStørreEnnFra } from './DatoSorteringValg';

import styles from './sorteringVelger.module.css';

export const BelopSorteringValg = () => {
  const { watch, control } = useFormContext<FormValues>();
  const fraVerdi = watch('sortering.fra');
  return (
    <ArrowBox marginTop={4}>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="space-8">
        <RhfNumericField
          name="sortering.fra"
          label={<FormattedMessage id="SorteringVelger.Fra" />}
          control={control}
          htmlSize={6}
          validate={[minValue(0), maxValue(10_000_000)]}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <RhfNumericField
          name="sortering.til"
          label={<FormattedMessage id="SorteringVelger.Til" />}
          control={control}
          htmlSize={6}
          validate={[minValue(0), maxValue(10_000_000), validerTilLikEllerStørreEnnFra(fraVerdi)]}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
    </ArrowBox>
  );
};
