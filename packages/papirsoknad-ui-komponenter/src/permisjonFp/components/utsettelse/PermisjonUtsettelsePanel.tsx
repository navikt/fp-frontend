import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk, TidsromPermisjonDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from '../../constants';
import type { FormValuesUtsettelse, PermisjonFormValues } from '../../types';
import { PERIODS_WITH_NO_MORS_AKTIVITET } from '../selectUtils';
import { RenderUtsettelsePeriodeFieldArray } from './RenderUtsettelsePeriodeFieldArray';

interface Props {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  søkerErMor: boolean;
}

/**
 * PermisjonUtsettelsePanel
 *
 * Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.
 */
export const PermisjonUtsettelsePanel = ({ readOnly, alleKodeverk, søkerErMor }: Props) => {
  const { watch, control } = useFormContext<PermisjonFormValues>();
  const skalUtsette = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;

  return (
    <VStack gap="space-8">
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
        <RenderUtsettelsePeriodeFieldArray alleKodeverk={alleKodeverk} readOnly={readOnly} søkerErMor={søkerErMor} />
      )}
    </VStack>
  );
};

PermisjonUtsettelsePanel.initialValues = (): FormValuesUtsettelse => ({
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: [],
  skalUtsette: false,
});

PermisjonUtsettelsePanel.transformValues = (
  values: FormValuesUtsettelse,
): Pick<TidsromPermisjonDto, 'utsettelsePeriode'> => ({
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: values.skalUtsette
    ? values.utsettelsePeriode?.map(value => ({
        ...value,
        morsAktivitet: PERIODS_WITH_NO_MORS_AKTIVITET.has(notEmpty(value.periodeForUtsettelse))
          ? undefined
          : value.morsAktivitet,
      }))
    : undefined,
});
