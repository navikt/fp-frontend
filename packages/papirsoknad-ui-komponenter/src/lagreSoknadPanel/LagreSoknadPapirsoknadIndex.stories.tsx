import React from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { withRouter } from '@navikt/fp-storybook-utils';

import { LagreSoknadPapirsoknadIndex } from './LagreSoknadPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/lagre-soknad',
  component: LagreSoknadPapirsoknadIndex,
  decorators: [withRouter],
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();
    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <LagreSoknadPapirsoknadIndex {...args} />
      </Form>
    );
  },
} satisfies Meta<typeof LagreSoknadPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<any>,
  },
};
