import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray, formValueSelector } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import { CheckboxField } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
import {
  hasValidFodselsnummer,
  hasValidInteger,
  hasValidPeriodIncludingOtherErrors,
  isRequiredMessage,
  maxLengthOrFodselsnr,
  required,
  validateProsentandel,
} from '@fpsak-frontend/utils';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import arbeidskategori from '@fpsak-frontend/kodeverk/src/arbeidskategori';

import RenderGraderingPeriodeFieldArray from './RenderGraderingPeriodeFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './permisjonPanel.less' or its ... Remove this comment to see the full error message
import styles from './permisjonPanel.less';

export const graderingPeriodeFieldArrayName = 'graderingPeriode';

const maxLength9OrFodselsnr = maxLengthOrFodselsnr(9);

type PermisjonGraderingPanelProps = {
    graderingKvoter: any; // TODO: kodeverkPropType
    form: string;
    namePrefix: string;
    skalGradere: boolean;
    readOnly: boolean;
    visFeilMelding: boolean;
    arbeidskategoriTyper: any; // TODO: kodeverkPropType
};

/**
 *  PermisjonGraderingPanel
 *
 * Presentasjonskomponent: Viser panel for gradering
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonGraderingPanel = ({
  graderingKvoter, form, namePrefix, skalGradere, readOnly, visFeilMelding, arbeidskategoriTyper,
}: PermisjonGraderingPanelProps) => (
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

export const validateOtherErrors = (values: any) => values.map(({
  periodeForGradering,
  prosentandelArbeid,
  arbeidsgiverIdentifikator,
  arbeidskategoriType,
  samtidigUttaksprosent,
  harSamtidigUttak,
}: any) => {
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

PermisjonGraderingPanel.validate = (values: any) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = validateOtherErrors(values);

  return hasValidPeriodIncludingOtherErrors(values, otherErrors);
};

PermisjonGraderingPanel.transformValues = (perioder: any) => perioder.map((p: any) => {
  const { ...periode } = p;
  if (p.arbeidskategoriType) {
    periode.erArbeidstaker = p.arbeidskategoriType === arbeidskategori.ARBEIDSTAKER;
    periode.erFrilanser = p.arbeidskategoriType === arbeidskategori.FRILANSER;
    periode.erSelvstNæringsdrivende = p.arbeidskategoriType === arbeidskategori.SELVSTENDIG_NAERINGSDRIVENDE;
  }
  return periode;
});

PermisjonGraderingPanel.initialValues = {
  [graderingPeriodeFieldArrayName]: [{}],
  skalGradere: false,
};

const mapStateToProps = (state: any, ownProps: any) => ({
  graderingKvoter: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_GRADERING_KVOTE],
  skalGradere: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalGradere,
  arbeidskategoriTyper: ownProps.alleKodeverk[kodeverkTyper.ARBEIDSKATEGORI],
});

export default connect(mapStateToProps)(PermisjonGraderingPanel);
