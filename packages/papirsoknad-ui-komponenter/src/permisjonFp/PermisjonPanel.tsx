import React, { FunctionComponent } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { Element, Undertittel } from 'nav-frontend-typografi';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField, formHooks } from '@navikt/ft-form-hooks';
import { AlleKodeverk } from '@navikt/ft-types';
import { createIntl } from '@navikt/ft-utils';

import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';

import SoknadData from '../felles/SoknadData';
import PermisjonUtsettelsePanel, { FormValues as FormValuesUtsettelse } from './PermisjonUtsettelsePanel';
import { UTSETTELSE_PERIODE_FIELD_ARRAY_NAME } from './RenderUtsettelsePeriodeFieldArray';
import PermisjonGraderingPanel, { FormValues as FormValuesGradering } from './PermisjonGraderingPanel';
import { GRADERING_PERIODE_FIELD_ARRAY_NAME } from './RenderGraderingPeriodeFieldArray';
import PermisjonOverforingAvKvoterPanel, { FormValues as FormValuesOverforing } from './PermisjonOverforingAvKvoterPanel';
import { OVERFORING_PERIODE_FIELD_ARRAY_NAME } from './RenderOverforingAvKvoterFieldArray';
import RenderPermisjonPeriodeFieldArray, { PERMISJON_PERIODE_FIELD_ARRAY_NAME, FormValues as FormValuesPermisjon } from './RenderPermisjonPeriodeFieldArray';
import PermisjonOppholdPanel, { FormValues as FormValuesOpphold } from './PermisjonOppholdPanel';
import { OPPHOLD_PERIODE_FIELD_ARRAY_NAME } from './RenderOppholdPeriodeFieldArray';

import messages from '../../i18n/nb_NO.json';

import styles from './permisjonPanel.less';

const intl = createIntl(messages);

export const TIDSROM_PERMISJON_FORM_NAME_PREFIX = 'tidsromPermisjon';

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

interface OwnProps {
  soknadData: SoknadData;
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
  soknadData,
  readOnly,
  alleKodeverk,
}) => {
  const { formState, watch } = formHooks.useFormContext<FormValues>();
  const fulltUttak = watch(`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`) || false;

  const visFeilMelding = Object.keys(formState.errors).length > 0;

  return (
    <RawIntlProvider value={intl}>
      <BorderBox>
        <div className={styles.flexContainer}>
          <Undertittel><FormattedMessage id="Registrering.Permisjon.Title" /></Undertittel>
          <VerticalSpacer sixteenPx />
          {visFeilMelding && (
            <div role="alert" aria-live="assertive">
              <div className="skjemaelement__feilmelding"><FormattedMessage id="PermisjonPanel.MinstEnPeriodeRequired" /></div>
            </div>
          )}
          <VerticalSpacer eightPx />
          <Element><FormattedMessage id="Registrering.Permisjon.FulltUttak" /></Element>
          <VerticalSpacer eightPx />
          <CheckboxField
            className={visFeilMelding ? styles.showErrorBackground : ''}
            readOnly={readOnly}
            name={`${TIDSROM_PERMISJON_FORM_NAME_PREFIX}.fulltUttak`}
            label={<FormattedMessage id="Registrering.Permisjon.FulltUttak" />}
          />
          {fulltUttak && (
            <RenderPermisjonPeriodeFieldArray
              sokerErMor={soknadData.getForeldreType() === foreldreType.MOR}
              readOnly={readOnly}
              alleKodeverk={alleKodeverk}
            />
          )}
          <VerticalSpacer twentyPx />
          <PermisjonOverforingAvKvoterPanel
            visFeilMelding={visFeilMelding}
            readOnly={readOnly}
            soknadData={soknadData}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonUtsettelsePanel
            visFeilMelding={visFeilMelding}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonGraderingPanel
            visFeilMelding={visFeilMelding}
            readOnly={readOnly}
            alleKodeverk={alleKodeverk}
          />
          <VerticalSpacer twentyPx />
          <PermisjonOppholdPanel readOnly={readOnly} alleKodeverk={alleKodeverk} />
        </div>
      </BorderBox>
    </RawIntlProvider>
  );
};

/*
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
*/

PermisjonPanel.transformValues = (values: FormValues) => {
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

export default PermisjonPanel;
