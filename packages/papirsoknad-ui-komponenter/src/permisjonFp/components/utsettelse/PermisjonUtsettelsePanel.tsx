import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';

import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import { useFormContext } from 'react-hook-form';
import { RenderUtsettelsePeriodeFieldArray } from './RenderUtsettelsePeriodeFieldArray';
import { UTSETTELSE_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import { FormValuesUtsettelse, PermisjonFormValues } from '../../types';

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
  const utsettelseReasons = alleKodeverk[KodeverkType.UTSETTELSE_AARSAK_TYPE];
  const utsettelseKvoter = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE];

  const { watch } = useFormContext<PermisjonFormValues>();
  const skalUtsette = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;

  return (
    <VStack gap="2">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.Utsettelse.Title" />
      </Label>
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`}
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
