import React from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

type Props<T extends FieldValues> = {
  name: UseControllerProps<T>['name'];
  control: UseControllerProps<T>['control'];
  label: React.ReactNode;
  readOnly: boolean;
  trueLabel?: React.ReactElement;
  trueContent?: React.ReactElement;
  falseLabel?: React.ReactElement;
  falseContent?: React.ReactElement;
};

export const TrueFalseInput = <T extends FieldValues>({
  name,
  control,
  label,
  readOnly,
  trueLabel,
  trueContent,
  falseLabel,
  falseContent,
}: Props<T>) => {
  return (
    <RhfRadioGroup
      name={name}
      control={control}
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
