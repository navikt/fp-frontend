import type { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { type ReadOnlyArgs, withReadOnly } from '@navikt/fp-storybook-utils';

import { BekreftelsePanel } from './BekreftelsePanel';

const meta = {
  title: 'ui-komponenter/bekreftelse',
  component: BekreftelsePanel,
  decorators: [withReadOnly],
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <RhfForm formMethods={formMethods} onSubmit={values => submitCallback(BekreftelsePanel.transformValues(values))}>
        <VStack gap="space-40">
          <BekreftelsePanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<ComponentProps<typeof BekreftelsePanel> & ReadOnlyArgs>;

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
