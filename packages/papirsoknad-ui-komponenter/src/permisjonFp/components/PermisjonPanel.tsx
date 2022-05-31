import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { Element, Undertittel } from 'nav-frontend-typografi';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, formHooks, SkjemaGruppeMedFeilviser } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';

import ForeldreType from '@fpsak-frontend/kodeverk/src/foreldreType';

import { UseFormGetValues } from 'react-hook-form';
import PermisjonUtsettelsePanel, { FormValues as FormValuesUtsettelse } from './PermisjonUtsettelsePanel';
import PermisjonGraderingPanel, { FormValues as FormValuesGradering } from './PermisjonGraderingPanel';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME } from './RenderGraderingPeriodeFieldArray';
import PermisjonOverforingAvKvoterPanel, { FormValues as FormValuesOverforing } from './PermisjonOverforingAvKvoterPanel';
import RenderPermisjonPeriodeFieldArray, { PERMISJON_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesPermisjon } from './RenderPermisjonPeriodeFieldArray';
import PermisjonOppholdPanel, { FormValues as FormValuesOpphold } from './PermisjonOppholdPanel';

import styles from './permisjonPanel.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

type TidsromPermisjon = {
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
} & FormValuesUtsettelse & FormValuesOpphold & FormValuesOverforing & FormValuesGradering;

export type FormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};

const getIsRequired = (
  getValues: UseFormGetValues<FormValues>,
  intl: IntlShape,
) => () => {
  const fulltUttak = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;
  const skalGradere = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;
  const skalUtsette = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;
  const skalOvertaKvote = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;

  if (!fulltUttak && !skalGradere && !skalUtsette && !skalOvertaKvote) {
    return intl.formatMessage({ id: 'PermisjonPanel.MinstEnPeriodeRequired' });
  }
  return undefined;
};

interface OwnProps {
  foreldreType: string;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  transformValues: (values: FormValues) => any;
}

/**
 * PermisjonPanel
 *
 * Viser permisjonspanel for mor eller far/medmor
 */
const PermisjonPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  foreldreType,
  readOnly,
  alleKodeverk,
}) => {
  const intl = useIntl();

  const { watch, getValues } = formHooks.useFormContext<FormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;

  return (
    <BorderBox>
      <div className={styles.flexContainer}>
        <SkjemaGruppeMedFeilviser
          name="felles-validering"
          validate={[getIsRequired(getValues, intl)]}
        >
          <Undertittel><FormattedMessage id="Registrering.Permisjon.Title" /></Undertittel>
          <VerticalSpacer sixteenPx />
          <VerticalSpacer eightPx />
          <Element><FormattedMessage id="Registrering.Permisjon.FulltUttak" /></Element>
          <VerticalSpacer eightPx />
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
          <VerticalSpacer twentyPx />
          <PermisjonOverforingAvKvoterPanel
            readOnly={readOnly}
            foreldreType={foreldreType}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonUtsettelsePanel
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonGraderingPanel
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonOppholdPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        </SkjemaGruppeMedFeilviser>
      </div>
    </BorderBox>
  );
};

PermisjonPanel.transformValues = (values: FormValues) => {
  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX];
  const newValues = permisjonValues;
  const permisjonsdata = permisjonValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon.fulltUttak && permisjonsdata) {
    newValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = RenderPermisjonPeriodeFieldArray.transformValues(permisjonsdata);
  }
  const graderingdata = permisjonValues[GRADERING_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon.skalGradere && graderingdata) {
    newValues[GRADERING_PERIODE_FIELD_ARRAY_NAME] = PermisjonGraderingPanel.transformValues(permisjonValues);
  }
  return newValues;
};

PermisjonPanel.buildInitialValues = () => ({
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    ...PermisjonUtsettelsePanel.buildInitialValues(),
    ...PermisjonGraderingPanel.buildInitialValues(),
    ...PermisjonOverforingAvKvoterPanel.buildInitialValues(),
    ...PermisjonOppholdPanel.buildInitialValues(),
    [PERMISJON_PERIODE_FIELD_ARRAY_NAME]: [{}],
    fulltUttak: false,
  },
});

export default PermisjonPanel;
