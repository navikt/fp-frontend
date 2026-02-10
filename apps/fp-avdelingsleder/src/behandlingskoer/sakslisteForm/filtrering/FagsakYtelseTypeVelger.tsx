import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { FagsakYtelseType } from '@navikt/fp-types';

import { useLosKodeverk } from '../../../data/useLosKodeverk';

export type FormValues = {
  fagsakYtelseTyper: FagsakYtelseType[];
};

export const FagsakYtelseTypeVelger = () => {
  const { watch, control, setValue } = useFormContext<FormValues>();

  const values = watch('fagsakYtelseTyper');

  const alleFagsakYtelseTyper = useLosKodeverk('FagsakYtelseType')
    .filter(bt => bt.kode !== '-')
    .sort((a, b) => a.kode.localeCompare(b.kode));

  return (
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="FagsakYtelseTypeVelger.Stonadstype" />
      </Label>
      {alleFagsakYtelseTyper.map(fyt => (
        <RhfCheckbox
          key={fyt.kode}
          name="fagsakYtelseTyper"
          label={fyt.navn}
          control={control}
          checked={values.includes(fyt.kode)}
          onChange={checked => {
            setValue('fagsakYtelseTyper', checked ? [...values, fyt.kode] : values.filter(v => v !== fyt.kode), {
              shouldDirty: true,
            });
          }}
        />
      ))}
    </VStack>
  );
};
