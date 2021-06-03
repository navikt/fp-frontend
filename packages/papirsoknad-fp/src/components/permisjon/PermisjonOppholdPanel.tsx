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

import RenderOppholdPeriodeFieldArray from './RenderOppholdPeriodeFieldArray';

export const OPPHOLD_PERIODE_FIELD_ARRAY_NAME = 'oppholdPerioder';

interface PureOwnProps {
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  form: string;
  namePrefix: string;
}

interface MappedOwnProps {
  oppholdsReasons: KodeverkMedNavn[];
  skalHaOpphold: boolean;
}

export type FormValues = {
  årsak: string;
  skalHaOpphold?: boolean;
  periodeFom: string;
  periodeTom: string;
}

interface StaticFunctions {
  buildInitialValues: () => any;
  validate: (values?: FormValues[]) => any;
}

/**
 *  PermisjonOppholdPanel
 *
 * Presentasjonskomponent: Viser panel for utsettelse
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonOppholdPanel: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  oppholdsReasons,
  skalHaOpphold,
  readOnly,
}) => (
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
        name={OPPHOLD_PERIODE_FIELD_ARRAY_NAME}
        component={RenderOppholdPeriodeFieldArray}
        oppholdsReasons={oppholdsReasons}
        readOnly={readOnly}
      />
    )}
  </div>
);

PermisjonOppholdPanel.validate = (values) => {
  if (!values || !values.length) {
    return { _error: isRequiredMessage() };
  }
  const otherErrors = values.map(({
    årsak,
  }) => {
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

PermisjonOppholdPanel.buildInitialValues = () => ({
  [OPPHOLD_PERIODE_FIELD_ARRAY_NAME]: [{}],
  skalHaOpphold: false,
});

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  oppholdsReasons: ownProps.alleKodeverk[kodeverkTyper.OPPHOLD_ARSAK],
  skalHaOpphold: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalHaOpphold,
});

export default connect(mapStateToProps)(PermisjonOppholdPanel);
