import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { KodeverkType } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import {
  FormValues as PeriodeFormValues,
  OPPHOLD_PERIODE_FIELD_ARRAY_NAME,
  RenderOppholdPeriodeFieldArray,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
} from './RenderOppholdPeriodeFieldArray';

export type FormValues = {
  skalHaOpphold?: boolean;
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: PeriodeFormValues;
};

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

  const { watch } = useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalHaOpphold = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`) || false;

  return (
    <div>
      <Label size="small">
        <FormattedMessage id="Registrering.Permisjon.Opphold.Title" />
      </Label>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalHaOpphold`}
        label={<FormattedMessage id="Registrering.Permisjon.Opphold.OppholdUttaket" />}
      />
      {skalHaOpphold && <RenderOppholdPeriodeFieldArray oppholdsReasons={oppholdsReasons} readOnly={readOnly} />}
    </div>
  );
};

PermisjonOppholdPanel.buildInitialValues = () => ({
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalHaOpphold: false,
});
