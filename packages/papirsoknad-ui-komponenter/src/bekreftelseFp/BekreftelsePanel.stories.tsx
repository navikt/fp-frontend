import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BekreftelsePanel } from './BekreftelsePanel';

const meta = {
  title: 'ui-komponenter/bekreftelse',
  component: BekreftelsePanel,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={val => submitCallback(BekreftelsePanel.tranformValues(val))}>
        <VStack gap="10">
          <BekreftelsePanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof BekreftelsePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    annenForelderInformertRequired: false,
  },
};

export const MedObligatoriskFeltFordiAnnenForelderErInformert: Story = {
  args: {
    annenForelderInformertRequired: true,
  },
};
