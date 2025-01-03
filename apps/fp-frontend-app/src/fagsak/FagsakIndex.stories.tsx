import { MemoryRouter, Route, Routes } from 'react-router';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import MockAdapter from 'axios-mock-adapter';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
} from '@navikt/fp-storybook-utils';
import { BehandlingAppKontekst, BehandlingOppretting, Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { requestBehandlingApi } from '../data/behandlingContextApi';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';
import { FagsakIndex } from './FagsakIndex';

import behandlingV1Data from '../../.storybook/testdata/behandlingV1.json';
import initFetchData from '../../.storybook/testdata/initFetch.json';
import initFetchTilbake from '../../.storybook/testdata/initFetchTilbake.json';
import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  wrapUrl(
    notEmpty(
      initFetchData.links.find(link => link.rel === rel) ??
        initFetchData.sakLinks.find(link => link.rel === rel) ??
        initFetchTilbake.links.find(link => link.rel === rel) ??
        initFetchTilbake.sakLinks.find(link => link.rel === rel),
    ).href,
  );

const BEHANDLING_TILLATTE_OPERASJONER = {
  behandlingFraBeslutter: false,
  behandlingKanSendeMelding: true,
  behandlingTilGodkjenning: false,
  behandlingKanBytteEnhet: true,
  behandlingKanHenlegges: true,
  behandlingKanGjenopptas: false,
  behandlingKanOpnesForEndringer: true,
  behandlingKanSettesPaVent: true,
  vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
};

const ALLE_BEHANDLINGER = [
  {
    versjon: 2,
    uuid: '1',
    behandlingKoet: false,
    behandlingPaaVent: false,
    kanHenleggeBehandling: true,
    type: BehandlingType.REVURDERING,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    erAktivPapirsoknad: false,
    opprettet: '2024-08-02T00:54:25.455',
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
  },
] as BehandlingAppKontekst[];

const FAGSAK = {
  saksnummer: '352018689',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
  notater: [
    {
      notat: 'Dette er et notat',
      opprettetAv: 'Espen',
      opprettetTidspunkt: '2024-10-10',
    },
  ],
  bruker: {
    navn: 'Espen Utvikler',
    fødselsnummer: '020400242344',
    kjønn: 'M',
    fødselsdato: '2000-01-01',
  },
} as Fagsak;

const fagsakFpTilbake = {
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
};

const meta = {
  title: 'fagsak/FagsakIndex',
  decorators: [withIntl, withQueryClient],
  component: FagsakIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.get(getHref(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(FAGSAK)),
        http.get(getHref(FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE), () => HttpResponse.json(fagsakFpTilbake)),
      ],
    },
  },
  render: () => {
    const apiMockBehandling = new MockAdapter(requestBehandlingApi.getAxios());
    apiMockBehandling.onPost('/fpsak/api/behandlinger').reply(200, behandlingV1Data);

    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions, fptilbake } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));
    const { data: kodeverkFpTilbake } = useQuery(fptilbake.kodeverkOptions(status === 'success'));

    return kodeverk && kodeverkFpTilbake ? (
      <MemoryRouter initialEntries={['/fagsak/352018689/']}>
        <Routes>
          <Route element={<FagsakIndex />} path="/fagsak/:saksnummer/*" />
        </Routes>
      </MemoryRouter>
    ) : (
      <LoadingPanel />
    );
  },
} satisfies Meta<typeof FagsakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
