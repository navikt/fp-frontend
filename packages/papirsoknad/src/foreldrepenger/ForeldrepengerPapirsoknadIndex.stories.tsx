import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { SoknadData } from '@navikt/fp-papirsoknad-ui-komponenter';
import { alleKodeverk, getIntlDecorator, withRouter } from '@navikt/fp-storybook-utils';

import { ForeldrepengerPapirsoknadIndex } from './ForeldrepengerPapirsoknadIndex';

import messages from '../../i18n/nb_NO.json';

const meta = {
  component: ForeldrepengerPapirsoknadIndex,
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
    erEndringssøknad: false,
    fagsakPersonnummer: '12345678910',
  },
} satisfies Meta<typeof ForeldrepengerPapirsoknadIndex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ForMorVedFødsel: Story = {
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'MOR'),
  },
};

export const ForMorVedAdopsjon: Story = {
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'MOR'),
  },
};

export const ForMorVedOmsorg: Story = {
  args: {
    soknadData: new SoknadData('FP', 'OMSRGO', 'MOR'),
  },
};

export const ForFarVedFødsel: Story = {
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR'),
  },
};

export const Endringssøknad: Story = {
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR'),
    erEndringssøknad: true,
  },
};
