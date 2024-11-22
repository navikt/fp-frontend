import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { DekningsgradIndex } from './DekningsgradIndex';

const meta = {
  title: 'ui-komponenter/dekningsgrad',
  component: DekningsgradIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm({
      defaultValues: DekningsgradIndex.initialValues(),
    });

    return (
      <Form formMethods={formMethods} onSubmit={val => submitCallback(DekningsgradIndex.transformValues(val))}>
        <VStack gap="10">
          <DekningsgradIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof DekningsgradIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
