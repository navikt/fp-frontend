import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FormValues } from './components/FrilansPanel';
import FrilansPapirsoknadIndex from './FrilansPapirsoknadIndex';
import { FRILANS_NAME_PREFIX } from './components/FrilansOppdragForFamilieFieldArray';

export default {
  title: 'papirsoknad/ui-komponenter/frilans',
  component: FrilansPapirsoknadIndex,
};

const Template: Story<{
  submitCallback: (data: any) => Promise<void>;
}> = ({
  submitCallback,
}) => {
  const formMethods = useForm({
    defaultValues: { [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.buildInitialValues() },
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(
        values: { [FRILANS_NAME_PREFIX]: FormValues,
      }) => submitCallback({ [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.transformValues(values.frilans) })}
    >
      <FrilansPapirsoknadIndex
        readOnly={false}
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
