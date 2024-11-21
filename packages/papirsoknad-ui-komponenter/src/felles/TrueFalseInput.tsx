import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { required } from '@navikt/ft-form-validators';

type Props = {
  name: string;
  label: React.ReactNode;
  readOnly: boolean;
  isHorizontal?: boolean;
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
}: Props) => {
  return (
    <RadioGroupPanel
      name={name}
      label={label}
      validate={[required]}
      isReadOnly={readOnly}
      isTrueOrFalseSelection
      isHorizontal={isHorizontal}
      radios={[
        {
          label: trueLabel ?? <FormattedMessage id="Registrering.Yes" />,
          value: 'true',
          element: trueContent,
        },
        {
          label: falseLabel ?? <FormattedMessage id="Registrering.No" />,
          value: 'false',
          element: falseContent,
        },
      ]}
    />
  );
};
