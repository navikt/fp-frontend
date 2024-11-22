import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import { useFormContext } from 'react-hook-form';
import { RenderOppholdPeriodeFieldArray } from './RenderOppholdPeriodeFieldArray';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import { FormValuesOpphold } from '../../types';

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
  const oppholdsReasons = alleKodeverk[KodeverkType.OPPHOLD_ARSAK];

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValuesOpphold }>();
  const skalHaOpphold = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`) || false;

  return (
    <VStack gap="2">
      <Label size="small">
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
