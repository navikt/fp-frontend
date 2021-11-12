import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { ariaCheck, isRequiredMessage, createIntl } from '@fpsak-frontend/utils';
import { hasBehandlingFormErrorsOfType } from '@fpsak-frontend/form';

import { isDirty as reduxIsDirty, isSubmitting as reduxIsSubmitting } from 'redux-form';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean, hasEmptyRequiredFields: boolean): boolean => {
  if ((!isDirty && !isSubmittable) || isSubmitting) {
    return true;
  }
  return (!isDirty && hasEmptyRequiredFields) || hasEmptyRequiredFields;
};

interface PureOwnProps {
  formNames?: string[];
  formName: string;
  isDirty?: boolean;
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
}) => {
  if (!isReadOnly) {
    return (
      <Hovedknapp
        mini
        spinner={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable, hasEmptyRequiredFields)}
        onClick={ariaCheck}
      >
        {text || intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Hovedknapp>
    );
  }
  return null;
};

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => {
  const fNames = ownProps.formNames ? ownProps.formNames : [ownProps.formName];
  const formNames = fNames.map((f) => (f.includes('.') ? f.substr(f.lastIndexOf('.') + 1) : f));
  return {
    isSubmitting: formNames.some((formName) => reduxIsSubmitting(formName)(state)),
    isDirty: ownProps.isDirty !== undefined
      ? ownProps.isDirty : formNames.some((formName) => reduxIsDirty(formName)(state)),
    hasEmptyRequiredFields: formNames.some((formName) => hasBehandlingFormErrorsOfType(formName, isRequiredMessage())(state)),
  };
};

export default connect(mapStateToProps)(ProsessStegSubmitButton);
