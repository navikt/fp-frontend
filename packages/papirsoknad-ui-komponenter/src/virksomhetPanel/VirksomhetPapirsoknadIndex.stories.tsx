import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { VirksomhetPapirsoknadIndex } from './VirksomhetPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/virksomhet',
  component: VirksomhetPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({ defaultValues: VirksomhetPapirsoknadIndex.initialValues() });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(VirksomhetPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="space-40">
          <VirksomhetPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof VirksomhetPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
