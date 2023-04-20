import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { FormValues } from './components/OppholdINorgePanel';
import OppholdINorgePapirsoknadIndex from './OppholdINorgePapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/opphold-i-norge',
  component: OppholdINorgePapirsoknadIndex,
};

const Template: StoryFn<{
  erAdopsjon: boolean;
  submitCallback: (data: any) => Promise<void>;
}> = ({ erAdopsjon, submitCallback }) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues(),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}
    >
      <OppholdINorgePapirsoknadIndex
        readOnly={false}
        erAdopsjon={erAdopsjon}
        alleKodeverk={alleKodeverk as any}
        mottattDato="2022-05-30"
      />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
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
