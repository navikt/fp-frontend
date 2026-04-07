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
import type { DokumentMalType } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { UtvidEllerMinskKnapp } from '../UtvidEllerMinskKnapp';
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
  { kode: 'VARREV' satisfies DokumentMalType, navn: 'Varsel om revurdering', tilgjengelig: true },
  { kode: 'INNOPP' satisfies DokumentMalType, navn: 'Innhent', tilgjengelig: true },
];

const ALLE_BEHANDLINGER = [
  lagFagsakBehandling({
    versjon: 2,
    uuid: '1',
    type: 'BT-004',
    behandlendeEnhetId: '2323',
    behandlendeEnhetNavn: 'Nav Vikafossen',
    brevmaler: MALER,
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
    links: [{ href: '/fpsak/bestill', rel: 'brev-bestill', type: 'POST' }],
  }),
];

const FAGSAK = lagFagsak({ saksnummer: '123', behandlinger: ALLE_BEHANDLINGER, brukerManglerAdresse: true });

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
  render: function Render(props) {
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
