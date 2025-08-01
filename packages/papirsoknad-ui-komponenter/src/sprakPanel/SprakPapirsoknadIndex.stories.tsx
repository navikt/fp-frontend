import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { SprakPapirsoknadIndex } from './SprakPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/sprak',
  component: SprakPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <RhfForm formMethods={formMethods} onSubmit={val => submitCallback(SprakPapirsoknadIndex.transformValues(val))}>
        <VStack gap="space-40">
          <SprakPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof SprakPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
