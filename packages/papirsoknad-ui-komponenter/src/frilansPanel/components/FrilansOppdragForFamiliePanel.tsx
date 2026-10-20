import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { FRILANS_NAME_PREFIX } from '../constants';
import type { FrilansFormValues, FrilansSubFormValues } from '../types';
import { FrilansOppdragForFamilieFieldArray } from './FrilansOppdragForFamilieFieldArray';

export const FrilansOppdragForFamiliePanel = () => {
  const { watch, control } = useFormContext<FrilansFormValues>();
  const harHattOppdragForFamilie = watch(`${FRILANS_NAME_PREFIX}.harHattOppdragForFamilie`);

  return (
    <VStack gap="space-12">
      <TrueFalseInput
        name={`${FRILANS_NAME_PREFIX}.harHattOppdragForFamilie`}
        control={control}
        label={<FormattedMessage id="Registrering.FrilansOppdrag.HarHattOppdragForFamilie" />}
      />
      {harHattOppdragForFamilie && (
        <ArrowBox>
          <Label size="small">
            <FormattedMessage id="Registrering.FrilansOppdrag.OppgiPeriode" />
          </Label>
          <FrilansOppdragForFamilieFieldArray />
        </ArrowBox>
      )}
    </VStack>
  );
};

FrilansOppdragForFamiliePanel.initialValues = (): FrilansSubFormValues => ({
  oppdragPerioder: [
    {
      fomDato: '',
      tomDato: '',
      oppdragsgiver: '',
    },
  ],
});

FrilansOppdragForFamiliePanel.transformValues = ({
  harHattOppdragForFamilie,
  oppdragPerioder,
}: FrilansSubFormValues): FrilansSubFormValues => ({
  harHattOppdragForFamilie,
  oppdragPerioder: harHattOppdragForFamilie ? oppdragPerioder : undefined,
});
