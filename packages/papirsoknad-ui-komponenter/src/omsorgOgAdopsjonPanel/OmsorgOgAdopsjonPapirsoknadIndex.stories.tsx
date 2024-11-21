import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FamilieHendelseType } from '@navikt/fp-kodeverk';

import { OmsorgOgAdopsjonPapirsoknadIndex } from './OmsorgOgAdopsjonPapirsoknadIndex';

const meta = {
  title: 'papirsoknad/ui-komponenter/omsorg-og-adopsjon',
  component: OmsorgOgAdopsjonPapirsoknadIndex,
  args: {
    isForeldrepengerFagsak: false,
    fodselsdato: '2022-05-27',
    readOnly: false,
  },
  parameters: {
    submitCallback: action('onSubmit'),
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm({ defaultValues: OmsorgOgAdopsjonPapirsoknadIndex.initialValues() });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={values => submitCallback(OmsorgOgAdopsjonPapirsoknadIndex.transformValues(values))}
      >
        <VStack gap="10">
          <OmsorgOgAdopsjonPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof OmsorgOgAdopsjonPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForFodsel: Story = {
  args: {
    familieHendelseType: FamilieHendelseType.FODSEL,
  },
};

export const ForAdopsjon: Story = {
  args: {
    familieHendelseType: FamilieHendelseType.ADOPSJON,
  },
};
