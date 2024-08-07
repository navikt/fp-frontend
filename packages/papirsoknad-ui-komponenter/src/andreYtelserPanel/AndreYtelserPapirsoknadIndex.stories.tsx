import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { Button } from '@navikt/ds-react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import AndreYtelserPapirsoknadIndex from './AndreYtelserPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/andre-ytelser',
  component: AndreYtelserPapirsoknadIndex,
};

const Template: StoryFn<{
  kunMiliterEllerSiviltjeneste: boolean;
  submitCallback: (data: any) => Promise<void>;
}> = ({ kunMiliterEllerSiviltjeneste, submitCallback }) => {
  const formMethods = useForm({
    defaultValues: AndreYtelserPapirsoknadIndex.buildInitialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: any) =>
        submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))
      }
    >
      <AndreYtelserPapirsoknadIndex
        readOnly={false}
        kunMiliterEllerSiviltjeneste={kunMiliterEllerSiviltjeneste}
        alleKodeverk={alleKodeverk as any}
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
  kunMiliterEllerSiviltjeneste: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const KunMiliterEllerSiviltjeneste = Template.bind({});
KunMiliterEllerSiviltjeneste.args = {
  kunMiliterEllerSiviltjeneste: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
