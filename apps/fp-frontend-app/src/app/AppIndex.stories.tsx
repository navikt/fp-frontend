import React, { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';

import { RestApiErrorProvider, RestApiProvider } from '@navikt/fp-rest-api-hooks';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';

import { requestBehandlingApi } from '../data/behandlingContextApi';
import { requestFagsakApi } from '../data/fagsakContextApi';
import { AppIndex } from './AppIndex';

import alleInntektsmeldinger from '../../.storybook/testdata/alleInntektsmeldinger.json';
import arbeidOgInntektData from '../../.storybook/testdata/arbeidOgInntekt.json';
import arbeidsgiverOpplysningerData from '../../.storybook/testdata/arbeidsgiverOpplysninger.json';
import behandlingV1Data from '../../.storybook/testdata/behandlingV1.json';
import behandlingV2Data from '../../.storybook/testdata/behandlingV2.json';
import dokumenterData from '../../.storybook/testdata/dokumenter.json';
import fagsakFullData from '../../.storybook/testdata/fagsakFull.json';
import fagsakFullRisikoApData from '../../.storybook/testdata/fagsakFullRisikoAp.json';
import fagsakFullTilbakeData from '../../.storybook/testdata/fagsakFullTilbake.json';
import familiehendelseData from '../../.storybook/testdata/familiehendelse.json';
import initFetchData from '../../.storybook/testdata/initFetch.json';
import initFetchTilbakeData from '../../.storybook/testdata/initFetchTilbake.json';
import inntektArbeidYtelseData from '../../.storybook/testdata/inntektArbeidYtelse.json';
import medlemskapData from '../../.storybook/testdata/medlemskap.json';
import personoversiktData from '../../.storybook/testdata/personoversikt.json';
import soknadData from '../../.storybook/testdata/soknad.json';

const meta = {
  title: 'app/app',
  component: AppIndex,
  render: ({ bekreftAdopsjon = false, risikoAp = false }) => {
    const fagsakId = '3';
    const behandlingUuid = '7d198233-b499-4aaf-a01b-be97958e20ce';

    const apiMockFagsak = new MockAdapter(requestFagsakApi.getAxios());
    const apiMockBehandling = new MockAdapter(requestBehandlingApi.getAxios());

    apiMockFagsak.onGet('/fpsak/api/init-fetch').replyOnce(200, initFetchData);
    apiMockFagsak.onGet('/fptilbake/api/init-fetch').replyOnce(200, initFetchTilbakeData);
    apiMockFagsak.onGet('/fpsak/api/kodeverk').replyOnce(200, alleKodeverk);
    apiMockFagsak.onGet('/fptilbake/api/kodeverk').replyOnce(200, alleKodeverkTilbakekreving);

    if (bekreftAdopsjon) {
      apiMockFagsak.onGet('/fpsak/api/fagsak/full').replyOnce(200, fagsakFullData);
    }
    if (risikoAp) {
      apiMockFagsak.onGet('/fpsak/api/fagsak/full').replyOnce(200, fagsakFullRisikoApData);
    }

    apiMockFagsak.onGet('/fptilbake/api/behandlinger/fagsak-full').replyOnce(200, fagsakFullTilbakeData);
    apiMockFagsak.onGet('/fpsak/api/dokument/hent-dokumentliste').replyOnce(200, dokumenterData);

    apiMockBehandling.onPost('/fpsak/api/behandlinger').replyOnce(200, behandlingV1Data);

    apiMockBehandling
      .onGet(`/fpsak/api/behandling/arbeidsgivere-opplysninger?uuid=${behandlingUuid}`)
      .reply(200, arbeidsgiverOpplysningerData);
    apiMockBehandling
      .onGet(`/fpsak/api/behandling/person/personoversikt?uuid=${behandlingUuid}`)
      .reply(200, personoversiktData);
    apiMockBehandling
      .onGet(`/fpsak/api/behandling/familiehendelse/v2?uuid=${behandlingUuid}`)
      .reply(200, familiehendelseData);
    apiMockBehandling.onGet(`/fpsak/api/behandling/soknad?uuid=${behandlingUuid}`).reply(200, soknadData);
    apiMockBehandling
      .onGet(`/fpsak/api/behandling/arbeid-inntektsmelding?uuid=${behandlingUuid}`)
      .reply(200, arbeidOgInntektData);
    apiMockBehandling
      .onGet(`/fpsak/api/behandling/inntekt-arbeid-ytelse?uuid=${behandlingUuid}`)
      .reply(200, inntektArbeidYtelseData);

    if (bekreftAdopsjon) {
      // Bekreft Fakta-Adopsjon
      apiMockBehandling.onPost('/fpsak/api/behandling/aksjonspunkt').replyOnce(200, behandlingV2Data);
      apiMockBehandling.onPost('/fpsak/api/behandlinger').replyOnce(200, behandlingV2Data);
      apiMockFagsak.onGet('/fpsak/api/fagsak/full').replyOnce(200, fagsakFullData);
      apiMockFagsak.onGet('/fptilbake/api/behandlinger/fagsak-full').replyOnce(200, fagsakFullTilbakeData);
      apiMockBehandling
        .onGet(`/fpsak/api/behandling/person/medlemskap-v2?uuid=${behandlingUuid}`)
        .replyOnce(200, medlemskapData);
    }

    apiMockBehandling
      .onGet(`/fpsak/api/behandling/person/medlemskap-v3?uuid=${behandlingUuid}`)
      .replyOnce(200, medlemskapData);

    apiMockBehandling
      .onGet(`/fpsak/api/behandling/inntektsmeldinger-alle?uuid=${behandlingUuid}`)
      .reply(200, alleInntektsmeldinger);

    return (
      <div>
        <MemoryRouter initialEntries={[`/fagsak/${fagsakId}/`]}>
          <RestApiProvider>
            <RestApiErrorProvider>
              <AppIndex />
            </RestApiErrorProvider>
          </RestApiProvider>
        </MemoryRouter>
      </div>
    );
  },
} satisfies Meta<{ bekreftAdopsjon?: boolean; risikoAp?: boolean } & ComponentProps<typeof AppIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BekreftAdopsjon: Story = {
  args: {
    bekreftAdopsjon: true,
  },
};

export const RisikoAksjonspunkt: Story = {
  args: {
    risikoAp: true,
  },
};
