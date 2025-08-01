import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { FrilansPapirsoknadIndex } from './FrilansPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/frilans',
  component: FrilansPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: FrilansPapirsoknadIndex.initialValues(),
    });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(FrilansPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="space-40">
          <FrilansPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof FrilansPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
