import { useFormContext } from 'react-hook-form';

import { Heading, Radio, VStack } from '@navikt/ds-react';
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
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.Sprak' })}
        </Heading>
        <RhfRadioGroup
          name="språkkode"
          control={control}
          legend=""
          hideLegend
          validate={[required]}
          readOnly={readOnly}
        >
          <Radio value={sprakvalg.BOKMAL} size="small">
            {intl.formatMessage({ id: 'Registrering.Sprak.Bokmal' })}
          </Radio>
          <Radio value={sprakvalg.NYNORSK} size="small">
            {intl.formatMessage({ id: 'Registrering.Sprak.Nynorsk' })}
          </Radio>
          <Radio value={sprakvalg.ENGELSK} size="small">
            {intl.formatMessage({ id: 'Registrering.Sprak.Engelsk' })}
          </Radio>
        </RhfRadioGroup>
      </VStack>
    </BorderBox>
  );
};

SprakPapirsoknadIndex.initialValues = (): SprakFormValues => ({ språkkode: undefined });
SprakPapirsoknadIndex.transformValues = ({ språkkode }: SprakFormValues) => ({ språkkode });
