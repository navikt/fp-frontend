import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import InntektsgivendeArbeidPapirsoknadIndex from './InntektsgivendeArbeidPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/inntektsgivende-arbeid',
  component: InntektsgivendeArbeidPapirsoknadIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
}> = ({ submitCallback }) => {
  const formMethods = useForm({
    defaultValues: InntektsgivendeArbeidPapirsoknadIndex.buildInitialValues(),
  });

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <InntektsgivendeArbeidPapirsoknadIndex readOnly={false} alleKodeverk={alleKodeverk as any} />
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
