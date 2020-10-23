import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray, formValueSelector } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import { CheckboxField } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  hasValidFodselsnummer,
  hasValidInteger,
  hasValidPeriodIncludingOtherErrors,
  isRequiredMessage,
  maxLengthOrFodselsnr,
  required,
  validateProsentandel,
} from '@fpsak-frontend/utils';
import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';
import { KodeverkMedNavn } from '@fpsak-frontend/types';

import RenderGraderingPeriodeFieldArray from './RenderGraderingPeriodeFieldArray';

import styles from './permisjonPanel.less';

export const graderingPeriodeFieldArrayName = 'graderingPeriode';

const maxLength9OrFodselsnr = maxLengthOrFodselsnr(9);

interface PureOwnProps {
  form: string;
  namePrefix: string;
  readOnly: boolean;
  visFeilMelding: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  graderingKvoter: KodeverkMedNavn[];
  skalGradere: boolean;
  arbeidskategoriTyper: KodeverkMedNavn[];
}

export type FormValues = {
  periodeForGradering: string;
  prosentandelArbeid: number;
  arbeidsgiverIdentifikator?: string;
  arbeidskategoriType?: string;
  samtidigUttaksprosent?: number;
  harSamtidigUttak?: boolean;
  skalGradere?: boolean;
  periodeFom: string;
  periodeTom: string;
}

type Periode = {
  arbeidskategoriType: string;
  erArbeidstaker: boolean;
  erFrilanser: boolean;
  erSelvstNæringsdrivende: boolean;
}

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate: (values: FormValues[]) => any;
  transformValues: (perioder: Periode[]) => any;
}

/**
 *  PermisjonGraderingPanel
 *
 * Presentasjonskomponent: Viser panel for gradering
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonGraderingPanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  graderingKvoter,
  form,
  namePrefix,
  skalGradere,
  readOnly,
  visFeilMelding,
  arbeidskategoriTyper,
}) => (
  <div>
    <Element><FormattedMessage id="Registrering.Permisjon.Gradering.Title" /></Element>
    <VerticalSpacer sixteenPx />
    <CheckboxField
      className={visFeilMelding ? styles.showErrorBackground : ''}
      readOnly={readOnly}
      name="skalGradere"
      label={<FormattedMessage id="Registrering.Permisjon.Gradering.GraderUttaket" />}
    />
    { skalGradere
    && (
    <FieldArray
      name={graderingPeriodeFieldArrayName}
      component={RenderGraderingPeriodeFieldArray}
      graderingKvoter={graderingKvoter}
      form={form}
      namePrefix={namePrefix}
      graderingPrefix={graderingPeriodeFieldArrayName}
      arbeidskategoriTyper={arbeidskategoriTyper}
      readOnly={readOnly}
    />
    )}
  </div>
);

export const validateOtherErrors = (values: FormValues[]) => values.map(({
  periodeForGradering,
  prosentandelArbeid,
  arbeidsgiverIdentifikator,
  arbeidskategoriType,
  samtidigUttaksprosent,
  harSamtidigUttak,
}) => {
  const periodeForGraderingError = required(periodeForGradering);
  const prosentandelArbeidError = validateProsentandel(prosentandelArbeid);
  const arbeidsgiverShouldBeRequired = arbeidskategoriType === arbeidskategori.ARBEIDSTAKER;
  const arbeidsgiverError = (arbeidsgiverShouldBeRequired && required(arbeidsgiverIdentifikator))
    || hasValidInteger(arbeidsgiverIdentifikator)
    || ((arbeidsgiverIdentifikator && arbeidsgiverIdentifikator.toString().length) === 11
      ? hasValidFodselsnummer(arbeidsgiverIdentifikator)
      : maxLength9OrFodselsnr(arbeidsgiverIdentifikator));
  const samtidigUttaksprosentError = harSamtidigUttak === true && required(samtidigUttaksprosent);
  if (prosentandelArbeidError || periodeForGraderingError || arbeidsgiverError || samtidigUttaksprosentError) {
    return {
      periodeForGradering: periodeForGraderingError,
      arbeidsgiverIdentifikator: arbeidsgiverError,
      prosentandelArbeid: prosentandelArbeidError,
      samtidigUttaksprosent: samtidigUttaksprosentError,
    };
  }
  return null;
});

PermisjonGraderingPanel.validate = (values: FormValues[]) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = validateOtherErrors(values);

  return hasValidPeriodIncludingOtherErrors(values, otherErrors);
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
  [graderingPeriodeFieldArrayName]: [{}],
  skalGradere: false,
});

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  graderingKvoter: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_GRADERING_KVOTE],
  skalGradere: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalGradere,
  arbeidskategoriTyper: ownProps.alleKodeverk[kodeverkTyper.ARBEIDSKATEGORI],
});

export default connect(mapStateToProps)(PermisjonGraderingPanel);
