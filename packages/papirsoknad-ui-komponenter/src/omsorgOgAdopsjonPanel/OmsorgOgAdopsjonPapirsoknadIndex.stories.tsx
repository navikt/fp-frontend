import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { OmsorgOgAdopsjonPapirsoknadIndex } from './OmsorgOgAdopsjonPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/omsorg-og-adopsjon',
  component: OmsorgOgAdopsjonPapirsoknadIndex,
  args: {
    isForeldrepengerFagsak: false,
    fodselsdato: '2022-05-27',
    readOnly: false,
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({ defaultValues: OmsorgOgAdopsjonPapirsoknadIndex.initialValues() });

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="space-40">
          <OmsorgOgAdopsjonPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof OmsorgOgAdopsjonPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForFodsel: Story = {
  args: {
    familieHendelseType: 'FODSL',
  },
};

export const ForAdopsjon: Story = {
  args: {
    familieHendelseType: 'ADPSJN',
  },
};
