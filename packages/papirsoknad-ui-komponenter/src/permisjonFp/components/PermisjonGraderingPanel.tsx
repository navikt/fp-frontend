import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label } from '@navikt/ds-react';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkType, arbeidskategori } from '@navikt/fp-kodeverk';
import { AlleKodeverk } from '@navikt/fp-types';

import RenderGraderingPeriodeFieldArray, {
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  FormValues as GraderingPeriodeFormValues,
} from './RenderGraderingPeriodeFieldArray';

export type FormValues = {
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriodeFormValues;
};

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  transformValues: (formValues: FormValues) => any;
}

/**
 * PermisjonGraderingPanel
 *
 * Viser panel for gradering
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent
 */
const PermisjonGraderingPanel: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, alleKodeverk }) => {
  const graderingKvoter = alleKodeverk[KodeverkType.UTSETTELSE_GRADERING_KVOTE];
  const arbeidskategoriTyper = alleKodeverk[KodeverkType.ARBEIDSKATEGORI];

  const { watch } = formHooks.useFormContext<{ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalGradere = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;

  return (
    <div>
      <Label size="small">
        <FormattedMessage id="Registrering.Permisjon.Gradering.Title" />
      </Label>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        readOnly={readOnly}
        name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`}
        label={<FormattedMessage id="Registrering.Permisjon.Gradering.GraderUttaket" />}
      />
      {skalGradere && (
        <RenderGraderingPeriodeFieldArray
          graderingKvoter={graderingKvoter}
          arbeidskategoriTyper={arbeidskategoriTyper}
          readOnly={readOnly}
        />
      )}
    </div>
  );
};

PermisjonGraderingPanel.transformValues = (formValues: FormValues) => {
  const perioder = formValues[GRADERING_PERIODE_FIELD_ARRAY_NAME];
  return perioder.map(periode => {
    if (periode.arbeidskategoriType) {
      return {
        ...periode,
        erArbeidstaker: periode.arbeidskategoriType === arbeidskategori.ARBEIDSTAKER,
        erFrilanser: periode.arbeidskategoriType === arbeidskategori.FRILANSER,
        erSelvstNæringsdrivende: periode.arbeidskategoriType === arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE,
      };
    }
    return periode;
  });
};

PermisjonGraderingPanel.buildInitialValues = () => ({
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalGradere: false,
});

export default PermisjonGraderingPanel;
