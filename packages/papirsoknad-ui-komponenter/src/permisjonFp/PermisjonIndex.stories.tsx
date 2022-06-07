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
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, FormValues } from './components/PermisjonPanel';

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
  const formMethods = useForm({
    defaultValues: PermisjonIndex.buildInitialValues(),
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback({ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: PermisjonIndex.transformValues(values) })}
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

export const Default = Template.bind({});
Default.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  foreldreType: ForeldreType.MOR,
};
