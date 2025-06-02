import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { withRouter } from '@navikt/fp-storybook-utils';

import { LagreSoknadPapirsoknadIndex } from './LagreSoknadPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/lagre-soknad',
  component: LagreSoknadPapirsoknadIndex,
  decorators: [withRouter],
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();
    return (
      <Form
        formMethods={formMethods}
        onSubmit={val => submitCallback(LagreSoknadPapirsoknadIndex.transformValues(val))}
      >
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
    onSubmitUfullstendigsoknad: action('onSubmitUfullstendigsoknad') as () => Promise<void>,
  },
};
