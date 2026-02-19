import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

export const FagsakYtelseTypeVelger = () => {
  const { watch, control, setValue } = useFormContext<FormValues>();

  const values = watch('fagsakYtelseTyper');

  const alleFagsakYtelseTyper = useLosKodeverk('FagsakYtelseType').sort((a, b) => a.kode.localeCompare(b.kode));

  return (
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Label.Stønadstype" />
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
