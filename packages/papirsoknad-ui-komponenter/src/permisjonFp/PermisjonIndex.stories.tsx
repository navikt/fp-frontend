import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Button } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ForeldreType } from '@navikt/fp-kodeverk';

import { PermisjonIndex } from './PermisjonIndex';
import { TIDSROM_PERMISJON_FORM_NAME_PREFIX, PermisjonFormValues } from './components/PermisjonPanel';

const meta = {
  title: 'papirsoknad/ui-komponenter/permisjon',
  component: PermisjonIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm({
      defaultValues: PermisjonIndex.initialValues(),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={(values: PermisjonFormValues) =>
          submitCallback({ [TIDSROM_PERMISJON_FORM_NAME_PREFIX]: PermisjonIndex.transformValues(values) })
        }
      >
        <PermisjonIndex {...args} />
        <VerticalSpacer fourtyPx />
        <Button size="small" variant="primary">
          Lagreknapp (Kun for test)
        </Button>
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
