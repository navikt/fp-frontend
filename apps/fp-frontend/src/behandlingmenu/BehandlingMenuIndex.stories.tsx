import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type { BehandlingOppretting, Fagsak, FagsakBehandlingDtoFpSak } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingMenuIndex } from './BehandlingMenuIndex';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

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
  behandlingKanMerkesHaster: true,
  vergeBehandlingsmeny: 'OPPRETT',
};

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
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
  },
] as FagsakBehandlingDtoFpSak[];

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: 'FP',
  status: 'UBEH',
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
} as Fagsak;

const HANDLERS = [
  http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
  http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
  http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
  http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_OPPRETTES), () => HttpResponse.json(false)),
  http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES), () => HttpResponse.json(false)),
  http.post(getHref(FagsakRel.ENDRE_SAK_MARKERING), () => new HttpResponse(null, { status: 200 })),
];

const meta = {
  title: 'fagsak/BehandlingMenuIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: BehandlingMenuIndex,
  parameters: {
    msw: {
      handlers: HANDLERS.concat(http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak))),
    },
  },
  args: {
    setBehandling: action('button-click'),
    hentOgSettBehandling: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions, fptilbake } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));
    const { data: kodeverkFpTilbake } = useQuery(fptilbake.kodeverkOptions(status === 'success'));

    return kodeverk && kodeverkFpTilbake ? <BehandlingMenuIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof BehandlingMenuIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ValgNårBehandlingErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
  },
};

export const ValgNårBehandlingIkkeErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};

export const ValgNårVeileder: Story = {
  parameters: {
    msw: {
      handlers: HANDLERS.concat(
        http.get(FagsakUrl.INIT_FETCH, () =>
          HttpResponse.json({
            ...initFetchFpsak,
            innloggetBruker: { ...initFetchFpsak.innloggetBruker, kanVeilede: true },
          }),
        ),
      ),
    },
  },
  args: {
    behandlingUuid: '1',
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [
        {
          ...ALLE_BEHANDLINGER[0]!,
          behandlingTillatteOperasjoner: {
            uuid: '1',
            behandlingFraBeslutter: false,
            behandlingKanSendeMelding: false,
            behandlingTilGodkjenning: false,
            behandlingKanBytteEnhet: false,
            behandlingKanHenlegges: false,
            behandlingKanGjenopptas: false,
            behandlingKanOpnesForEndringer: false,
            behandlingKanSettesPaVent: false,
            behandlingKanMerkesHaster: true,
            vergeBehandlingsmeny: 'SKJUL',
          },
        },
      ],
    }),
  },
};
