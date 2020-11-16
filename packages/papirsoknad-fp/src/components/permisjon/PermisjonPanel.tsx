import React, { FunctionComponent } from 'react';
import { FieldArray, FormSection, formValueSelector } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Element, Undertittel } from 'nav-frontend-typografi';

import { BorderBox, VerticalSpacer } from '@fpsak-frontend/shared-components';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import { dateRangesNotOverlappingCrossTypes } from '@fpsak-frontend/utils';
import { CheckboxField } from '@fpsak-frontend/form';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import PermisjonUtsettelsePanel, { utsettelsePeriodeFieldArrayName, FormValues as FormValuesUtsettelse } from './PermisjonUtsettelsePanel';
import PermisjonGraderingPanel, { graderingPeriodeFieldArrayName, FormValues as FormValuesGradering } from './PermisjonGraderingPanel';
import PermisjonOverforingAvKvoterPanel, { overforingPeriodeFieldArrayName, FormValues as FormValuesOverforing } from './PermisjonOverforingAvKvoterPanel';
import RenderPermisjonPeriodeFieldArray, { FormValues as FormValuesPermisjon } from './RenderPermisjonPeriodeFieldArray';
import PermisjonOppholdPanel, { oppholdPeriodeFieldArrayName, FormValues as FormValuesOpphold } from './PermisjonOppholdPanel';

import styles from './permisjonPanel.less';

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

export const permisjonPeriodeFieldArrayName = 'permisjonsPerioder';

interface PureOwnProps {
  soknadData: SoknadData;
  form: string;
  readOnly: boolean;
  error?: {
    permisjonsError?: string;
  };
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  submitFailed: boolean;
}

interface MappedOwnProps {
  fulltUttak?: boolean;
  visFeilMelding: boolean;
}

type TidsromPermisjon = {
  fulltUttak: boolean;
} & FormValuesOverforing & FormValuesPermisjon & FormValuesUtsettelse & FormValuesGradering & FormValuesOpphold;

export type FormValues = {
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]?: TidsromPermisjon;
};

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate: (values: FormValues) => any;
  transformValues: (values: FormValues) => any;
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
        { visFeilMelding
          && (
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
              name={permisjonPeriodeFieldArrayName}
              component={RenderPermisjonPeriodeFieldArray}
              periodePrefix={permisjonPeriodeFieldArrayName}
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

const permisjonErrors = (values: TidsromPermisjon) => {
  const errors = PermisjonOverforingAvKvoterPanel.validate(values);

  const permisjonPeriodeValues = values ? values[permisjonPeriodeFieldArrayName] : null;
  errors[permisjonPeriodeFieldArrayName] = RenderPermisjonPeriodeFieldArray.validate(permisjonPeriodeValues);

  if (values.skalUtsette) {
    const utsettelseperiodeValues = values ? values[utsettelsePeriodeFieldArrayName] : null;
    errors[utsettelsePeriodeFieldArrayName] = PermisjonUtsettelsePanel.validate(utsettelseperiodeValues);
  }

  if (values.skalGradere) {
    const graderingperiodeValues = values ? values[graderingPeriodeFieldArrayName] : null;
    errors[graderingPeriodeFieldArrayName] = PermisjonGraderingPanel.validate(graderingperiodeValues);
  }
  if (values.skalHaOpphold) {
    const oppholdPerioderValues = values ? values[oppholdPeriodeFieldArrayName] : null;
    errors[oppholdPeriodeFieldArrayName] = PermisjonOppholdPanel.validate(oppholdPerioderValues);
  }
  return errors;
};

type Periode = {
  periodeFom,
  periodeTom,
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

const overLappingError = (values: TidsromPermisjon) => {
  if (values) {
    const permisjonPeriodeValues = values.fulltUttak ? values[permisjonPeriodeFieldArrayName] : [];
    const utsettelseperiodeValues = values.skalUtsette ? values[utsettelsePeriodeFieldArrayName] : [];
    const graderingperiodeValues = values.skalGradere ? values[graderingPeriodeFieldArrayName] : [];
    const oppholdPerioderValues = values.skalHaOpphold ? values[oppholdPeriodeFieldArrayName] : [];
    const overforingsperiodeValues = values.skalOvertaKvote ? values[overforingPeriodeFieldArrayName] : [];
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
        permisjonsError: 'ValidationMessage.MinstEnPeriodeRequired',
      },
    };
  }

  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX] || null;
  if (overLappingError(permisjonValues)) {
    errors = {
      _error: {
        permisjonsError: 'ValidationMessage.DateRangesOverlappingPeriodTypes',
      },
    };
  }
  errors[TIDSROM_PERMISJON_FORM_NAME_PREFIX] = permisjonErrors(permisjonValues);
  return errors;
};

PermisjonPanel.transformValues = (values: FormValues) => {
  const permisjonValues = values[TIDSROM_PERMISJON_FORM_NAME_PREFIX];
  const newValues = permisjonValues;
  if (values.tidsromPermisjon.fulltUttak && permisjonValues[permisjonPeriodeFieldArrayName]) {
    newValues[permisjonPeriodeFieldArrayName] = RenderPermisjonPeriodeFieldArray.transformValues(permisjonValues[permisjonPeriodeFieldArrayName]);
  }
  if (values.tidsromPermisjon.skalGradere && permisjonValues[graderingPeriodeFieldArrayName]) {
    newValues[graderingPeriodeFieldArrayName] = PermisjonGraderingPanel.transformValues(permisjonValues[graderingPeriodeFieldArrayName]);
  }
  return newValues;
};

PermisjonPanel.buildInitialValues = () => ({
  [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: {
    ...PermisjonUtsettelsePanel.buildInitialValues(),
    ...PermisjonGraderingPanel.buildInitialValues(),
    ...PermisjonOverforingAvKvoterPanel.buildInitialValues(),
    ...PermisjonOppholdPanel.buildInitialValues(),
    [permisjonPeriodeFieldArrayName]: [{}],
    fulltUttak: false,
  },
});

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
  const visFeilMelding = !!(ownProps.error && ownProps.error.permisjonsError && ownProps.submitFailed);
  return {
    fulltUttak: formValueSelector(ownProps.form)(state, TIDSROM_PERMISJON_FORM_NAME_PREFIX).fulltUttak,
    visFeilMelding,
  };
};

export default connect(mapStateToProps)(PermisjonPanel);
