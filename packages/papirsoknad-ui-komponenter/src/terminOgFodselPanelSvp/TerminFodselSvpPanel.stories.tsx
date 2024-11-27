import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { TerminOgFodselPanelSvp } from './TerminOgFodselPanelSvp';

const meta = {
  title: 'ui-komponenter/termin-og-fodsel-svp',
  component: TerminOgFodselPanelSvp,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={val => submitCallback(TerminOgFodselPanelSvp.transformValues(val))}>
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
