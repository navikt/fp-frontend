import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  lagFagsak,
  lagFagsakBehandling,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingSupportIndex } from './BehandlingSupportIndex';

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

const BEHANDLING = lagFagsakBehandling({
  versjon: 2,
  uuid: '1',
  type: 'BT-004',
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'Nav Vikafossen',
  opprettet: '',
  språkkode: '-',
  behandlingTillatteOperasjoner: {
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
  },
});

const FAGSAK = lagFagsak({
  saksnummer: '123',
  behandlinger: [BEHANDLING],
  notater: [
    {
      notat: 'Dette er et notat',
      opprettetAv: 'Espen',
      opprettetTidspunkt: '2024-10-10',
    },
  ],
  relasjonsRolleType: '-',
  aktørId: '',
  dekningsgrad: 0,
  bruker: {
    navn: '',
    fødselsnummer: '',
    kjønn: '-',
    fødselsdato: '',
    dødsdato: undefined,
    språkkode: '-',
  },
  kontrollResultat: {
    kontrollresultat: '-',
  },
});

const meta = {
  title: 'fagsak/BehandlingSupportIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: BehandlingSupportIndex,
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
    hentOgSettBehandling: action('button-click'),
    toggleVisUtvidetBehandlingDetaljer: action('button-click'),
    visUtvidetBehandlingDetaljer: false,
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions, fptilbake } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));
    const { data: kodeverkFpTilbake } = useQuery(fptilbake.kodeverkOptions(status === 'success'));

    return kodeverk && kodeverkFpTilbake ? <BehandlingSupportIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof BehandlingSupportIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const NårBehandlingErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
    behandlingUuid: '1',
    behandlingVersjon: 1,
  },
};

export const SkalViseFraBeslutter: Story = {
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [
        {
          ...BEHANDLING,
          behandlingTillatteOperasjoner: {
            ...BEHANDLING.behandlingTillatteOperasjoner,
            behandlingFraBeslutter: true,
            uuid: '',
          },
        },
      ],
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1,
  },
};

export const SkalViseFraGodkjenning: Story = {
  args: {
    fagsakData: new FagsakData({
      ...FAGSAK,
      behandlinger: [
        {
          ...BEHANDLING,
          behandlingTillatteOperasjoner: {
            ...BEHANDLING.behandlingTillatteOperasjoner,
            behandlingTilGodkjenning: true,
            uuid: '',
          },
        },
      ],
    }),
    behandlingUuid: '1',
    behandlingVersjon: 1,
  },
};

export const NårBehandlingIkkeErValgt: Story = {
  args: {
    fagsakData: new FagsakData(FAGSAK),
  },
};
