import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import { Hovedknapp } from 'nav-frontend-knapper';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import AnnenForelderPapirsoknadIndex from './AnnenForelderPapirsoknadIndex';

export default {
  title: 'papirsoknad/ui-komponenter/annen-forelder',
  component: AnnenForelderPapirsoknadIndex,
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
      <AnnenForelderPapirsoknadIndex
        readOnly={false}
        alleKodeverk={alleKodeverk as any}
        permisjonRettigheterPanel={<div>Dummy for panel Permisjon-rettigheter</div>}
        fagsakPersonnummer="07078518434"
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
