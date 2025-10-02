import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { EngangsstonadPapirsoknadIndex } from './EngangsstonadPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  component: EngangsstonadPapirsoknadIndex,
  decorators: [withRouter, getIntlDecorator(messages)],
  args: {
    readOnly: false,
    alleKodeverk: alleKodeverk,
    onSubmit: values => {
      action('onSubmit')(values);
      return Promise.resolve();
    },
    onSubmitUfullstendigsoknad: () => {
      action('onSubmitUfullstendigsoknad')();
      return Promise.resolve();
    },
  },
} satisfies Meta<typeof EngangsstonadPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForMorVedFødsel: Story = {
  args: {
    soknadData: new SoknadData('ES', 'FODSL', 'MOR'),
  },
};

export const ForFarVedFødsel: Story = {
  args: {
    soknadData: new SoknadData('ES', 'FODSL', 'FAR'),
  },
};

export const ForMorVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData('ES', 'ADPSJN', 'MOR'),
  },
};
export const ForFarVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData('ES', 'ADPSJN', 'FAR'),
  },
};
