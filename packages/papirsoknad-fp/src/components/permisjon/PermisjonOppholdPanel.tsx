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

import RenderOppholdPeriodeFieldArray from './RenderOppholdPeriodeFieldArray';

export const oppholdPeriodeFieldArrayName = 'oppholdPerioder';

type PermisjonOppholdPanelProps = {
    oppholdsReasons: any; // TODO: kodeverkPropType
    skalHaOpphold: boolean;
    readOnly: boolean;
};

/**
 *  PermisjonOppholdPanel
 *
 * Presentasjonskomponent: Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonOppholdPanel = ({ oppholdsReasons, skalHaOpphold, readOnly }: PermisjonOppholdPanelProps) => (
  <div>
    <Element><FormattedMessage id="Registrering.Permisjon.Opphold.Title" /></Element>
    <VerticalSpacer sixteenPx />
    <CheckboxField
      readOnly={readOnly}
      name="skalHaOpphold"
      label={<FormattedMessage id="Registrering.Permisjon.Opphold.OppholdUttaket" />}
    />
    { skalHaOpphold
    && (
      <FieldArray
        name={oppholdPeriodeFieldArrayName}
        component={RenderOppholdPeriodeFieldArray}
        oppholdsReasons={oppholdsReasons}
        readOnly={readOnly}
      />
    )}
  </div>
);

PermisjonOppholdPanel.validate = (values: any) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = values.map(({
    årsak,
  }: any) => {
    const aarsakError = required(årsak);
    if (aarsakError) {
      return {
        årsak: aarsakError,
      };
    }
    return null;
  });

  return hasValidPeriodIncludingOtherErrors(values, otherErrors);
};

PermisjonOppholdPanel.initialValues = {
  [oppholdPeriodeFieldArrayName]: [{}],
  skalHaOpphold: false,
};

const mapStateToProps = (state: any, ownProps: any) => ({
  oppholdsReasons: ownProps.alleKodeverk[kodeverkTyper.OPPHOLD_ARSAK],
  skalHaOpphold: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalHaOpphold,
});

export default connect(mapStateToProps)(PermisjonOppholdPanel);
