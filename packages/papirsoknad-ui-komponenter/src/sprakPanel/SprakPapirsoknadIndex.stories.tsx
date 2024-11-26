import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { SprakPapirsoknadIndex } from './SprakPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/sprak',
  component: SprakPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={val => submitCallback(SprakPapirsoknadIndex.transformValues(val))}>
        <VStack gap="10">
          <SprakPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof SprakPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
