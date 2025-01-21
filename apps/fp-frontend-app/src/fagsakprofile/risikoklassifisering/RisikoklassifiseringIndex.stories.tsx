import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { DecoratorFunction } from '@storybook/types';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingStatus,
  BehandlingType,
  FagsakStatus,
  FagsakYtelseType,
} from '@navikt/fp-kodeverk';
import { KontrollresultatKode } from '@navikt/fp-sak-risikoklassifisering';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import {
  Behandling,
  BehandlingAppKontekst,
  BehandlingOppretting,
  Fagsak,
  VergeBehandlingmenyValg,
} from '@navikt/fp-types';

import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { RequestPendingProvider } from '../../data/polling/RequestPendingContext';
import { FagsakData } from '../../fagsak/FagsakData';
import { RisikoklassifiseringIndex } from './RisikoklassifiseringIndex';

import initFetchData from '../../../.storybook/testdata/initFetch.json';
import initFetchTilbake from '../../../.storybook/testdata/initFetchTilbake.json';
import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const withRequestPendingProvider: DecoratorFunction<ReactRenderer> = Story => {
  return (
    <RequestPendingProvider>
      <Story />
    </RequestPendingProvider>
  );
};

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
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
    kontrollResultat: {
      kontrollresultat: KontrollresultatKode.HOY,
      medlFaresignaler: undefined,
      iayFaresignaler: undefined,
    },
    risikoAksjonspunkt: {
      definisjon: AksjonspunktKode.VURDER_FARESIGNALER,
      status: AksjonspunktStatus.OPPRETTET,
    },
  },
] as BehandlingAppKontekst[];

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
} as Fagsak;

const meta = {
  title: 'fagsak/RisikoklassifiseringIndex',
  decorators: [withIntl, withRouter, withQueryClient, withRequestPendingProvider],
  component: RisikoklassifiseringIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_OPPRETTES), () => HttpResponse.json(false)),
        http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES), () => HttpResponse.json(false)),
        http.post(getHref(FagsakRel.ENDRE_SAK_MARKERING), () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    setBehandling: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions, fptilbake } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));
    const { data: kodeverkFpTilbake } = useQuery(fptilbake.kodeverkOptions(status === 'success'));

    return kodeverk && kodeverkFpTilbake ? <RisikoklassifiseringIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof RisikoklassifiseringIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FaresignalerOppdaget: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandling: {
      uuid: '1',
      versjon: 1,
    } as Behandling,
  },
};

export const VenterPåFaresignalerNårBehandlingIkkeErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};
