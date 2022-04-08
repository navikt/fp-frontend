import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { formValueSelector, isDirty as reduxIsDirty } from 'redux-form';

import {
  minLength, maxLength, required, hasValidText,
} from '@navikt/ft-utils';
import { TextAreaField } from '@fpsak-frontend/form';

import BehandlingFormFieldCleaner from '../../util/BehandlingFormFieldCleaner';
import AktivtArbeidsforholdHandling from '../../kodeverk/aktivtArbeidsforholdHandling';

interface PureOwnProps {
  readOnly: boolean;
  formName: string;
}

interface MappedOwnProps {
  isDirty: boolean;
  harBegrunnelse: boolean;
  skalAvslaaYtelse: boolean;
}

/**
 * ArbeidsforholdBegrunnelse er ansvarlig for å vise begrunnelsesfeltet.
 */
export const ArbeidsforholdBegrunnelse: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  formName,
  isDirty,
  harBegrunnelse,
  skalAvslaaYtelse,
}) => (
  <BehandlingFormFieldCleaner formName={formName} fieldNames={['begrunnelse']}>
    { (isDirty || harBegrunnelse) && !skalAvslaaYtelse && (
      <TextAreaField
        name="begrunnelse"
        label={{ id: 'PersonArbeidsforholdDetailForm.Begrunnelse' }}
        validate={[required, minLength(3), maxLength(400), hasValidText]}
        maxLength={400}
        readOnly={readOnly}
      />
    )}
  </BehandlingFormFieldCleaner>
);

const mapStateToProps = (state: any, initialProps: PureOwnProps): MappedOwnProps => {
  const { formName } = initialProps;
  const aktivtArbeidsforholdHandlingValue = formValueSelector(formName)(state, 'aktivtArbeidsforholdHandlingField');
  return {
    isDirty: reduxIsDirty(formName)(state),
    harBegrunnelse: !!formValueSelector(formName)(state, 'begrunnelse'),
    skalAvslaaYtelse: aktivtArbeidsforholdHandlingValue === AktivtArbeidsforholdHandling.AVSLA_YTELSE,
  };
};

export default connect(mapStateToProps)(ArbeidsforholdBegrunnelse);
