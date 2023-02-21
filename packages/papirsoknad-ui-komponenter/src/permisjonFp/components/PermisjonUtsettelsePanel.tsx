import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { formHooks, CheckboxField } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk } from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import RenderUtsettelsePeriodeFieldArray, {
  UTSETTELSE_PERIODE_FIELD_ARRAY_NAME,
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  FormValues as UtsettelsePeriodeFormValues,
} from './RenderUtsettelsePeriodeFieldArray';

export type FormValues = {
  skalUtsette?: boolean;
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: UtsettelsePeriodeFormValues;
}

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => any;
}

/**
 * PermisjonUtsettelsePanel
 *
 * Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form komponent.
 */
const PermisjonUtsettelsePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
}) => {
  const utsettelseReasons = alleKodeverk[KodeverkType.UTSETTELSE_AARSAK_TYPE];
  const utsettelseKvoter = alleKodeverk[KodeverkType.UTSETTELSE_GRADERING_KVOTE];

  const { watch } = formHooks.useFormContext<{[TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalUtsette = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;

  return (
    <>
      <Label size="small"><FormattedMessage id="Registrering.Permisjon.Utsettelse.Title" /></Label>
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

export default PermisjonUtsettelsePanel;
