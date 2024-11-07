import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { SøkForm } from './SøkForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/søk/SøkForm',
  component: SøkForm,
  decorators: [withIntl],
} satisfies Meta<typeof SøkForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Søkeskjema: Story = {
  args: {
    onSubmit: action('button-click'),
    searchStarted: false,
    resetSearch: action('button-click'),
    kanSaksbehandle: true,
  },
};

export const SøkeskjemaNårEnIkkeKanVelgeÅReservere: Story = {
  args: {
    ...Søkeskjema.args,
    kanSaksbehandle: false,
  },
};

export const SøkeskjemaNårSøkPågår: Story = {
  args: {
    ...Søkeskjema.args,
    searchStarted: true,
  },
};

export const SøkeskjemaMedFeilmelding: Story = {
  args: {
    ...Søkeskjema.args,
    searchStarted: true,
    searchResultAccessDenied: { feilmelding: 'Dette er en feilmelding' },
  },
};
