import React, { FunctionComponent } from 'react';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Element, Undertittel } from 'nav-frontend-typografi';

import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { dateRangesNotOverlappingCrossTypes } from '@navikt/ft-utils';
import { CheckboxField } from '@fpsak-frontend/form';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk } from '@fpsak-frontend/types';

import PermisjonUtsettelsePanel, { UTSETTELSE_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesUtsettelse } from './PermisjonUtsettelsePanel';
import PermisjonGraderingPanel, { GRADERING_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesGradering } from './PermisjonGraderingPanel';
import PermisjonOverforingAvKvoterPanel, { OVERFORING_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesOverforing } from './PermisjonOverforingAvKvoterPanel';
import RenderPermisjonPeriodeFieldArray, { FormValues as FormValuesPermisjon } from './RenderPermisjonPeriodeFieldArray';
import PermisjonOppholdPanel, { OPPHOLD_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesOpphold } from './PermisjonOppholdPanel';

import styles from './permisjonPanel.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

export const PERMISJON_PERIODE_FIELD_ARRAY_NAME = 'permisjonsPerioder';

interface PureOwnProps {
  soknadData: SoknadData;
  form: string;
  readOnly: boolean;
  error?: {
    permisjonsError?: string;
  };
  alleKodeverk: AlleKodeverk;
  submitFailed: boolean;
}

interface MappedOwnProps {
  fulltUttak?: boolean;
  visFeilMelding: boolean;
}

type TidsromPermisjon = {
  fulltUttak: boolean;
  skalUtsette: boolean;
  skalGradere: boolean;
  skalHaOpphold: boolean;
  skalOvertaKvote: boolean;
  [PERMISJON_PERIODE_FIELD_ARRAY_NAME]?: FormValuesPermisjon[];
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]?: FormValuesUtsettelse[];
  [GRADERING_PERIODE_FIELD_ARRAY_NAME]?: FormValuesGradering[];
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]?: FormValuesOpphold[];
  [OVERFORING_PERIODE_FIELD_ARRAY_NAME]?: FormValuesOverforing[];
};

export type FormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};

interface StaticFunctions {
  buildInitialValues: () => any;
  validate: (values: FormValues) => any;
  transformValues: (values: Required<FormValues>) => any;
}

/**
 * PermisjonPanel
 *
 * Presentasjonskomponent: Viser permisjonspanel for mor eller far/medmor
 */
export const PermisjonPanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  soknadData,
  fulltUttak,
  form,
  readOnly,
  error,
  visFeilMelding,
  alleKodeverk,
}) => (
  <FormSection name={TIDSROM_PERMISJON_FORM_NAME_PREFIX}>
    <BorderBox>
      <div className={styles.flexContainer}>
        <Undertittel><FormattedMessage id="Registrering.Permisjon.Title" /></Undertittel>
        <VerticalSpacer sixteenPx />
        { visFeilMelding && error && (
          <div role="alert" aria-live="assertive">
            <div className="skjemaelement__feilmelding"><FormattedMessage id={error.permisjonsError} /></div>
          </div>
        )}
        <VerticalSpacer eightPx />
        <Element><FormattedMessage id="Registrering.Permisjon.FulltUttak" /></Element>
        <VerticalSpacer eightPx />
        <CheckboxField
          className={visFeilMelding ? styles.showErrorBackground : ''}
          readOnly={readOnly}
          name="fulltUttak"
          label={<FormattedMessage id="Registrering.Permisjon.FulltUttak" />}
        />
        { fulltUttak
          && (
            <FieldArray
              name={PERMISJON_PERIODE_FIELD_ARRAY_NAME}
              // @ts-ignore
              component={RenderPermisjonPeriodeFieldArray}
              periodePrefix={PERMISJON_PERIODE_FIELD_ARRAY_NAME}
              namePrefix={TIDSROM_PERMISJON_FORM_NAME_PREFIX}
              sokerErMor={soknadData.getForeldreType() === foreldreType.MOR}
              readOnly={readOnly}
              alleKodeverk={alleKodeverk}
            />
          )}
        <VerticalSpacer twentyPx />
        <PermisjonOverforingAvKvoterPanel
          visFeilMelding={visFeilMelding}
          form={form}
          readOnly={readOnly}
          soknadData={soknadData}
          namePrefix={TIDSROM_PERMISJON_FORM_NAME_PREFIX}
          alleKodeverk={alleKodeverk}
        />
        <VerticalSpacer twentyPx />
        <PermisjonUtsettelsePanel
          visFeilMelding={visFeilMelding}
          form={form}
          readOnly={readOnly}
          namePrefix={TIDSROM_PERMISJON_FORM_NAME_PREFIX}
          alleKodeverk={alleKodeverk}
        />
        <VerticalSpacer twentyPx />
        <PermisjonGraderingPanel
          visFeilMelding={visFeilMelding}
          form={form}
          readOnly={readOnly}
          namePrefix={TIDSROM_PERMISJON_FORM_NAME_PREFIX}
          alleKodeverk={alleKodeverk}
        />
        <VerticalSpacer twentyPx />
        <PermisjonOppholdPanel form={form} readOnly={readOnly} namePrefix={TIDSROM_PERMISJON_FORM_NAME_PREFIX} alleKodeverk={alleKodeverk} />
      </div>
    </BorderBox>
  </FormSection>
);

PermisjonPanel.defaultProps = {
  fulltUttak: false,
  error: { permisjonsError: undefined },
};

