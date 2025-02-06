import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { ForeldreType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { PermisjonIndex } from './PermisjonIndex';
import type { PermisjonFormValues } from './types';

const meta = {
  title: 'ui-komponenter/permisjon',
  component: PermisjonIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
  },
  render: (args, { parameters: { submitCallback } }) => {
    const formMethods = useForm({
      defaultValues: PermisjonIndex.initialValues(),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={(values: PermisjonFormValues) => submitCallback(PermisjonIndex.transformValues(values))}
      >
        <VStack gap="10">
          <PermisjonIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof PermisjonIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SokerErMor: Story = {
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: false,
  },
};

export const SokerErFar: Story = {
  args: {
    foreldreType: ForeldreType.FAR,
    erEndringssøknad: false,
  },
};

export const ErEndringssøknad: Story = {
  args: {
    foreldreType: ForeldreType.MOR,
    erEndringssøknad: true,
  },
};
