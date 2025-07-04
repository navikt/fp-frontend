import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { TerminOgFodselPanel } from './TerminOgFodselPanel';

const meta = {
  title: 'ui-komponenter/termin-og-fodsel',
  component: TerminOgFodselPanel,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(TerminOgFodselPanel.transformValues(values))}
      >
        <VStack gap="10">
          <TerminOgFodselPanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof TerminOgFodselPanel>;

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
