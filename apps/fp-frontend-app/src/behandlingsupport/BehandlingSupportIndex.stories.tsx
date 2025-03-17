import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type { BehandlingAppKontekst, BehandlingOppretting, Fagsak } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingSupportIndex } from './BehandlingSupportIndex';

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

const BEHANDLING = {
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
} as BehandlingAppKontekst;

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: [BEHANDLING],
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
  notater: [
    {
      notat: 'Dette er et notat',
      opprettetAv: 'Espen',
      opprettetTidspunkt: '2024-10-10',
    },
  ],
} as Fagsak;

const meta = {
  title: 'fagsak/BehandlingSupportIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: BehandlingSupportIndex,
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
    hentOgSettBehandling: action('button-click'),
    toggleVisUtvidetBehandlingDetaljerPanel: action('button-click'),
    visUtvidetBehandlingDetaljerPanel: false,
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
            ...BEHANDLING_TILLATTE_OPERASJONER,
            behandlingFraBeslutter: true,
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
            ...BEHANDLING_TILLATTE_OPERASJONER,
            behandlingTilGodkjenning: true,
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
