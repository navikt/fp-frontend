import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { InntektsgivendeArbeidPapirsoknadIndex } from './InntektsgivendeArbeidPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/inntektsgivende-arbeid',
  component: InntektsgivendeArbeidPapirsoknadIndex,
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: InntektsgivendeArbeidPapirsoknadIndex.initialValues(),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={val => submitCallback(InntektsgivendeArbeidPapirsoknadIndex.transformValues(val))}
      >
        <VStack gap="10">
          <InntektsgivendeArbeidPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof InntektsgivendeArbeidPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
