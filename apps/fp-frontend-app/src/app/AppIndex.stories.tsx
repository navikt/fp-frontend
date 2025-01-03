import { ComponentProps } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Meta, StoryObj } from '@storybook/react';
import MockAdapter from 'axios-mock-adapter';
import { http, HttpResponse } from 'msw';

import { RestApiErrorProvider, RestApiProvider } from '@navikt/fp-rest-api-hooks';
import { alleKodeverk, alleKodeverkTilbakekreving } from '@navikt/fp-storybook-utils';

import { requestBehandlingApi } from '../data/behandlingContextApi';
import { FagsakRel, FagsakUrl, wrapUrl } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';
import { AppIndexWrapper } from './AppIndex';

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

const getHref = (rel: string) =>
  wrapUrl(
    notEmpty(
      initFetchData.links.find(link => link.rel === rel) ??
        initFetchData.sakLinks.find(link => link.rel === rel) ??
        initFetchTilbakeData.links.find(link => link.rel === rel) ??
        initFetchTilbakeData.sakLinks.find(link => link.rel === rel),
    ).href,
  );

const HANDLERS = [
  http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
  http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
  http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
  http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
  http.get(getHref(FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE), () => HttpResponse.json(fagsakFullTilbakeData)),
  http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json(dokumenterData)),
];

const meta = {
  title: 'app/app',
  component: AppIndexWrapper,
  render: ({ bekreftAdopsjon = false }) => {
    const fagsakId = '3';
    const behandlingUuid = '7d198233-b499-4aaf-a01b-be97958e20ce';

    const apiMockBehandling = new MockAdapter(requestBehandlingApi.getAxios());

    apiMockBehandling.onPost('/fpsak/api/behandlinger').reply(200, behandlingV1Data);

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
      <MemoryRouter initialEntries={[`/fagsak/${fagsakId}/`]}>
        <RestApiProvider>
          <RestApiErrorProvider>
            <AppIndexWrapper />
          </RestApiErrorProvider>
        </RestApiProvider>
      </MemoryRouter>
    );
  },
} satisfies Meta<{ bekreftAdopsjon?: boolean } & ComponentProps<typeof AppIndexWrapper>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BekreftAdopsjon: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat([http.get(getHref(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(fagsakFullData))]),
    },
  },
  args: {
    bekreftAdopsjon: true,
  },
};

export const RisikoAksjonspunkt: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat([
        http.get(getHref(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(fagsakFullRisikoApData)),
      ]),
    },
  },
};
