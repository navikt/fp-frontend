import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, DokumentMalType, FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import { BehandlingAppKontekst, BehandlingOppretting, Fagsak, VergeBehandlingmenyValg } from '@navikt/fp-types';

import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { FagsakData } from '../../fagsak/FagsakData';
import { MeldingIndex } from './MeldingIndex';

import initFetchData from '../../../.storybook/testdata/initFetch.json';
import initFetchTilbakeData from '../../../.storybook/testdata/initFetchTilbake.json';
import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  wrapUrl(
    notEmpty(
      initFetchData.links.find(link => link.rel === rel) ?? initFetchTilbakeData.links.find(link => link.rel === rel),
    ).href,
  );

const MALER = [
  { kode: 'Mal1', navn: 'Mal 1', tilgjengelig: true },
  { kode: 'Mal2', navn: 'Mal 2', tilgjengelig: true },
  { kode: 'Mal3', navn: 'Mal 3', tilgjengelig: true },
  { kode: DokumentMalType.VARSEL_OM_REVURDERING, navn: 'Varsel om revurdering', tilgjengelig: true },
  { kode: DokumentMalType.INNHENTE_OPPLYSNINGER, navn: 'Innhent', tilgjengelig: true },
];

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
    brevmaler: MALER,
    sprakkode: 'NO',
    links: [
      {
        href: '/fpsak/bestill',
        rel: 'brev-bestill',
      },
    ],
  },
] as BehandlingAppKontekst[];

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  status: FagsakStatus.UNDER_BEHANDLING,
  behandlinger: ALLE_BEHANDLINGER,
  sakSkalTilInfotrygd: false,
  behandlingTypeKanOpprettes: [] as BehandlingOppretting[],
  brukerManglerAdresse: true,
} as Fagsak;

const meta = {
  title: 'fagsak/MeldingIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: MeldingIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchData)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchTilbakeData)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.post(wrapUrl(ALLE_BEHANDLINGER[0].links[0].href), () => HttpResponse.json()),
      ],
    },
  },
  args: {
    fagsakData: new FagsakData(FAGSAK),
    valgtBehandlingUuid: '1',
    setMeldingFormData: action('button-click'),
    hentOgSettBehandling: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const { status } = useQuery(initFetchOptions());
    const { kodeverkOptions } = useFagsakApi();
    const { data: kodeverk } = useQuery(kodeverkOptions(status === 'success'));

    return kodeverk ? <MeldingIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof MeldingIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};