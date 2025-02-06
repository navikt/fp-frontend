import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { AnnenForelderPapirsoknadIndex } from './AnnenForelderPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/annen-forelder',
  component: AnnenForelderPapirsoknadIndex,
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
    fagsakPersonnummer: '07078518434',
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: AnnenForelderPapirsoknadIndex.initialValues(),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(AnnenForelderPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="10">
          <AnnenForelderPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof AnnenForelderPapirsoknadIndex>;

export default meta;

export const SokerErMor: StoryObj<typeof meta> = {
  args: {
    sokerErMor: true,
  },
};

export const SokerErFar: StoryObj<typeof meta> = {
  args: {
    sokerErMor: false,
  },
};
