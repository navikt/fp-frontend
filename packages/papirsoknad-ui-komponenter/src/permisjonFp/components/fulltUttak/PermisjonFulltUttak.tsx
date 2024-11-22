import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ForeldreType } from '@navikt/fp-kodeverk';
import { Label, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/fp-types';
import { FromValuesFulltUttak, PermisjonFormValues } from '../../types';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, PERMISJON_PERIODE_FIELD_ARRAY_NAME } from '../../constants';
import { RenderPermisjonPeriodeFieldArray } from './RenderPermisjonPeriodeFieldArray';

interface Props {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

export const PermisjonFulltUttak = ({ foreldreType, readOnly, alleKodeverk }: Props) => {
  const { watch } = useFormContext<PermisjonFormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="Registrering.Permisjon.FulltUttak" />
      </Label>
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`}
        label={<FormattedMessage id="Registrering.Permisjon.FulltUttak" />}
      />
      {fulltUttak && (
        <RenderPermisjonPeriodeFieldArray
          sokerErMor={foreldreType === ForeldreType.MOR}
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