const permisjonErrors = (values?: TidsromPermisjon) => {
  // @ts-ignore Fiks
  const errors = PermisjonOverforingAvKvoterPanel.validate(values);

  const permisjonPeriodeValues = values ? values[PERMISJON_PERIODE_FIELD_ARRAY_NAME] : undefined;
  errors[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = RenderPermisjonPeriodeFieldArray.validate(permisjonPeriodeValues);

  if (values?.skalUtsette) {
    const utsettelseperiodeValues = values ? values[UTSETTELSE_PERIODE_FIELD_ARRAY_NAME] : undefined;
    errors[UTSETTELSE_PERIODE_FIELD_ARRAY_NAME] = PermisjonUtsettelsePanel.validate(utsettelseperiodeValues);
  }

  if (values?.skalGradere) {
    const graderingperiodeValues = values ? values[GRADERING_PERIODE_FIELD_ARRAY_NAME] : undefined;
    errors[GRADERING_PERIODE_FIELD_ARRAY_NAME] = PermisjonGraderingPanel.validate(graderingperiodeValues);
  }
  if (values?.skalHaOpphold) {
    const oppholdPerioderValues = values ? values[OPPHOLD_PERIODE_FIELD_ARRAY_NAME] : undefined;
    errors[OPPHOLD_PERIODE_FIELD_ARRAY_NAME] = PermisjonOppholdPanel.validate(oppholdPerioderValues);
  }
  return errors;
};

type Periode = {
  periodeFom: string,
  periodeTom: string,
};

// Den her checken trengs för att ikke validerings skall slå till för tidligt
const checkForFomTom = (val: Periode) => 'periodeTom' in val && val.periodeTom !== '' && 'periodeFom' in val && val.periodeFom !== '';

const validateXrossPeriodTypes = (errorArray: Periode[]) => {
  if (errorArray.every(checkForFomTom)) {
    const overlapError = dateRangesNotOverlappingCrossTypes(errorArray.map(({
      periodeFom,
      periodeTom,
    }) => [periodeFom, periodeTom]));
    if (overlapError) {
      return true;
    }
  }
  return false;
};

const overLappingError = (values?: TidsromPermisjon) => {
  if (values) {
    const permisjonPeriodeValues = values.fulltUttak ? values[PERMISJON_PERIODE_FIELD_ARRAY_NAME] || [] : [];
    const utsettelseperiodeValues = values.skalUtsette ? values[UTSETTELSE_PERIODE_FIELD_ARRAY_NAME] || [] : [];
    const graderingperiodeValues = values.skalGradere ? values[GRADERING_PERIODE_FIELD_ARRAY_NAME] || [] : [];
    const oppholdPerioderValues = values.skalHaOpphold ? values[OPPHOLD_PERIODE_FIELD_ARRAY_NAME] || [] : [];
    const overforingsperiodeValues = values.skalOvertaKvote ? values[OVERFORING_PERIODE_FIELD_ARRAY_NAME] || [] : [];
    const errorArrayRaw = [
      ...permisjonPeriodeValues,
      ...utsettelseperiodeValues,
      ...graderingperiodeValues,
      ...oppholdPerioderValues,
      ...overforingsperiodeValues,
    ];
    const errorArray = errorArrayRaw.filter((value) => Object.keys(value).length !== 0);
    if (errorArray.length > 0 && validateXrossPeriodTypes(errorArray)) {
      return true;
    }
  }
  return false;
};

PermisjonPanel.validate = (values: FormValues) => {
  let errors = {};
  if (!values.tidsromPermisjon) {
    return errors;
  }
  errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX] = {};
  const permisjonsError = !(values.tidsromPermisjon.skalUtsette
    || values.tidsromPermisjon.skalGradere
    || values.tidsromPermisjon.fulltUttak
    || values.tidsromPermisjon.skalOvertaKvote);
  if (permisjonsError) {
    errors = {
      _error: {
        permisjonsError: 'PermisjonPanel.MinstEnPeriodeRequired',
      },
    };
  }

  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX] || undefined;
  if (overLappingError(permisjonValues)) {
    errors = {
      _error: {
        permisjonsError: 'PermisjonPanel.DateRangesOverlappingPeriodTypes',
      },
    };
  }
  errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX] = permisjonErrors(permisjonValues);
  return errors;
};

PermisjonPanel.transformValues = (values: Required<FormValues>) => {
  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX];
  const newValues = permisjonValues;
  const permisjonsdata = permisjonValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon.fulltUttak && permisjonsdata) {
    newValues[PERMISJON_PERIODE_FIELD_ARRAY_NAME] = RenderPermisjonPeriodeFieldArray.transformValues(permisjonsdata);
  }
  const graderingdata = permisjonValues[GRADERING_PERIODE_FIELD_ARRAY_NAME];
  if (values.tidsromPermisjon.skalGradere && graderingdata) {
    // @ts-ignore Fikse denne
    newValues[GRADERING_PERIODE_FIELD_ARRAY_NAME] = PermisjonGraderingPanel.transformValues(graderingdata);
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

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const visFeilMelding = !!(ownProps.error && ownProps.error.permisjonsError && ownProps.submitFailed);
  return {
    fulltUttak: formValueSelector(ownProps.form)(state, TIDSROM_PERMISJON_FORM_NAME_PREFIX).fulltUttak,
    visFeilMelding,
  };
};

export default connect(mapStateToProps)(PermisjonPanel);
