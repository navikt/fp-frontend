import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import OppholdINorgePapirsoknadIndex from './OppholdINorgePapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/opphold-i-norge',
  component: OppholdINorgePapirsoknadIndex,
};

const Template: Story<{
  erAdopsjon: boolean;
  submitCallback: (data: any) => Promise<void>;
}> = ({
  erAdopsjon,
  submitCallback,
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues(),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <OppholdINorgePapirsoknadIndex
        readOnly={false}
        erAdopsjon={erAdopsjon}
        alleKodeverk={alleKodeverk as any}
        mottattDato="2022-05-30"
      />
      <VerticalSpacer fourtyPx />
      <Hovedknapp htmlType="submit">
        Lagreknapp (Kun for test)
      </Hovedknapp>
    </Form>
  );
};

export const ForFodsel = Template.bind({});
ForFodsel.args = {
  erAdopsjon: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const ForAdopsjon = Template.bind({});
ForAdopsjon.args = {
  erAdopsjon: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
