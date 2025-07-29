import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

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
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: DekningsgradIndex.initialValues(),
    });

    return (
      <RhfForm formMethods={formMethods} onSubmit={val => submitCallback(DekningsgradIndex.transformValues(val))}>
        <VStack gap="10">
          <DekningsgradIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof DekningsgradIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
