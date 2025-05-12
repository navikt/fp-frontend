import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

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
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(VirksomhetPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="10">
          <VirksomhetPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof VirksomhetPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
