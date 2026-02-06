import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack } from '@navikt/ds-react';
import { RhfTextField } from '@navikt/ft-form-hooks';
import { hasValidPosOrNegInteger } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { FormValues } from './SorteringVelger';

import styles from './sorteringVelger.module.css';

export const BelopSorteringValg = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <ArrowBox>
      <Detail>
        <FormattedMessage id="SorteringVelger.FiltrerPaHeltall" />
      </Detail>
      <HStack gap="space-16">
        <RhfTextField
          name="sortering.fra"
          control={control}
          className={styles['dato']}
          validate={[hasValidPosOrNegInteger]}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
        <RhfTextField
          name="sortering.til"
          control={control}
          className={styles['dato']}
          validate={[hasValidPosOrNegInteger]}
        />
        <Detail className={styles['beløp']}>
          <FormattedMessage id="SorteringVelger.Valuta" />
        </Detail>
      </HStack>
    </ArrowBox>
  );
};
