import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import BekreftelsePanel from './BekreftelsePanel';

export default {
  title: 'papirsoknad/ui-komponenter/bekreftelse',
  component: BekreftelsePanel,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
  annenForelderInformertRequired: boolean;
}> = ({
  submitCallback,
  annenForelderInformertRequired,
}) => {
  const formMethods = useForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <BekreftelsePanel
        readOnly={false}
        annenForelderInformertRequired={annenForelderInformertRequired}
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
  annenForelderInformertRequired: false,
};

export const MedObligatoriskFeltFordiAnnenForelderErInformert = Template.bind({});
MedObligatoriskFeltFordiAnnenForelderErInformert.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  annenForelderInformertRequired: true,
};
