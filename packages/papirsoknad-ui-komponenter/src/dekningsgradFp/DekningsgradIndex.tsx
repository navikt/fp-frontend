import { useFormContext } from 'react-hook-form';

import { Heading, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
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
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.Dekningsgrad.Title' })}</Heading>
        <RhfRadioGroup
          name="dekningsgrad"
          control={control}
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.80' }),
              value: '80_PROSENT',
            },
            {
              label: intl.formatMessage({ id: 'Registrering.Dekningsgrad.prosent.100' }),
              value: '100_PROSENT',
            },
          ]}
        />
      </VStack>
    </BorderBox>
  );
};

DekningsgradIndex.initialValues = (): FormValues => ({ dekningsgrad: undefined });
DekningsgradIndex.transformValues = ({ dekningsgrad }: FormValues) => ({ dekningsgrad });
