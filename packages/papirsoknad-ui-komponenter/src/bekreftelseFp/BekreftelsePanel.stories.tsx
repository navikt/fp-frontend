import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import BekreftelsePanel from './BekreftelsePanel';

export default {
  title: 'papirsoknad/ui-komponenter/bekreftelse',
  component: BekreftelsePanel,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
  annenForelderInformertRequired: boolean;
}> = ({ submitCallback, annenForelderInformertRequired }) => {
  const formMethods = useForm();

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <BekreftelsePanel readOnly={false} annenForelderInformertRequired={annenForelderInformertRequired} />
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
  annenForelderInformertRequired: false,
};

export const MedObligatoriskFeltFordiAnnenForelderErInformert = Template.bind({});
MedObligatoriskFeltFordiAnnenForelderErInformert.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  annenForelderInformertRequired: true,
};
