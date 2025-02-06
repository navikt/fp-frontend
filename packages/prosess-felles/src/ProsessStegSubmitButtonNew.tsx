import React from 'react';

import { Button } from '@navikt/ds-react';
import { ariaCheck } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

const isDisabled = (
  isSubmitting: boolean,
  isSubmittable: boolean,
  isDirty?: boolean,
  hasEmptyRequiredFields?: boolean,
): boolean => {
  if ((!isDirty && !isSubmittable) || isSubmitting) {
    return true;
  }
  if (hasEmptyRequiredFields === undefined) {
    return !isDirty;
  }
  return (!isDirty && hasEmptyRequiredFields) || hasEmptyRequiredFields;
};

interface Props {
  isReadOnly: boolean;
  isSubmittable: boolean;
  isSubmitting: boolean;
  isDirty?: boolean;
  text?: string;
  onClick?: (event: React.MouseEvent) => void;
  hasEmptyRequiredFields?: boolean;
}

export const ProsessStegSubmitButton = ({
  isReadOnly,
  isSubmittable,
  isSubmitting,
  isDirty,
  text,
  onClick,
  hasEmptyRequiredFields,
}: Props) => {
  if (!isReadOnly) {
    return (
      <Button
        size="small"
        variant="primary"
        loading={isSubmitting}
        disabled={isDisabled(isSubmitting, isSubmittable, isDirty, hasEmptyRequiredFields)}
        onClick={onClick || ariaCheck}
        type={onClick ? 'button' : 'submit'}
      >
        {text || intl.formatMessage({ id: 'SubmitButton.ConfirmInformation' })}
      </Button>
    );
  }
  return null;
};
