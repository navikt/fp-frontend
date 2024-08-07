import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import { withRouter } from '@navikt/fp-storybook-utils';

import LagreSoknadPapirsoknadIndex from './LagreSoknadPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/lagre-soknad',
  component: LagreSoknadPapirsoknadIndex,
  decorators: [withRouter],
};

const Template: StoryFn<{
  submitCallback: (data?: any) => Promise<void>;
}> = ({ submitCallback }) => {
  const formMethods = useForm();

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <LagreSoknadPapirsoknadIndex readOnly={false} onSubmitUfullstendigsoknad={submitCallback} submitting={false} />
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
