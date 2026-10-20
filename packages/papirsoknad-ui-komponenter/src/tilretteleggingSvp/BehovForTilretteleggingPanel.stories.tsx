import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { type ReadOnlyArgs, withReadOnly } from '@navikt/fp-storybook-utils';

import { BehovForTilretteleggingPanel } from './BehovForTilretteleggingPanel';

const meta = {
  title: 'ui-komponenter/tilrettelegging-svp',
  component: BehovForTilretteleggingPanel,
  decorators: [withReadOnly],
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
  },
  render: function Render(_args, { parameters: { submitCallback } }) {
    const formMethods = useForm({
      defaultValues: BehovForTilretteleggingPanel.initialValues(),
    });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(BehovForTilretteleggingPanel.transformValues(values))}
      >
        <VStack gap="space-40">
          <BehovForTilretteleggingPanel />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<ReadOnlyArgs>;

export default meta;

export const Default: StoryObj<typeof meta> = {};
