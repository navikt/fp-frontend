import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { Button } from '@navikt/ds-react';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import AnnenForelderPapirsoknadIndex from './AnnenForelderPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/annen-forelder',
  component: AnnenForelderPapirsoknadIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
}> = ({ submitCallback }) => {
  const formMethods = useForm();

  return (
    <Form formMethods={formMethods} onSubmit={submitCallback}>
      <AnnenForelderPapirsoknadIndex
        readOnly={false}
        alleKodeverk={alleKodeverk as any}
        permisjonRettigheterPanel={<div>Dummy for panel Permisjon-rettigheter</div>}
        fagsakPersonnummer="07078518434"
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
