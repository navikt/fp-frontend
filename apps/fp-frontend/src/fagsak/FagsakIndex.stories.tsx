import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import type { DecoratorFunction } from 'storybook/internal/types';

import { LosUrl } from '@navikt/fp-los-saksbehandler';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
} from '@navikt/fp-storybook-utils';
import type { BehandlingTillatteOperasjoner, Fagsak, FagsakBehandlingDto } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { behandling, initFetchFpsak, initFetchFptilbake, oppgaverForFagsaker } from '../../.storybook/testdata';
import { BehandlingUrl } from '../data/behandlingApi';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { RequestPendingProvider } from '../data/polling/RequestPendingContext';
import { FagsakIndex } from './FagsakIndex';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const withRequestPendingProvider: DecoratorFunction<ReactRenderer> = Story => {
  return (
    <RequestPendingProvider>
      <Story />
    </RequestPendingProvider>
  );
};

const getHref = (rel: string) =>
  cleanUrl(
    wrapUrl(
      notEmpty(
        initFetchFpsak.links.find(link => link.rel === rel) ??
          initFetchFpsak.sakLinks.find(link => link.rel === rel) ??
          initFetchFptilbake.links.find(link => link.rel === rel) ??
          initFetchFptilbake.sakLinks.find(link => link.rel === rel),
      ).href,
    ),
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
  behandlingKanMerkesHaster: false,
} satisfies BehandlingTillatteOperasjoner;

const ALLE_BEHANDLINGER = [
  {
    versjon: 2,
    uuid: '1',
    behandlingPåVent: false,
    type: 'BT-004',
    status: 'UTRED',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    aktivPapirsøknad: false,
    opprettet: '2024-08-02T00:54:25.455',
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
    gjeldendeVedtak: false,
    behandlingHenlagt: false,
    språkkode: '-',
    toTrinnsBehandling: false,
    ugunstAksjonspunkt: false,
    behandlingÅrsaker: [],
    vilkår: [],
    links: [],
    brevmaler: [],
    totrinnskontrollÅrsaker: [],
  },
] satisfies FagsakBehandlingDto[];

const FAGSAK = {
  saksnummer: '352018689',
  fagsakYtelseType: 'FP',
  status: 'UBEH',
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [],
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
    språkkode: '-',
  },
  relasjonsRolleType: '-',
  aktørId: '',
  dekningsgrad: 0,
  brukerManglerAdresse: false,
  fagsakMarkeringer: [],
  historikkinnslag: [],
  kontrollResultat: {
    kontrollresultat: '-',
    iayFaresignaler: undefined,
    medlFaresignaler: undefined,
    faresignalVurdering: undefined,
  },
  harVergeIÅpenBehandling: false,
} satisfies Fagsak;

const fagsakFpTilbake = {
  behandlingTypeKanOpprettes: [],
  behandlinger: [],
};

const meta = {
  title: 'fagsak/FagsakIndex',
  decorators: [withIntl, withQueryClient, withRequestPendingProvider],
  component: FagsakIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.get(getHref(FagsakRel.FETCH_FAGSAK), () => HttpResponse.json(FAGSAK)),
        http.get(getHref(FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE), () => HttpResponse.json(fagsakFpTilbake)),
        http.post(BehandlingUrl.BEHANDLING, () => HttpResponse.json(behandling)),
        http.get(LosUrl.OPPGAVER_FOR_FAGSAKER, () => HttpResponse.json(oppgaverForFagsaker)),
      ],
    },
  },
  render: () => {
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
