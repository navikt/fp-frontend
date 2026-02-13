import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

export const BehandlingstypeVelger = () => {
  const { watch, control, setValue } = useFormContext<FormValues>();

  const values = watch('behandlingTyper');

  const behandlingTyper = useLosKodeverk('BehandlingType')
    .filter(bt => bt.kode !== '-')
    .sort((a, b) => a.kode.localeCompare(b.kode));

  return (
    <VStack gap="space-4">
      <Label size="small">
        <FormattedMessage id="Label.Behandlingstype" />
      </Label>
      {behandlingTyper.map(bt => {
        const kode = bt.kode;
        return (
          <RhfCheckbox
            key={kode}
            name="behandlingTyper"
            label={bt.navn}
            control={control}
            checked={values.includes(kode)}
            onChange={checked => {
              const nyBehandlingtyper = checked ? [...values, kode] : values.filter(v => v !== kode);
              setValue('behandlingTyper', nyBehandlingtyper, {
                shouldDirty: true,
              });
            }}
          />
        );
      })}
    </VStack>
  );
};
