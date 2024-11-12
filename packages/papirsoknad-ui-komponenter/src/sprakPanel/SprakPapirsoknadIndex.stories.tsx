import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { SprakPapirsoknadIndex } from './SprakPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/sprak',
  component: SprakPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <SprakPapirsoknadIndex {...args} />
        <VerticalSpacer fourtyPx />
        <Button size="small" variant="primary">
          Lagreknapp (Kun for test)
        </Button>
      </Form>
    );
  },
} satisfies Meta<typeof SprakPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
