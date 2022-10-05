import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import { RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';

import SearchForm from './SearchForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/SearchForm',
  component: SearchForm,
  decorators: [withIntl],
};

const Template: Story<{
  kanSaksbehandle: boolean,
  searchStarted: boolean,
  onSubmit: (values: { searchString: string, skalReservere: boolean }) => void,
}> = ({
  kanSaksbehandle,
  searchStarted,
  onSubmit,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.NAV_ANSATT.name, data: { kanSaksbehandle }, global: true },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SearchForm
        onSubmit={onSubmit}
        searchStarted={searchStarted}
        resetSearch={action('button-click')}
      />
    </RestApiMock>
  );
};

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
