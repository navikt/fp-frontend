import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import SearchForm from './SearchForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/SearchForm',
  component: SearchForm,
  decorators: [withIntl],
};

const Template: StoryFn<{
  kanSaksbehandle: boolean;
  searchStarted: boolean;
  onSubmit: (values: { searchString: string; skalReservere: boolean }) => void;
  feilmelding?: string;
}> = ({ kanSaksbehandle, searchStarted, onSubmit, feilmelding }) => (
  <SearchForm
    onSubmit={onSubmit}
    searchStarted={searchStarted}
    resetSearch={action('button-click')}
    kanSaksbehandle={kanSaksbehandle}
    searchResultAccessDenied={feilmelding ? { feilmelding } : undefined}
  />
);

export const Søkeskjema = Template.bind({});
Søkeskjema.args = {
  onSubmit: action('button-click'),
  kanSaksbehandle: true,
  searchStarted: false,
};

export const SøkeskjemaNårEnIkkeKanVelgeÅReservere = Template.bind({});
SøkeskjemaNårEnIkkeKanVelgeÅReservere.args = {
  onSubmit: action('button-click'),
  kanSaksbehandle: false,
  searchStarted: false,
};

export const SøkeskjemaNårSøkPågår = Template.bind({});
SøkeskjemaNårSøkPågår.args = {
  onSubmit: action('button-click'),
  kanSaksbehandle: true,
  searchStarted: true,
};

export const SøkeskjemaMedFeilmelding = Template.bind({});
SøkeskjemaMedFeilmelding.args = {
  onSubmit: action('button-click'),
  kanSaksbehandle: true,
  searchStarted: true,
  feilmelding: 'Dette er en feilmelding',
};
