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
import { hasValidPeriodIncludingOtherErrors, isRequiredMessage, required } from '@fpsak-frontend/utils';

import RenderUtsettelsePeriodeFieldArray from './RenderUtsettelsePeriodeFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './permisjonPanel.less' or its ... Remove this comment to see the full error message
import styles from './permisjonPanel.less';

export const utsettelsePeriodeFieldArrayName = 'utsettelsePeriode';

type PermisjonUtsettelsePanelProps = {
    utsettelseReasons: any; // TODO: kodeverkPropType
    utsettelseKvoter: any; // TODO: kodeverkPropType
    skalUtsette: boolean;
    readOnly: boolean;
    visFeilMelding: boolean;
};

/**
 *  PermisjonUtsettelsePanel
 *
 * Presentasjonskomponent: Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonUtsettelsePanel = ({
  utsettelseReasons, utsettelseKvoter, skalUtsette, readOnly, visFeilMelding,
}: PermisjonUtsettelsePanelProps) => (
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
        name={utsettelsePeriodeFieldArrayName}
        // @ts-expect-error ts-migrate(2769) FIXME: Type 'WeakValidationMap<WithIntlProps<WrappedCompo... Remove this comment to see the full error message
        component={RenderUtsettelsePeriodeFieldArray}
        utsettelseReasons={utsettelseReasons}
        utsettelseKvoter={utsettelseKvoter}
        readOnly={readOnly}
      />
      )}
  </div>
);

PermisjonUtsettelsePanel.validate = (values: any) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = values.map(({
    arsakForUtsettelse,
    erArbeidstaker,
  }: any) => {
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

PermisjonUtsettelsePanel.initialValues = {
  [utsettelsePeriodeFieldArrayName]: [{}],
  skalUtsette: false,
};

const mapStateToProps = (state: any, ownProps: any) => ({
  utsettelseReasons: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_AARSAK_TYPE],
  utsettelseKvoter: ownProps.alleKodeverk[kodeverkTyper.UTSETTELSE_GRADERING_KVOTE],
  skalUtsette: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalUtsette,
});

export default connect(mapStateToProps)(PermisjonUtsettelsePanel);
