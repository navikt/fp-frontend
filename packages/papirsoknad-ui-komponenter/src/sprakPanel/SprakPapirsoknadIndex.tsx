import { useFormContext } from 'react-hook-form';

import { Heading, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
}

const sprakvalg = {
  BOKMAL: 'NB',
  NYNORSK: 'NN',
  ENGELSK: 'EN',
};

type SprakFormValues = {
  språkkode?: string;
};

export const SprakPapirsoknadIndex = ({ readOnly }: Props) => {
  const { control } = useFormContext<SprakFormValues>();
  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.Sprak' })}</Heading>
        <RhfRadioGroup
          name="språkkode"
          control={control}
          validate={[required]}
          isReadOnly={readOnly}
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' }),
              value: sprakvalg.BOKMAL,
            },
            {
              label: intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' }),
              value: sprakvalg.NYNORSK,
            },
            {
              label: intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' }),
              value: sprakvalg.ENGELSK,
            },
          ]}
        />
      </VStack>
    </BorderBox>
  );
};

SprakPapirsoknadIndex.initialValues = (): SprakFormValues => ({ språkkode: undefined });
SprakPapirsoknadIndex.transformValues = ({ språkkode }: SprakFormValues) => ({ språkkode });
