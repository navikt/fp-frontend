import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
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
      <RhfForm formMethods={formMethods} onSubmit={val => submitCallback(BekreftelsePanel.tranformValues(val))}>
        <VStack gap="space-40">
          <BekreftelsePanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
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
