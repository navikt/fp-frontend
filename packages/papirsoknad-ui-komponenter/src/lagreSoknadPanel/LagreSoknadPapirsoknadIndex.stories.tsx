import type { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';

import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { promiseAction, type ReadOnlyArgs, withReadOnly, withRouter } from '@navikt/fp-storybook-utils';

import { LagreSoknadPapirsoknadIndex } from './LagreSoknadPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/lagre-soknad',
  component: LagreSoknadPapirsoknadIndex,
  decorators: [withReadOnly, withRouter],
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();
    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(LagreSoknadPapirsoknadIndex.transformValues(values))}
      >
        <LagreSoknadPapirsoknadIndex {...args} />
      </RhfForm>
    );
  },
} satisfies Meta<ComponentProps<typeof LagreSoknadPapirsoknadIndex> & ReadOnlyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: promiseAction('onSubmitUfullstendigsoknad'),
    erEndringssøknad: false,
  },
};

export const ErEndringssøknad: Story = {
  args: {
    readOnly: false,
    submitting: false,
    onSubmitUfullstendigsoknad: promiseAction('onSubmitUfullstendigsoknad'),
    erEndringssøknad: true,
  },
};
