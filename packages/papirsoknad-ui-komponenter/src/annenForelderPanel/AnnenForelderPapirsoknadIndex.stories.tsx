import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { AnnenForelderPapirsoknadIndex } from './AnnenForelderPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/annen-forelder',
  component: AnnenForelderPapirsoknadIndex,
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
    permisjonRettigheterPanel: <div>Dummy for panel Permisjon-rettigheter</div>,
    fagsakPersonnummer: '07078518434',
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <VStack gap="10">
          <AnnenForelderPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof AnnenForelderPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
