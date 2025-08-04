import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

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
      <RhfForm
        formMethods={formMethods}
        onSubmit={val => submitCallback(BehovForTilretteleggingPanel.transformValues(val))}
      >
        <VStack gap="space-40">
          <BehovForTilretteleggingPanel {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof BehovForTilretteleggingPanel>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
