import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import { familieHendelseType, foreldreType } from '@navikt/fp-kodeverk';

import { RettigheterPapirsoknadIndex } from './RettigheterPapirsoknadIndex';
import { SoknadData } from '../felles/SoknadData';

const meta = {
  title: 'papirsoknad/ui-komponenter/rettigheter',
  component: RettigheterPapirsoknadIndex,
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <Form formMethods={formMethods} onSubmit={submitCallback}>
        <VStack gap="10">
          <RettigheterPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof RettigheterPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.FODSEL, foreldreType.MOR),
  },
};

export const FarAdopterer: Story = {
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, familieHendelseType.ADOPSJON, foreldreType.FAR),
  },
};
