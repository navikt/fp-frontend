import type { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { type ReadOnlyArgs, withReadOnly } from '@navikt/fp-storybook-utils';

import { TerminOgFodselPanel } from './TerminOgFodselPanel';

const meta = {
  title: 'ui-komponenter/termin-og-fodsel',
  component: TerminOgFodselPanel,
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
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(TerminOgFodselPanel.transformValues(values))}
      >
        <VStack gap="space-40">
          <TerminOgFodselPanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<ComponentProps<typeof TerminOgFodselPanel> & ReadOnlyArgs>;

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
