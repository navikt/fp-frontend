import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { LosUrl } from '@navikt/fp-los-saksbehandler';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  lagAksjonspunkt,
  lagFagsak,
  lagFagsakBehandling,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type { BehandlingTillatteOperasjoner } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake, oppgaverForFagsaker } from '../../.storybook/testdata';
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

const TILLATTE_OPERASJONER = {
  behandlingFraBeslutter: false,
  behandlingKanBytteEnhet: true,
  behandlingKanGjenopptas: false,
  behandlingKanHenlegges: true,
  behandlingKanMerkesHaster: false,
  behandlingKanOpnesForEndringer: true,
  behandlingKanSendeMelding: true,
  behandlingKanSettesPaVent: true,
  behandlingTilGodkjenning: false,
  vergeBehandlingsmeny: 'OPPRETT',
  uuid: '',
} satisfies BehandlingTillatteOperasjoner;

const ALLE_BEHANDLINGER = [
  lagFagsakBehandling({
    uuid: '1',
    type: 'BT-002',
    status: 'AVSLU',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    opprettet: '2024-01-02T00:54:25.455',
    språkkode: '-',
    behandlingTillatteOperasjoner: TILLATTE_OPERASJONER,
  }),
  lagFagsakBehandling({
    uuid: '2',
    type: 'BT-004',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    opprettet: '2024-08-02T00:54:25.455',
    kontrollResultat: { kontrollresultat: 'HOY' },
    risikoAksjonspunkt: lagAksjonspunkt(AksjonspunktKode.VURDER_FARESIGNALER, { kanLoses: false }),
    språkkode: '-',
    behandlingTillatteOperasjoner: TILLATTE_OPERASJONER,
  }),
];

const FAGSAK = lagFagsak({
  saksnummer: '123',
  bruker: {
    navn: 'Espen Utvikler',
    fødselsnummer: '020400242344',
    kjønn: 'M',
    fødselsdato: '2000-01-01',

    språkkode: '-',
  },
  behandlinger: ALLE_BEHANDLINGER,
  relasjonsRolleType: '-',
  aktørId: '',
  dekningsgrad: 0,
  kontrollResultat: {
    kontrollresultat: '-',
  },
});

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
        http.get(LosUrl.OPPGAVER_FOR_FAGSAKER, () => HttpResponse.json(oppgaverForFagsaker)),
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
  },
};

export const BehandlingErIkkeValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};
