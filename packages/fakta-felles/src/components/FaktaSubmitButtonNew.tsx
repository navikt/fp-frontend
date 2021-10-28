import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { Hovedknapp } from 'nav-frontend-knapper';

import { createIntl, ariaCheck } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (
  isDirty: boolean,
  isSubmitting: boolean,
  isSubmittable: boolean,
): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  return !isDirty;
};

interface OwnProps {
  buttonText?: string;
  isReadOnly: boolean;
  isSubmittable: boolean;
  onClick?: (event: React.MouseEvent) => void;
  isSubmitting: boolean;
  isDirty: boolean;
}

/**
 * FaktaSubmitButton
 */
export const FaktaSubmitButton: FunctionComponent<OwnProps> = ({
  isReadOnly,
  isSubmittable,
  buttonText,
  onClick,
  isSubmitting,
  isDirty,
}) => (
  <RawIntlProvider value={intl}>
    {!isReadOnly && (
      <Hovedknapp
        mini
        spinner={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable)}
        onClick={onClick || ariaCheck}
        htmlType={onClick ? 'button' : 'submit'}
      >
        {!!buttonText && buttonText}
        {!buttonText && <FormattedMessage id="SubmitButton.ConfirmInformation" />}
      </Hovedknapp>
    )}
  </RawIntlProvider>
);

export default FaktaSubmitButton;
