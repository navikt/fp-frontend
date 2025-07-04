import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

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
      <RhfForm formMethods={formMethods} onSubmit={val => submitCallback(TerminOgFodselPanelSvp.transformValues(val))}>
        <VStack gap="10">
          <TerminOgFodselPanelSvp {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof TerminOgFodselPanelSvp>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
