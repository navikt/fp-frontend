import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FormValues } from './components/FrilansPanel';
import FrilansPapirsoknadIndex from './FrilansPapirsoknadIndex';
import { FRILANS_NAME_PREFIX } from './components/FrilansOppdragForFamilieFieldArray';

export default {
  title: 'papirsoknad/ui-komponenter/frilans',
  component: FrilansPapirsoknadIndex,
};

const Template: StoryFn<{
  submitCallback: (data: any) => Promise<void>;
}> = ({ submitCallback }) => {
  const formMethods = useForm({
    defaultValues: { [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.buildInitialValues() },
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: { [FRILANS_NAME_PREFIX]: FormValues }) =>
        submitCallback({ [FRILANS_NAME_PREFIX]: FrilansPapirsoknadIndex.transformValues(values.frilans) })
      }
    >
      <FrilansPapirsoknadIndex readOnly={false} />
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
