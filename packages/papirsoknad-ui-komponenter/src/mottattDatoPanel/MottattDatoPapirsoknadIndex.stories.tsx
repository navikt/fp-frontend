import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { MottattDatoPapirsoknadIndex } from './MottattDatoPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/mottatt-dato',
  component: MottattDatoPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <Form
        formMethods={formMethods}
        onSubmit={val => submitCallback(MottattDatoPapirsoknadIndex.transformValues(val))}
      >
        <VStack gap="10">
          <MottattDatoPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof MottattDatoPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
