import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import FodselPapirsoknadIndex from './FodselPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/fodsel',
  component: FodselPapirsoknadIndex,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
  erForeldrepenger: boolean;
}> = ({
  submitCallback,
  erForeldrepenger,
}) => {
  const formMethods = useForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <FodselPapirsoknadIndex
        readOnly={false}
        erForeldrepenger={erForeldrepenger}
      />
      <VerticalSpacer fourtyPx />
      <Hovedknapp htmlType="submit">
        Lagreknapp (Kun for test)
      </Hovedknapp>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  erForeldrepenger: true,
};

export const ErIkkeForeldrepenger = Template.bind({});
ErIkkeForeldrepenger.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  erForeldrepenger: false,
};
