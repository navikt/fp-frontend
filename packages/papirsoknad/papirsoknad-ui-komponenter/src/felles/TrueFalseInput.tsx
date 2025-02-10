import React from 'react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = {
  name: string;
  label: React.ReactNode;
  readOnly: boolean;
  isHorizontal?: boolean;
  isRequired?: boolean;
  trueLabel?: React.ReactNode;
  trueContent?: React.ReactElement;
  falseLabel?: React.ReactNode;
  falseContent?: React.ReactElement;
};

export const TrueFalseInput = ({
  name,
  label,
  isHorizontal = true,
  readOnly,
  trueLabel,
  trueContent,
  falseLabel,
  falseContent,
  isRequired = true,
}: Props) => {
  return (
    <RadioGroupPanel
      name={name}
      label={label}
      validate={isRequired ? [required] : []}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      isHorizontal={isHorizontal}
      radios={[
        {
          label: trueLabel ?? intl.formatMessage({ id: 'Registrering.Yes' }),
          value: 'true',
          element: trueContent,
        },
        {
          label: falseLabel ?? intl.formatMessage({ id: 'Registrering.No' }),
          value: 'false',
          element: falseContent,
        },
      ]}
    />
  );
};
