import { useFormContext } from 'react-hook-form';

import { Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

type FormValues = {
  dekningsgrad?: string;
};

interface Props {
  readOnly: boolean;
}

/**
 * Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 */
export const DekningsgradIndex = ({ readOnly }: Props) => {
  const { control } = useFormContext<FormValues>();
  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}
        </Heading>
        <RhfRadioGroupNew name="dekningsgrad" control={control} validate={[required]} isReadOnly={readOnly}>
          <HStack gap="space-16">
            <Radio value="80_PROSENT" size="small">
              {intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' })}
            </Radio>
            <Radio value="100_PROSENT" size="small">
              {intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' })}
            </Radio>
          </HStack>
        </RhfRadioGroupNew>
      </VStack>
    </BorderBox>
  );
};

DekningsgradIndex.initialValues = (): FormValues => ({ dekningsgrad: undefined });
DekningsgradIndex.transformValues = ({ dekningsgrad }: FormValues) => ({ dekningsgrad });
