import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';

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

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValuesOpphold }>();
  const skalHaOpphold = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`) || false;

  return (
    <VStack gap="2">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Opphold.Title" />
      </Label>
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`}
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
