import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import SprakPapirsoknadIndex from './SprakPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/sprak',
  component: SprakPapirsoknadIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
}> = ({ submitCallback }) => {
  const formMethods = useForm();

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <SprakPapirsoknadIndex readOnly={false} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
