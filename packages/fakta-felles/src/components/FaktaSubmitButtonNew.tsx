import React, { FunctionComponent } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';

import { createIntl, ariaCheck } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (
  isDirty: boolean,
  isSubmitting: boolean,
  isSubmittable: boolean,
  hasEmptyRequiredFields: boolean,
  hasOpenAksjonspunkter: boolean,
): boolean => {
  if (!isSubmittable || isSubmitting) {
    return true;
  }
  if (hasOpenAksjonspunkter) {
    return hasEmptyRequiredFields || (!isDirty && hasEmptyRequiredFields);
  }

  return !isDirty;
};

interface PureOwnProps {
  doNotCheckForRequiredFields?: boolean;
  buttonText?: string;
  isReadOnly: boolean;
  isSubmittable: boolean;
  hasOpenAksjonspunkter: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * FaktaSubmitButton
 */
export const FaktaSubmitButton: FunctionComponent<PureOwnProps> = ({
  isReadOnly,
  isSubmittable,
  hasOpenAksjonspunkter,
  buttonText,
  onClick,
}) => {
  const {
    formState: { isSubmitting, isDirty },
  } = useFormContext();

  const hasEmptyRequiredFields = false;

  return (
    <RawIntlProvider value={intl}>
      {!isReadOnly && (
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
};

export default FaktaSubmitButton;
