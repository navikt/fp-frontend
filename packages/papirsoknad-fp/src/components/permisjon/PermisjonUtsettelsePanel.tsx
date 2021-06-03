import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { FieldArray, formValueSelector } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import { CheckboxField } from '@fpsak-frontend/form';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { hasValidPeriodIncludingOtherErrors, isRequiredMessage, required } from '@fpsak-frontend/utils';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import RenderUtsettelsePeriodeFieldArray from './RenderUtsettelsePeriodeFieldArray';

import styles from './permisjonPanel.less';

export const UTSETTELSE_PERIODE_FIELD_ARRAY_NAME = 'utsettelsePeriode';

interface PureOwnProps {
  readOnly: boolean;
  visFeilMelding: boolean;
  alleKodeverk: AlleKodeverk;
  form: string;
  namePrefix: string;
}

interface MappedOwnProps {
  utsettelseReasons: KodeverkMedNavn[];
  utsettelseKvoter: KodeverkMedNavn[];
  skalUtsette: boolean;
}

export type FormValues = {
  arsakForUtsettelse?: string;
  erArbeidstaker?: boolean;
  skalUtsette?: boolean;
  periodeFom: string;
  periodeTom: string;
  morsAktivitet: string;
  periodeForUtsettelse: string;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  validate: (values?: FormValues[]) => any;
}

/**
 *  PermisjonUtsettelsePanel
 *
 * Presentasjonskomponent: Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonUtsettelsePanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  utsettelseReasons,
  utsettelseKvoter,
  skalUtsette,
  readOnly,
  visFeilMelding,
}) => (
  <div>
    <Element><FormattedMessage id="Registrering.Permisjon.Utsettelse.Title" /></Element>
    <VerticalSpacer sixteenPx />
    <CheckboxField
      className={visFeilMelding ? styles.showErrorBackground : ''}
      readOnly={readOnly}
      name="skalUtsette"
      label={<FormattedMessage id="Registrering.Permisjon.Utsettelse.UtsettUttaket" />}
    />
    { skalUtsette
      && (
      <FieldArray
        name={UTSETTELSE_PERIODE_FIELD_ARRAY_NAME}
        component={RenderUtsettelsePeriodeFieldArray}
        utsettelseReasons={utsettelseReasons}
        utsettelseKvoter={utsettelseKvoter}
        readOnly={readOnly}
      />
      )}
  </div>
);

PermisjonUtsettelsePanel.validate = (values) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = values.map(({
    arsakForUtsettelse,
    erArbeidstaker,
  }) => {
    const arsakForUtsettelseError = required(arsakForUtsettelse);
    const typeArbeidRequired = arsakForUtsettelse === 'ARBEID';
    const typeArbeidError = typeArbeidRequired && required(erArbeidstaker);
    if (arsakForUtsettelseError || typeArbeidError) {
      return {
        erArbeidstaker: typeArbeidError,
        arsakForUtsettelse: arsakForUtsettelseError,
      };
    }
    return null;
  });

  return hasValidPeriodIncludingOtherErrors(values, otherErrors);
};

PermisjonUtsettelsePanel.buildInitialValues = () => ({
  [UTSETTELSE_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalUtsette: false,
});

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  utsettelseReasons: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE],
  utsettelseKvoter: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_GRADERING_KVOTE],
  skalUtsette: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalUtsette,
});

export default connect(mapStateToProps)(PermisjonUtsettelsePanel);
