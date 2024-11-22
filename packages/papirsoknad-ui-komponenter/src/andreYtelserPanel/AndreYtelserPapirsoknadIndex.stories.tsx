import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { Button, VStack } from '@navikt/ds-react';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { AndreYtelserPapirsoknadIndex } from './AndreYtelserPapirsoknadIndex';

const meta = {
  title: 'ui-komponenter/andre-ytelser',
  component: AndreYtelserPapirsoknadIndex,
  parameters: {
    submitCallback: action('onSubmit'),
  },
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
  },
  render: function Render(args, { parameters: { submitCallback } }) {
    const formMethods = useForm({
      defaultValues: AndreYtelserPapirsoknadIndex.initialValues(alleKodeverk[KodeverkType.ARBEID_TYPE]),
    });

    return (
      <Form
        formMethods={formMethods}
        onSubmit={(values: any) =>
          submitCallback(AndreYtelserPapirsoknadIndex.transformValues(values, alleKodeverk[KodeverkType.ARBEID_TYPE]))
        }
      >
        <VStack gap="10">
          <AndreYtelserPapirsoknadIndex {...args} />
          <Button size="small" variant="primary">
            Lagreknapp (Kun for test)
          </Button>
        </VStack>
      </Form>
    );
  },
} satisfies Meta<typeof AndreYtelserPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    kunMiliterEllerSiviltjeneste: false,
  },
};

export const KunMiliterEllerSiviltjeneste: Story = {
  args: {
    kunMiliterEllerSiviltjeneste: true,
  },
};
