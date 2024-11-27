import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { BehovForTilretteleggingPanel } from './BehovForTilretteleggingPanel';

const meta = {
  title: 'ui-komponenter/tilrettelegging-svp',
  component: BehovForTilretteleggingPanel,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: BehovForTilretteleggingPanel.initialValues(),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={val => submitCallback(BehovForTilretteleggingPanel.transformValues(val))}
      >
        <VStack gap="10">
          <BehovForTilretteleggingPanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof BehovForTilretteleggingPanel>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
