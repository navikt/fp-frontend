import React from 'react';
import {
  createIntl, createIntlCache, RawIntlProvider, FormattedMessage,
} from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { ariaCheck, isRequiredMessage } from '@fpsak-frontend/utils';
import { isBehandlingFormDirty, isBehandlingFormSubmitting, hasBehandlingFormErrorsOfType } from '@fpsak-frontend/form';

import messages from '../../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

const isDisabled = (isDirty: any, isSubmitting: any, isSubmittable: any, hasEmptyRequiredFields: any, hasOpenAksjonspunkter: any) => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  if (hasOpenAksjonspunkter) {
    return hasEmptyRequiredFields || (!isDirty && hasEmptyRequiredFields);
  }

  return !isDirty;
};

type OwnFaktaSubmitButtonProps = {
    buttonText?: string;
    isReadOnly: boolean;
    isSubmittable: boolean;
    isSubmitting: boolean;
    isDirty: boolean;
    hasEmptyRequiredFields: boolean;
    hasOpenAksjonspunkter: boolean;
    onClick?: (...args: any[]) => any;
};

type FaktaSubmitButtonProps = OwnFaktaSubmitButtonProps & typeof FaktaSubmitButton.defaultProps;

/**
 * FaktaSubmitButton
 */
export const FaktaSubmitButton = ({
  isReadOnly, isSubmittable, isSubmitting, isDirty, hasEmptyRequiredFields, hasOpenAksjonspunkter, buttonText, onClick,
}: FaktaSubmitButtonProps) => (
  <RawIntlProvider value={intl}>
    {!isReadOnly
      && (
      <Hovedknapp
        mini
        spinner={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable, hasEmptyRequiredFields, hasOpenAksjonspunkter)}
        onClick={onClick || ariaCheck}
        htmlType={onClick ? 'button' : 'submit'}
      >
        {buttonText && buttonText}
        {!buttonText && <FormattedMessage id="SubmitButton.ConfirmInformation" />}
      </Hovedknapp>
      )}
  </RawIntlProvider>
);

FaktaSubmitButton.defaultProps = {
  buttonText: undefined,
  onClick: undefined,
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { behandlingId, behandlingVersjon } = ownProps;
  const fNames = ownProps.formNames ? ownProps.formNames : [ownProps.formName];
  const formNames = fNames.map((f: any) => (f.includes('.') ? f.substr(f.lastIndexOf('.') + 1) : f));
  return {
    isSubmitting: formNames.some((formName: any) => isBehandlingFormSubmitting(formName, behandlingId, behandlingVersjon)(state)),
    isDirty: formNames.some((formName: any) => isBehandlingFormDirty(formName, behandlingId, behandlingVersjon)(state)),
    hasEmptyRequiredFields: ownProps.doNotCheckForRequiredFields
      ? false : formNames.some((formName: any) => hasBehandlingFormErrorsOfType(formName, behandlingId, behandlingVersjon, isRequiredMessage())(state)),
  };
};

export default connect(mapStateToProps)(FaktaSubmitButton);
