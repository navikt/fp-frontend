import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { InntektsgivendeArbeidPapirsoknadIndex } from './InntektsgivendeArbeidPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/inntektsgivende-arbeid',
  component: InntektsgivendeArbeidPapirsoknadIndex,
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm({
      defaultValues: InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
    });

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <VStack gap="10">
          <InntektsgivendeArbeidPapirsoknadIndex {...args} />
          <VerticalSpacer fourtyPx />
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
