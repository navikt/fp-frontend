import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element } from 'nav-frontend-typografi';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';
import { AlleKodeverk } from '@fpsak-frontend/types';

import RenderGraderingPeriodeFieldArray, {
  TIDSROM_PERMISJON_FORM_NAME_PREFIX,
  GRADERING_PERIODE_FIELD_ARRAY_NAME,
  FormValues as GraderingPeriodeFormValues,
} from './RenderGraderingPeriodeFieldArray';

export type FormValues = {
  skalGradere?: boolean;
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: GraderingPeriodeFormValues
}

type Periode = {
  arbeidskategoriType: string;
  erArbeidstaker: boolean;
  erFrilanser: boolean;
  erSelvstNæringsdrivende: boolean;
}

interface OwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  transformValues: (perioder: Periode[]) => any;
}

/**
 * PermisjonGraderingPanel
 *
 * Viser panel for gradering
 * Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent
 */
const PermisjonGraderingPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleKodeverk,
}) => {
  const graderingKvoter = alleKodeverk[kodeverkTyper.UTSETTELSE_GRADERING_KVOTE];
  const arbeidskategoriTyper = alleKodeverk[kodeverkTyper.ARBEIDSKATEGORI];

  const { watch } = formHooks.useFormContext<{[TIDSROM_PERMISJON_FORM_NAME_PREFIX]: FormValues }>();
  const skalGradere = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;

  return (
    <div>
      <Element><FormattedMessage id="Registrering.Permisjon.Gradering.Title" /></Element>
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

PermisjonGraderingPanel.transformValues = (perioder: Periode[]) => perioder.map((p) => {
  const { ...periode } = p;
  if (p.arbeidskategoriType) {
    periode.erArbeidstaker = p.arbeidskategoriType === arbeidskategori.ARBEIDSTAKER;
    periode.erFrilanser = p.arbeidskategoriType === arbeidskategori.FRILANSER;
    periode.erSelvstNæringsdrivende = p.arbeidskategoriType === arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE;
  }
  return periode;
});

PermisjonGraderingPanel.buildInitialValues = () => ({
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalGradere: false,
});

export default PermisjonGraderingPanel;
