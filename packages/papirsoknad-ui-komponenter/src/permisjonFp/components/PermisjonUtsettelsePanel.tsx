import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import {
  FormValues as UtsettelsePeriodeFormValues,
  RenderUtsettelsePeriodeFieldArray,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
} from './RenderUtsettelsePeriodeFieldArray';

export type FormValues = {
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: UtsettelsePeriodeFormValues;
};

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

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalUtsette = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;

  return (
    <>
      <Label size="small">
        <FormattedMessage id="Registrering.Permisjon.Utsettelse.Title" />
      </Label>
      <VerticalSpacer sixteenPx />
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
    </>
  );
};

PermisjonUtsettelsePanel.buildInitialValues = () => ({
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalUtsette: false,
});
