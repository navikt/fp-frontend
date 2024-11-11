import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FormValues } from './components/FrilansPanel';
import { FrilansPapirsoknadIndex } from './FrilansPapirsoknadIndex';
import { FRILANS_NAME_PREFIX } from './components/FrilansOppdragForFamilieFieldArray';

const meta = {
  title: 'papirsoknad/ui-komponenter/frilans',
  component: FrilansPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
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
        <VStack gap="10">
          <FrilansPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof FrilansPapirsoknadIndex>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
