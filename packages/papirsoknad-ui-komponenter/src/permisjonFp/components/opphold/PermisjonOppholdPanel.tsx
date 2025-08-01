import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk } from '@navikt/fp-types';

import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FormValuesOpphold } from '../../types';
import { RenderOppholdPeriodeFieldArray } from './RenderOppholdPeriodeFieldArray';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * PermisjonOppholdPanel
 *
 * Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.
 */
export const PermisjonOppholdPanel = ({ readOnly, alleKodeverk }: Props) => {
  const oppholdsReasons = alleKodeverk['OppholdÅrsak'];

  const { watch, control } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValuesOpphold }>();
  const skalHaOpphold = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`) || false;

  return (
    <VStack gap="space-8">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Opphold.Title" />
      </Label>
      <RhfCheckbox
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`}
        control={control}
        readOnly={readOnly}
        label={<FormattedMessage id="Registrering.Permisjon.Opphold.OppholdUttaket" />}
      />
      {skalHaOpphold && <RenderOppholdPeriodeFieldArray oppholdsReasons={oppholdsReasons} readOnly={readOnly} />}
    </VStack>
  );
};

PermisjonOppholdPanel.initialValues = (): FormValuesOpphold => ({
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: [],
  skalHaOpphold: false,
});
