import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import ForeldreType from '@fpsak-frontend/kodeverk/src/foreldreType';

import PermisjonIndex from './PermisjonIndex';

export default {
  title: 'papirsoknad/ui-komponenter/permisjon',
  component: PermisjonIndex,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
  foreldreType: string;
}> = ({
  submitCallback,
  foreldreType,
}) => {
  const formMethods = useForm();

  return (
    <Form
      formMethods={formMethods}
      onSubmit={submitCallback}
    >
      <PermisjonIndex
        readOnly={false}
        alleKodeverk={alleKodeverk as any}
        foreldreType={foreldreType}
      />
      <VerticalSpacer fourtyPx />
      <Hovedknapp htmlType="submit">
        Lagreknapp (Kun for test)
      </Hovedknapp>
    </Form>
  );
};

export const SøkerErMor = Template.bind({});
SøkerErMor.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  foreldreType: ForeldreType.MOR,
};
