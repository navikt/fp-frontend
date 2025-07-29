import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { type OppholdINorgeFormValues } from './components/OppholdINorgePanel';
import { OppholdINorgePapirsoknadIndex } from './OppholdINorgePapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/opphold-i-norge',
  component: OppholdINorgePapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
    mottattDato: '2022-05-30',
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: OppholdINorgePapirsoknadIndex.initialValues(),
    });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={(values: OppholdINorgeFormValues) =>
          submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))
        }
      >
        <VStack gap="10">
          <OppholdINorgePapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof OppholdINorgePapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForFodsel: Story = {
  args: {
    erAdopsjon: false,
  },
};

export const ForAdopsjon: Story = {
  args: {
    erAdopsjon: true,
  },
};
