import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk, TidsromPermisjonDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FormValuesFulltUttak, PermisjonFormValues } from '../../types';
import { PERIODS_WITH_NO_MORS_AKTIVITET } from '../selectUtils';
import { RenderPermisjonPeriodeFieldArray } from './RenderPermisjonPeriodeFieldArray';

interface Props {
  søkerErMor: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const PermisjonFulltUttak = ({ søkerErMor, readOnly, alleKodeverk }: Props) => {
  const { watch, control } = useFormContext<PermisjonFormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`);

  return (
    <VStack gap="space-8">
      <Label>
        <FormattedMessage id="Registrering.Permisjon.FulltUttak" />
      </Label>
      <RhfCheckbox
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`}
        control={control}
        readOnly={readOnly}
        label={<FormattedMessage id="Registrering.Permisjon.FulltUttak" />}
      />
      {fulltUttak && (
        <RenderPermisjonPeriodeFieldArray søkerErMor={søkerErMor} readOnly={readOnly} alleKodeverk={alleKodeverk} />
      )}
    </VStack>
  );
};

PermisjonFulltUttak.initialValues = (): FormValuesFulltUttak => ({
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: [],
  fulltUttak: false,
});

PermisjonFulltUttak.transformValues = (
  values: FormValuesFulltUttak,
): Pick<TidsromPermisjonDto, 'permisjonsPerioder'> => {
  if (!values.fulltUttak || !values.permisjonsPerioder) {
    return { [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: undefined };
  }
  return {
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: values.permisjonsPerioder.map(value => ({
      periodeType: value.periodeType,
      periodeFom: value.periodeFom,
      periodeTom: value.periodeTom,
      morsAktivitet: PERIODS_WITH_NO_MORS_AKTIVITET.has(notEmpty(value.periodeType)) ? undefined : value.morsAktivitet,
      flerbarnsdager: value.flerbarnsdager ?? false,
      harSamtidigUttak: value.harSamtidigUttak ?? false,
      samtidigUttaksprosent: value.samtidigUttaksprosent,
    })),
  };
};
