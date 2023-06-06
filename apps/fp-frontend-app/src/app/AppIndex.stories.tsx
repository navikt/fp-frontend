import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import { RestApiErrorProvider, RestApiProvider } from '@navikt/fp-rest-api-hooks';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import AppIndex from './AppIndex';
import initFetchData from '../../.storybook/testdata/initFetch.json';
import fagsakFullData from '../../.storybook/testdata/fagsakFull.json';
import behandlingData from '../../.storybook/testdata/behandling.json';
import arbeidsgiverOpplysningerData from '../../.storybook/testdata/arbeidsgiverOpplysninger.json';
import personoversiktData from '../../.storybook/testdata/personoversikt.json';
import beregningsgrunnlagData from '../../.storybook/testdata/beregningsgrunnlag.json';
import dokumenterData from '../../.storybook/testdata/dokumenter.json';
import { requestFagsakApi } from '../data/fagsakContextApi';
import { requestBehandlingApi } from '../data/behandlingContextApi';

export default {
  title: 'app/app',
  component: AppIndex,
};

const Template: StoryFn = () => {
  const apiMockFagsak = new MockAdapter(requestFagsakApi.getAxios());
  const apiMockBehandling = new MockAdapter(requestBehandlingApi.getAxios());
  apiMockFagsak.onGet('/fpsak/api/init-fetch').reply(200, initFetchData);
  apiMockFagsak.onGet('/fpsak/api/kodeverk').reply(200, alleKodeverk);
  apiMockFagsak.onGet('/fpsak/api/fagsak/full').reply(200, fagsakFullData);
  apiMockFagsak.onGet('/fpsak/api/dokument/hent-dokumentliste').reply(200, dokumenterData);

  apiMockBehandling.onPost('/fpsak/api/behandlinger').reply(200, behandlingData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/arbeidsgivere-opplysninger?uuid=2cce9c56-ea09-44cc-9003-50697afb28e1')
    .reply(200, arbeidsgiverOpplysningerData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/person/personoversikt?uuid=2cce9c56-ea09-44cc-9003-50697afb28e1')
    .reply(200, personoversiktData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/beregningsgrunnlag?uuid=2cce9c56-ea09-44cc-9003-50697afb28e1')
    .reply(200, beregningsgrunnlagData);

  return (
    <div>
      <MemoryRouter initialEntries={['/fagsak/2']}>
        <RestApiProvider>
          <RestApiErrorProvider>
            <AppIndex />
          </RestApiErrorProvider>
        </RestApiProvider>
      </MemoryRouter>
    </div>
  );
};

export const Default = Template.bind({});
