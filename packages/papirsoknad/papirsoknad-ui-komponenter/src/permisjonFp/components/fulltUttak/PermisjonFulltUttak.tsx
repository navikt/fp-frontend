import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';

import { ForeldreType } from '@navikt/fp-kodeverk';
import type { AlleKodeverk } from '@navikt/fp-types';

import { PERMISJON_PERIODE_FIELD_ARRAY_NAME, TIDSROM_PERMISJON_FORM_NAME_PREFIX } from '../../constants';
import type { FromValuesFulltUttak, PermisjonFormValues } from '../../types';
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
      <Label>
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
