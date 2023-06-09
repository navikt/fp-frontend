import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import MockAdapter from 'axios-mock-adapter';
import { RestApiErrorProvider, RestApiProvider } from '@navikt/fp-rest-api-hooks';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';
import AppIndex from './AppIndex';

import initFetchData from '../../.storybook/testdata/initFetch.json';
import initFetchTilbakeData from '../../.storybook/testdata/initFetchTilbake.json';
import fagsakFullData from '../../.storybook/testdata/fagsakFull.json';
import fagsakFullTilbakeData from '../../.storybook/testdata/fagsakFullTilbake.json';
import behandlingV1Data from '../../.storybook/testdata/behandlingV1.json';
import behandlingV2Data from '../../.storybook/testdata/behandlingV2.json';
import arbeidsgiverOpplysningerData from '../../.storybook/testdata/arbeidsgiverOpplysninger.json';
import personoversiktData from '../../.storybook/testdata/personoversikt.json';
import soknadData from '../../.storybook/testdata/soknad.json';
import familiehendelseData from '../../.storybook/testdata/familiehendelse.json';
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

  apiMockFagsak.onGet('/fpsak/api/init-fetch').replyOnce(200, initFetchData);
  apiMockFagsak.onGet('/fptilbake/api/init-fetch').replyOnce(200, initFetchTilbakeData);
  apiMockFagsak.onGet('/fpsak/api/kodeverk').replyOnce(200, alleKodeverk);
  apiMockFagsak.onGet('/fptilbake/api/kodeverk').replyOnce(200, alleKodeverkTilbakekreving);
  apiMockFagsak.onGet('/fpsak/api/fagsak/full').replyOnce(200, fagsakFullData);
  apiMockFagsak.onGet('/fptilbake/api/behandlinger/fagsak-full').replyOnce(200, fagsakFullTilbakeData);

  apiMockFagsak.onGet('/fpsak/api/dokument/hent-dokumentliste').replyOnce(200, dokumenterData);

  apiMockBehandling.onPost('/fpsak/api/behandlinger').replyOnce(200, behandlingV1Data);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/arbeidsgivere-opplysninger?uuid=7d198233-b499-4aaf-a01b-be97958e20ce')
    .reply(200, arbeidsgiverOpplysningerData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/person/personoversikt?uuid=7d198233-b499-4aaf-a01b-be97958e20ce')
    .reply(200, personoversiktData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/familiehendelse/v2?uuid=7d198233-b499-4aaf-a01b-be97958e20ce')
    .reply(200, familiehendelseData);
  apiMockBehandling
    .onGet('/fpsak/api/behandling/soknad?uuid=7d198233-b499-4aaf-a01b-be97958e20ce')
    .reply(200, soknadData);
  // apiMockBehandling
  //   .onGet('/fpsak/api/behandling/beregningsgrunnlag?uuid=2cce9c56-ea09-44cc-9003-50697afb28e1')
  //   .reply(200, beregningsgrunnlagData);

  apiMockBehandling.onPost('/fpsak/api/behandling/aksjonspunkt').replyOnce(200, behandlingV2Data);
  apiMockFagsak.onGet('/fpsak/api/fagsak/full').replyOnce(200, fagsakFullData);

  return (
    <div>
      <MemoryRouter initialEntries={['/fagsak/3']}>
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
