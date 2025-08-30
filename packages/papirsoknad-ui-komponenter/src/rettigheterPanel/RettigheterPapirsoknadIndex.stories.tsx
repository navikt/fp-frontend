import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';

import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';

import { SoknadData } from '../felles/SoknadData';
import { RettigheterPapirsoknadIndex } from './RettigheterPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/rettigheter',
  component: RettigheterPapirsoknadIndex,
  args: {
    readOnly: false,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm();

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={val => submitCallback(RettigheterPapirsoknadIndex.transformValues(val))}
      >
        <VStack gap="space-40">
          <RettigheterPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </RhfForm>
    );
  },
} satisfies Meta<typeof RettigheterPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MorFødsel: Story = {
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.FODSEL, ForeldreType.MOR),
  },
};

export const FarFodsel: Story = {
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.FODSEL, ForeldreType.FAR),
  },
};

export const MorAdopterer: Story = {
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.ADOPSJON, ForeldreType.MOR),
  },
};
export const FarAdopterer: Story = {
  args: {
    soknadData: new SoknadData('FP', FamilieHendelseType.ADOPSJON, ForeldreType.FAR),
  },
};
