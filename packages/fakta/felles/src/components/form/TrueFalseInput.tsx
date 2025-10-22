import React from 'react';
import { type FieldValues, type UseControllerProps, useFormContext } from 'react-hook-form';

import { Radio, VStack } from '@navikt/ds-react';
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
  const { watch } = useFormContext<T>();

  const value = watch(name);

  return (
    <RhfRadioGroup name={name} control={control} legend={label} validate={[required]} readOnly={readOnly}>
      <VStack gap="space-2">
        <VStack gap="space-16">
          <Radio value={true} size="small">
            {trueLabel ?? intl.formatMessage({ id: 'TrueFalseInput.True' })}
          </Radio>
          {value === true && trueContent}
        </VStack>
        <VStack gap="space-16">
          <Radio value={false} size="small">
            {falseLabel ?? intl.formatMessage({ id: 'TrueFalseInput.False' })}
          </Radio>
          {value === false && falseContent}
        </VStack>
      </VStack>
    </RhfRadioGroup>
  );
};
