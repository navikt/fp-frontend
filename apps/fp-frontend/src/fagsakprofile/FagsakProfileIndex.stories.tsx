import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator, lagAksjonspunkt,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type {
  BehandlingFpSak,
  BehandlingOppretting,
  BehandlingTillatteOperasjoner,
  Fagsak,
  FagsakBehandlingDto,
} from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { FagsakProfileIndex } from './FagsakProfileIndex';

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
  vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
  uuid: '',
  behandlingKanMerkesHaster: false,
} satisfies BehandlingTillatteOperasjoner;

const ALLE_BEHANDLINGER = [
  {
    uuid: '1',
    versjon: 1,
    behandlingPåVent: false,
    type: 'BT-002',
    status: 'AVSLU',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    aktivPapirsøknad: false,
    opprettet: '2024-01-02T00:54:25.455',
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
  {
    uuid: '2',
    versjon: 1,
    behandlingPåVent: false,
    type: 'BT-004',
    status: 'UTRED',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    aktivPapirsøknad: false,
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
    opprettet: '2024-08-02T00:54:25.455',
    kontrollResultat: {
      kontrollresultat: 'HOY',
    },
    risikoAksjonspunkt: lagAksjonspunkt(
      AksjonspunktKode.VURDER_FARESIGNALER,{
      kanLoses: false,
      erAktivt: false,
    }),

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
  saksnummer: '123',
  bruker: {
    navn: 'Espen Utvikler',
    fødselsnummer: '020400242344',
    kjønn: 'M',
    fødselsdato: '2000-01-01',

    språkkode: '-',
  },
  fagsakYtelseType: 'FP',
  status: 'UBEH',
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
  relasjonsRolleType: '-',
  aktørId: '',
  dekningsgrad: 0,
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
  title: 'fagsak/FagsakProfileIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: FagsakProfileIndex,
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
    hentOgSettBehandling: action('button-click'),
    toggleSideMeny: action('button-click'),
    visSideMeny: true,
    visUtvidetBehandlingDetaljer: false,
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions, fptilbake } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));
    const { data: kodeverkFpTilbake } = useQuery(fptilbake.kodeverkOptions(status === 'success'));

    return kodeverk && kodeverkFpTilbake ? <FagsakProfileIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof FagsakProfileIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const BehandlingErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandling: {
      versjon: 1,
    } as BehandlingFpSak,
  },
};

export const BehandlingErIkkeValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};
