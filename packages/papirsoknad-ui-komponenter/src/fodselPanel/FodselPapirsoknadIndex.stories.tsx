import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FodselPapirsoknadIndex } from './FodselPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/fodsel',
  component: FodselPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <VStack gap="10">
          <FodselPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof FodselPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForeldrepengeSak: Story = {
  args: {
    erForeldrepenger: true,
  },
};

export const ErIkkeForeldrepengeSak: Story = {
  args: {
    erForeldrepenger: false,
  },
};
