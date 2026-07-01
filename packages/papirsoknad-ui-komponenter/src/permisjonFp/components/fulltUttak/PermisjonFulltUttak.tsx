import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';

import type { AlleKodeverk, ForeldreType, TidsromPermisjonDto } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FromValuesFulltUttak, PermisjonFormValues } from '../../types';
import { PERIODS_WITH_NO_MORS_AKTIVITET, RenderPermisjonPeriodeFieldArray } from './RenderPermisjonPeriodeFieldArray';

interface Props {
  foreldreType: ForeldreType;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const PermisjonFulltUttak = ({ foreldreType, readOnly, alleKodeverk }: Props) => {
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
        <RenderPermisjonPeriodeFieldArray
          søkerErMor={foreldreType === 'MOR'}
          readOnly={readOnly}
          alleKodeverk={alleKodeverk}
        />
      )}
    </VStack>
  );
};

PermisjonFulltUttak.initialValues = (): FromValuesFulltUttak => ({
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: [],
  fulltUttak: false,
});

PermisjonFulltUttak.transformValues = (
  values: FromValuesFulltUttak,
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
