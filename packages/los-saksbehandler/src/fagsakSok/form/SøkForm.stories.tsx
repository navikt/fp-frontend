import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SøkForm } from './SøkForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'søk/SøkForm',
  component: SøkForm,
  decorators: [withIntl],
  args: {
    onSubmit: action('button-click'),
    resetSearch: action('button-click'),
  },
} satisfies Meta<typeof SøkForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Søkeskjema: Story = {
  args: {
    searchStarted: false,
    kanSaksbehandle: true,
  },
};

export const SøkeskjemaNårEnIkkeKanVelgeÅReservere: Story = {
  args: {
    searchStarted: false,
    kanSaksbehandle: false,
  },
};

export const SøkeskjemaNårSøkPågår: Story = {
  args: {
    searchStarted: true,
    kanSaksbehandle: true,
  },
};

export const SøkeskjemaMedFeilmelding: Story = {
  args: {
    kanSaksbehandle: true,
    searchStarted: true,
    searchResultAccessDenied: { feilmelding: 'Dette er en feilmelding' },
  },
};
