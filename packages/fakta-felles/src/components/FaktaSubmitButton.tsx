import React, { FunctionComponent } from 'react';
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

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean, hasEmptyRequiredFields: boolean, hasOpenAksjonspunkter: boolean) => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  if (hasOpenAksjonspunkter) {
    return hasEmptyRequiredFields || (!isDirty && hasEmptyRequiredFields);
  }

  return !isDirty;
};

interface OwnProps {
  buttonText?: string;
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
  hasEmptyRequiredFields: boolean;
  hasOpenAksjonspunkter: boolean;
  onClick?: (...args: any[]) => any;
}

/**
 * FaktaSubmitButton
 */
export const FaktaSubmitButton: FunctionComponent<OwnProps> = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  hasEmptyRequiredFields,
  hasOpenAksjonspunkter,
  buttonText,
  onClick,
}) => (
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
        {!!buttonText && buttonText}
        {!buttonText && <FormattedMessage id="SubmitButton.ConfirmInformation" />}
      </Hovedknapp>
      )}
  </RawIntlProvider>
);

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  formNames?: string[];
  formName?: string;
  doNotCheckForRequiredFields?: boolean;
}

const mapStateToProps = (state: any, ownProps: PureOwnProps) => {
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
