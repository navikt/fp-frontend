import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
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
import type { Behandling, BehandlingAppKontekst, BehandlingOppretting, Fagsak } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak } from '../../.storybook/testdata/initFetchFpsak';
import { initFetchFptilbake } from '../../.storybook/testdata/initFetchFptilbake';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { FagsakProfileIndex } from './FagsakProfileIndex';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  wrapUrl(
    notEmpty(
      initFetchFpsak.links.find(link => link.rel === rel) ??
        initFetchFpsak.sakLinks.find(link => link.rel === rel) ??
        initFetchFptilbake.links.find(link => link.rel === rel) ??
        initFetchFptilbake.sakLinks.find(link => link.rel === rel),
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
    uuid: '1',
    versjon: 1,
    behandlingKøet: false,
    behandlingPåVent: false,
    kanHenleggeBehandling: true,
    type: BehandlingType.FORSTEGANGSSOKNAD,
    status: BehandlingStatus.AVSLUTTET,
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    erAktivPapirsoknad: false,
    opprettet: '2024-01-02T00:54:25.455',
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
  },
  {
    uuid: '2',
    versjon: 1,
    behandlingKøet: false,
    behandlingPåVent: false,
    kanHenleggeBehandling: true,
    type: BehandlingType.REVURDERING,
    status: BehandlingStatus.BEHANDLING_UTREDES,
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    erAktivPapirsoknad: false,
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
    opprettet: '2024-08-02T00:54:25.455',
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
  bruker: {
    navn: 'Espen Utvikler',
    fødselsnummer: '020400242344',
    kjønn: 'M',
    fødselsdato: '2000-01-01',
  },
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
} as Fagsak;

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
        http.post(getHref(FagsakRel.ENDRE_SAK_MARKERING), () => new HttpResponse(null, { status: 200 })),
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
    } as Behandling,
  },
};

export const BehandlingErIkkeValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};
