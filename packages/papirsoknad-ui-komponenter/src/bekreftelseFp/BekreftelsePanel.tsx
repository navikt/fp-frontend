import { useFormContext } from 'react-hook-form';

import { Heading, VStack } from '@navikt/ds-react';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { TrueFalseInput } from '../felles/TrueFalseInput';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  annenForelderInformertRequired?: boolean;
}

type BekreftelseFormValues = {
  annenForelderInformert?: boolean;
};

export const BekreftelsePanel = ({ readOnly, annenForelderInformertRequired = false }: Props) => {
  const { control } = useFormContext<BekreftelseFormValues>();
  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.TheOtherParent.Confirmation' })}
        </Heading>
        <TrueFalseInput
          name="annenForelderInformert"
          control={control}
          label={intl.formatMessage({ id: 'Registrering.TheOtherParent.OtherParentKnowPeriods' })}
          isRequired={annenForelderInformertRequired}
          readOnly={readOnly}
        />
      </VStack>
    </BorderBox>
  );
};

BekreftelsePanel.initialValues = (): BekreftelseFormValues => ({
  annenForelderInformert: undefined,
});
BekreftelsePanel.tranformValues = ({ annenForelderInformert }: BekreftelseFormValues) => ({
  annenForelderInformert,
});
