import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import {
  minLength, maxLength, required, hasValidText,
} from '@fpsak-frontend/utils';
import { TextAreaField, behandlingFormValueSelector, isBehandlingFormDirty } from '@fpsak-frontend/form';

import BehandlingFormFieldCleaner from '../../util/BehandlingFormFieldCleaner';
import aktivtArbeidsforholdHandling from '../../kodeverk/aktivtArbeidsforholdHandling';

interface OwnProps {
  readOnly: boolean;
  formName: string;
  isDirty: boolean;
  harBegrunnelse: boolean;
  skalAvslaaYtelse: boolean;
  behandlingId: number;
  behandlingVersjon: number;
}

/**
 * ArbeidsforholdBegrunnelse er ansvarlig for å vise begrunnelsesfeltet.
 */
export const ArbeidsforholdBegrunnelse: FunctionComponent<OwnProps> = ({
  readOnly,
  formName,
  isDirty,
  harBegrunnelse,
  skalAvslaaYtelse,
  behandlingId,
  behandlingVersjon,
}) => (
  <BehandlingFormFieldCleaner formName={formName} fieldNames={['begrunnelse']} behandlingId={behandlingId} behandlingVersjon={behandlingVersjon}>
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

interface PureOwnProps {
  formName: string;
  behandlingId: number;
  behandlingVersjon: number;
}

const mapStateToProps = (state: any, initialProps: PureOwnProps) => {
  const { formName, behandlingId, behandlingVersjon } = initialProps;
  const aktivtArbeidsforholdHandlingValue = behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'aktivtArbeidsforholdHandlingField');
  return {
    isDirty: isBehandlingFormDirty(formName, behandlingId, behandlingVersjon)(state),
    harBegrunnelse: !!behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'begrunnelse'),
    skalAvslaaYtelse: aktivtArbeidsforholdHandlingValue === aktivtArbeidsforholdHandling.AVSLA_YTELSE,
  };
};

export default connect(mapStateToProps)(ArbeidsforholdBegrunnelse);
