import type { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import type { Meta, StoryObj } from '@storybook/react';

import { type ReadOnlyArgs, withReadOnly } from '@navikt/fp-storybook-utils';

import { SoknadData } from '../felles/SoknadData';
import { RettigheterPapirsoknadIndex } from './RettigheterPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/rettigheter',
  component: RettigheterPapirsoknadIndex,
  decorators: [withReadOnly],
  args: {
    readOnly: false,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm();

    return (
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(RettigheterPapirsoknadIndex.transformValues(values))}
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
} satisfies Meta<ComponentProps<typeof RettigheterPapirsoknadIndex> & ReadOnlyArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MorFødsel: Story = {
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'MOR'),
  },
};

export const FarFodsel: Story = {
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR'),
  },
};

export const MorAdopterer: Story = {
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'MOR'),
  },
};
export const FarAdopterer: Story = {
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'FAR'),
  },
};
