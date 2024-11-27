import React, { FunctionComponent } from 'react';
import { FormattedMessage,RawIntlProvider } from 'react-intl';

import { Button } from '@navikt/ds-react';
import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (isDirty: boolean, isSubmitting: boolean, isSubmittable: boolean): boolean => {
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
      <Button
        size="small"
        variant="primary"
        loading={isSubmitting}
        disabled={isDisabled(isDirty, isSubmitting, isSubmittable)}
        onClick={onClick || ariaCheck}
        type={onClick ? 'button' : 'submit'}
      >
        {!!buttonText && buttonText}
        {!buttonText && <FormattedMessage id="SubmitButton.ConfirmInformation" />}
      </Button>
    )}
  </RawIntlProvider>
);

export default FaktaSubmitButton;
