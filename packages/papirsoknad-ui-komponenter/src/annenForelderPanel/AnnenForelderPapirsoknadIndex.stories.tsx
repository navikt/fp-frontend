import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { AnnenForelderPapirsoknadIndex } from './AnnenForelderPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/annen-forelder',
  component: AnnenForelderPapirsoknadIndex,
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
    fagsakPersonnummer: '07078518434',
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: AnnenForelderPapirsoknadIndex.initialValues(),
    });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(AnnenForelderPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="space-40">
          <AnnenForelderPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof AnnenForelderPapirsoknadIndex>;

export default meta;

export const SokerErMor: StoryObj<typeof meta> = {
  args: {
    søkerErMor: true,
  },
};

export const SokerErFar: StoryObj<typeof meta> = {
  args: {
    søkerErMor: false,
  },
};
