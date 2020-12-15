import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { ariaCheck, isRequiredMessage } from '@fpsak-frontend/utils';

import getPackageIntl from '../i18n/getPackageIntl';

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean, hasEmptyRequiredFields: boolean): boolean => {
  if ((!isDirty && !isSubmittable) || isSubmitting) {
    return true;
  }
  return (!isDirty && hasEmptyRequiredFields) || hasEmptyRequiredFields;
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  formNames?: string[];
  formName: string;
  isDirty?: boolean;
  isBehandlingFormSubmitting: (formName: string, behandlingId: number, behandlingVersjon: number) => (state: any) => boolean;
  isBehandlingFormDirty: (formName: string, behandlingId: number, behandlingVersjon: number) => (state: any) => boolean;
  hasBehandlingFormErrorsOfType: (formName: string, behandlingId: number, behandlingVersjon: number, message: string) => (state: any) => boolean;
  isReadOnly: boolean;
  isSubmittable: boolean;
  text?: string;
}

interface MappedOwnProps {
  isSubmitting: boolean;
  isDirty: boolean;
  hasEmptyRequiredFields: boolean;
}

/**
 * ProsessStegSubmitButton
 */
export const ProsessStegSubmitButton: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  hasEmptyRequiredFields,
  text,
}) => (
  <>
    {!isReadOnly && (
      <Hovedknapp
        mini
        spinner={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable, hasEmptyRequiredFields)}
        onClick={ariaCheck}
      >
        {text || getPackageIntl().formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Hovedknapp>
    )}
  </>
);

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => {
  const { behandlingId, behandlingVersjon } = ownProps;
  const fNames = ownProps.formNames ? ownProps.formNames : [ownProps.formName];
  const formNames = fNames.map((f) => (f.includes('.') ? f.substr(f.lastIndexOf('.') + 1) : f));
  return {
    isSubmitting: formNames.some((formName) => ownProps.isBehandlingFormSubmitting(formName, behandlingId, behandlingVersjon)(state)),
    isDirty: ownProps.isDirty !== undefined
      ? ownProps.isDirty : formNames.some((formName) => ownProps.isBehandlingFormDirty(formName, behandlingId, behandlingVersjon)(state)),
    hasEmptyRequiredFields: formNames.some((formName) => ownProps
      .hasBehandlingFormErrorsOfType(formName, behandlingId, behandlingVersjon, isRequiredMessage())(state)),
  };
};

export default connect(mapStateToProps)(ProsessStegSubmitButton);
