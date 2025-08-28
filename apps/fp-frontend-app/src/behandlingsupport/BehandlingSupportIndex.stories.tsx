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
import type { BehandlingAppKontekst, BehandlingOppretting, Fagsak } from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../data/fagsakApi';
import { FagsakData } from '../fagsak/FagsakData';
import { BehandlingSupportIndex } from './BehandlingSupportIndex';

import messages from '../../i18n/nb_NO.json';
import { BehandlingStatusEnum, BehandlingTypeEnum, FagsakStatusEnum } from '@navikt/fp-kodeverk';

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
  behandlingKanMerkesHaster: false,
  vergeBehandlingsmeny: VergeBehandlingmenyValg.OPPRETT,
};

// @ts-expect-error -- fiks senere
const BEHANDLING = {
  versjon: 2,
  uuid: '1',
  behandlingKøet: false,
  behandlingPåVent: false,
  kanHenleggeBehandling: true,
  type: BehandlingTypeEnum.REVURDERING,
  status: BehandlingStatusEnum.BEHANDLING_UTREDES,
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'Nav Vikafossen',
  erAktivPapirsoknad: false,
  behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
} as BehandlingAppKontekst;

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: 'FP',
  status: FagsakStatusEnum.UNDER_BEHANDLING,
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
            ...BEHANDLING_TILLATTE_OPERASJONER,
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
            ...BEHANDLING_TILLATTE_OPERASJONER,
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
