import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { VirksomhetPapirsoknadIndex } from './VirksomhetPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/virksomhet',
  component: VirksomhetPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
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
