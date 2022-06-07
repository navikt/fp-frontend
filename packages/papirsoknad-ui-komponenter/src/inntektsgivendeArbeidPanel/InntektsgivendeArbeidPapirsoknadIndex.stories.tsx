import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import InntektsgivendeArbeidPapirsoknadIndex from './InntektsgivendeArbeidPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/inntektsgivende-arbeid',
  component: InntektsgivendeArbeidPapirsoknadIndex,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
}> = ({
  submitCallback,
}) => {
  const formMethods = useForm({
    defaultValues: InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <InntektsgivendeArbeidPapirsoknadIndex
        readOnly={false}
        alleKodeverk={alleKodeverk as any}
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
};
