import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { TerminOgFodselPanelSvp } from './TerminOgFodselPanelSvp';

const meta = {
  title: 'papirsoknad/ui-komponenter/termin-og-fodsel-svp',
  component: TerminOgFodselPanelSvp,
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
          <TerminOgFodselPanelSvp {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof TerminOgFodselPanelSvp>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
