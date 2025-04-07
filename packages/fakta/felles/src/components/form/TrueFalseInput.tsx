import React from 'react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props = {
  name: string;
  label: React.ReactNode;
  readOnly: boolean;
  trueLabel?: React.ReactNode;
  trueContent?: React.ReactElement;
  falseLabel?: React.ReactNode;
  falseContent?: React.ReactElement;
};

export const TrueFalseInput = ({ name, label, readOnly, trueLabel, trueContent, falseLabel, falseContent }: Props) => {
  return (
    <RadioGroupPanel
      name={name}
      label={label}
      validate={[required]}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      radios={[
        {
          label: trueLabel ?? intl.formatMessage({ id: 'TrueFalseInput.True' }),
          value: 'true',
          element: trueContent,
        },
        {
          label: falseLabel ?? intl.formatMessage({ id: 'TrueFalseInput.False' }),
          value: 'false',
          element: falseContent,
        },
      ]}
    />
  );
};
