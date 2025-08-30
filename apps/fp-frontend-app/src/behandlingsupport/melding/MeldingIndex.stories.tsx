import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { BehandlingStatusEnum, BehandlingTypeEnum, DokumentMalType, FagsakStatusEnum } from '@navikt/fp-kodeverk';
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

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { UtvidEllerMinskKnapp } from '../UtvidEllerMinskKnapp.tsx';
import { MeldingIndex } from './MeldingIndex';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  cleanUrl(
    wrapUrl(
      notEmpty(
        initFetchFpsak.links.find(link => link.rel === rel) ?? initFetchFptilbake.links.find(link => link.rel === rel),
      ).href,
    ),
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
    behandlingKøet: false,
    behandlingPåVent: false,
    type: BehandlingTypeEnum.REVURDERING,
    status: BehandlingStatusEnum.BEHANDLING_UTREDES,
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    erAktivPapirsoknad: false,
    behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
    brevmaler: MALER,
    språkkode: 'NB',
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
  fagsakYtelseType: 'FP',
  status: FagsakStatusEnum.UNDER_BEHANDLING,
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
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.post(wrapUrl(notEmpty(ALLE_BEHANDLINGER[0]?.links[0]).href), () => HttpResponse.json()),
      ],
    },
  },
  args: {
    fagsakData: new FagsakData(FAGSAK),
    valgtBehandlingUuid: '1',
    setMeldingFormData: action('button-click'),
    hentOgSettBehandling: action('button-click'),
    toggleVisUtvidetBehandlingDetaljerKnapp: (
      <UtvidEllerMinskKnapp
        toggleVisUtvidetBehandlingDetaljer={action('button-click')}
        visUtvidetBehandlingDetaljer={false}
      />
    ),
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
