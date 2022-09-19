import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import DekningsgradIndex from './DekningsgradIndex';

export default {
  title: 'papirsoknad/ui-komponenter/dekningsgrad',
  component: DekningsgradIndex,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
}> = ({
  submitCallback,
}) => {
  const formMethods = useForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <DekningsgradIndex
        readOnly={false}
      />
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
