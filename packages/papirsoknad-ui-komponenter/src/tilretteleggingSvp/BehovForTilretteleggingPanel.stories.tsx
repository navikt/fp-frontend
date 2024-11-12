import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { BehovForTilretteleggingPanel } from './BehovForTilretteleggingPanel';

const meta = {
  title: 'papirsoknad/ui-komponenter/tilrettelegging-svp',
  component: BehovForTilretteleggingPanel,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
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
