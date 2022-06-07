import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Element, Undertittel } from 'nav-frontend-typografi';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';

import ForeldreType from '@fpsak-frontend/kodeverk/src/foreldreType';

import { UseFormGetValues } from 'react-hook-form';
import { SkjemaGruppe } from 'nav-frontend-skjema';

import PermisjonUtsettelsePanel, { FormValues as FormValuesUtsettelse } from './PermisjonUtsettelsePanel';
import PermisjonGraderingPanel, { FormValues as FormValuesGradering } from './PermisjonGraderingPanel';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME } from './RenderGraderingPeriodeFieldArray';
import PermisjonOverforingAvKvoterPanel, { FormValues as FormValuesOverforing } from './PermisjonOverforingAvKvoterPanel';
import RenderPermisjonPeriodeFieldArray, { PERMISJON_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesPermisjon } from './RenderPermisjonPeriodeFieldArray';
import PermisjonOppholdPanel, { FormValues as FormValuesOpphold } from './PermisjonOppholdPanel';
import { UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from './RenderUtsettelsePeriodeFieldArray';
import { OVERFORING_PERIODE_FIELD_ARRAY_NAME } from './RenderOverforingAvKvoterFieldArray';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME } from './RenderOppholdPeriodeFieldArray';

import styles from './permisjonPanel.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

type VirtuellFeilType = {
  notRegisteredInput?: string;
};

type TidsromPermisjon = {
  fulltUttak: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
} & FormValuesUtsettelse & FormValuesOpphold & FormValuesOverforing & FormValuesGradering & VirtuellFeilType;

export type FormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};

const getIsRequired = (
  getValues: UseFormGetValues<FormValues>,
) => {
  const fulltUttak = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;
  const skalGradere = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalGradere`) || false;
  const skalUtsette = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalUtsette`) || false;
  const skalOvertaKvote = getValues(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.skalOvertaKvote`) || false;
  return !fulltUttak && !skalGradere && !skalUtsette && !skalOvertaKvote;
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

  const {
    watch, setError, clearErrors, getValues, formState,
  } = formHooks.useFormContext<FormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;

  const isError = getIsRequired(getValues);
  useEffect(() => {
    if (isError) {
      setError(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`, {
        type: 'custom',
        message: intl.formatMessage({ id: 'PermisjonPanel.MinstEnPeriodeRequired' }),
      });
    }
    if (!isError) {
      clearErrors(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.notRegisteredInput`);
    }
  }, [isError]);

  return (
    <BorderBox>
      <div className={styles.flexContainer}>
        <SkjemaGruppe feil={formState.errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX]?.notRegisteredInput?.message}>
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
        </SkjemaGruppe>
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

  if (!values.tidsromPermisjon.fulltUttak) {
    newValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon.skalGradere) {
    newValues[GRADERING_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon.skalUtsette) {
    newValues[UTSETTELSE_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon.skalOvertaKvote) {
    newValues[OVERFORING_PERIODE_FIELD_ARRAY_NAME] = undefined;
  }
  if (!values.tidsromPermisjon.skalHaOpphold) {
    newValues[OPPHOLD_PERIODE_FIELD_ARRAY_NAME] = undefined;
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
