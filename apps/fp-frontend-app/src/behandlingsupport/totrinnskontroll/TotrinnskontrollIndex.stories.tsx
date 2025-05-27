import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';

import {
  AksjonspunktKode,
  BehandlingArsakType,
  BehandlingStatus,
  BehandlingType,
  FagsakStatus,
  FagsakYtelseType,
} from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type {
  BehandlingAppKontekst,
  BehandlingOppretting,
  Fagsak,
  TotrinnskontrollAksjonspunkt,
} from '@navikt/fp-types';
import { VergeBehandlingmenyValg } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { UtvidEllerMinskKnapp } from '../UtvidEllerMinskKnapp.tsx';
import { TotrinnskontrollIndex } from './TotrinnskontrollIndex';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const getHref = (rel: string) =>
  cleanUrl(
    wrapUrl(
      notEmpty(
        initFetchFpsak.links.find(link => link.rel === rel) ??
          initFetchFpsak.sakLinks.find(link => link.rel === rel) ??
          initFetchFptilbake.links.find(link => link.rel === rel),
      ).href,
    ),
  );

const createAksjonspunkt = (aksjonspunktKode: string) =>
  ({
    aksjonspunktKode,
    opptjeningAktiviteter: [],
    vurderPaNyttArsaker: [],
  }) as TotrinnskontrollAksjonspunkt;

const TOTRINNSKONTROLL_AKSJONSPUNKTER = [
  {
    skjermlenkeType: 'FAKTA_OM_FOEDSEL',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FODSEL),
      createAksjonspunkt(AksjonspunktKode.TERMINBEKREFTELSE),
      createAksjonspunkt(AksjonspunktKode.AUTO_VENT_PÅ_FODSELREGISTRERING),
    ],
  },
  {
    skjermlenkeType: 'FAKTA_FOR_OMSORG',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktKode.OMSORGSOVERTAKELSE),
      createAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_OMSORGSVILKARET),
    ],
  },
  {
    skjermlenkeType: 'PUNKT_FOR_FORELDREANSVAR',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD),
      createAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD),
    ],
  },
];

const BEHANDLING_TILLATTE_OPERASJONER = {
  behandlingFraBeslutter: false,
  behandlingKanSendeMelding: true,
  behandlingTilGodkjenning: true,
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
  behandlingKøet: false,
  behandlingPåVent: false,
  kanHenleggeBehandling: true,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  status: BehandlingStatus.FATTER_VEDTAK,
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'Nav Vikafossen',
  erAktivPapirsoknad: false,
  toTrinnsBehandling: true,
  behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
  totrinnskontrollÅrsaker: TOTRINNSKONTROLL_AKSJONSPUNKTER,
  behandlingÅrsaker: [
    {
      behandlingArsakType: BehandlingArsakType.ANNET,
    },
  ],
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
  title: 'fagsak/TotrinnskontrollIndex',
  decorators: [withIntl, withRouter, withQueryClient],
  component: TotrinnskontrollIndex,
  parameters: {
    msw: {
      handlers: [
        http.get(FagsakUrl.INIT_FETCH, () => HttpResponse.json(initFetchFpsak)),
        http.get(FagsakUrl.INIT_FETCH_FPTILBAKE, () => HttpResponse.json(initFetchFptilbake)),
        http.get(getHref(FagsakRel.KODEVERK), () => HttpResponse.json(alleKodeverk)),
        http.get(getHref(FagsakRel.KODEVERK_FPTILBAKE), () => HttpResponse.json(alleKodeverkTilbakekreving)),
        http.get(getHref(FagsakRel.ALL_DOCUMENTS), () => HttpResponse.json([])),
      ],
    },
  },
  args: {
    fagsakData: new FagsakData(FAGSAK),
    valgtBehandlingUuid: '1',
    setBeslutterFormData: action('button-click'),
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

    return kodeverk ? <TotrinnskontrollIndex {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof TotrinnskontrollIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
