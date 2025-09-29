import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';
import type { DecoratorFunction } from 'storybook/internal/types';

import { AksjonspunktKode, AksjonspunktStatus, BehandlingStatusEnum, FagsakStatusEnum } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type { Behandling, Fagsak } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { RequestPendingProvider } from '../../data/polling/RequestPendingContext';
import { FagsakData } from '../../fagsak/FagsakData';
import { RisikoklassifiseringIndex } from './RisikoklassifiseringIndex';

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

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: 'FP',
  status: FagsakStatusEnum.UNDER_BEHANDLING,
  behandlinger: [
    {
      versjon: 2,
      uuid: '1',
      behandlingKøet: false,
      behandlingPåVent: false,
      type: 'BT-004',
      status: BehandlingStatusEnum.BEHANDLING_UTREDES,
      behandlendeEnhetId: '2323',
      behandlendeEnhetNavn: 'Nav Vikafossen',
      erAktivPapirsoknad: false,
      behandlingTillatteOperasjoner: {
        behandlingFraBeslutter: false,
        behandlingKanSendeMelding: true,
        behandlingTilGodkjenning: false,
        behandlingKanBytteEnhet: true,
        behandlingKanHenlegges: true,
        behandlingKanGjenopptas: false,
        behandlingKanOpnesForEndringer: true,
        behandlingKanSettesPaVent: true,
        vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
        uuid: '',
        behandlingKanMerkesHaster: false,
      },
      kontrollResultat: {
        kontrollresultat: 'HOY',
      },
      risikoAksjonspunkt: {
        definisjon: AksjonspunktKode.VURDER_FARESIGNALER,
        status: AksjonspunktStatus.OPPRETTET,

        toTrinnsBehandling: false,

        aksjonspunktType: '-',
        kanLoses: false,
        erAktivt: false,
      },

      opprettet: '',

      gjeldendeVedtak: false,

      behandlingHenlagt: false,

      språkkode: '-',

      toTrinnsBehandling: false,

      behandlingÅrsaker: [],
      vilkår: [],
      links: [],
      brevmaler: [],
      totrinnskontrollÅrsaker: [],
    },
  ],
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [],
  relasjonsRolleType: '-',
  aktørId: '',
  dekningsgrad: 0,
  bruker: {
    navn: '',
    fødselsnummer: '',
    kjønn: '-',

    fødselsdato: '',

    dodsdato: undefined,
    språkkode: '-',
  },
  brukerManglerAdresse: false,

  fagsakMarkeringer: [],
  historikkinnslag: [],
  notater: [],
  kontrollResultat: {
    kontrollresultat: '-',
  },
  harVergeIÅpenBehandling: false,
} satisfies Fagsak;

const meta = {
  title: 'fagsak/RisikoklassifiseringIndex',
  decorators: [withIntl, withRouter, withQueryClient, withRequestPendingProvider],
  component: RisikoklassifiseringIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_OPPRETTES), () => HttpResponse.json(false)),
        http.get(getHref(FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES), () => HttpResponse.json(false)),
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
