import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk } from '@navikt/fp-types';

import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from '../../constants';
import type { FormValuesUtsettelse, PermisjonFormValues } from '../../types';
import { RenderUtsettelsePeriodeFieldArray } from './RenderUtsettelsePeriodeFieldArray';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

/**
 * PermisjonUtsettelsePanel
 *
 * Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.
 */
export const PermisjonUtsettelsePanel = ({ readOnly, alleKodeverk }: Props) => {
  const utsettelseReasons = alleKodeverk['UtsettelseÅrsak'];
  const utsettelseKvoter = alleKodeverk['UttakPeriodeType'];

  const { watch, control } = useFormContext<PermisjonFormValues>();
  const skalUtsette = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;

  return (
    <VStack gap="2">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Utsettelse.Title" />
      </Label>
      <RhfCheckbox
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`}
        control={control}
        readOnly={readOnly}
        label={<FormattedMessage id="Registrering.Permisjon.Utsettelse.UtsettUttaket" />}
      />
      {skalUtsette && (
        <RenderUtsettelsePeriodeFieldArray
          utsettelseReasons={utsettelseReasons}
          utsettelseKvoter={utsettelseKvoter}
          readOnly={readOnly}
        />
      )}
    </VStack>
  );
};

PermisjonUtsettelsePanel.initialValues = (): FormValuesUtsettelse => ({
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: [],
  skalUtsette: false,
});
