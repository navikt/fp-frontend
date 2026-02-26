import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { cleanUrl, http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  getIntlDecorator,
  withQueryClient,
  withRouter,
} from '@navikt/fp-storybook-utils';
import type {
  BehandlingOppretting,
  BehandlingTillatteOperasjoner,
  Fagsak,
  FagsakBehandlingDto,
  TotrinnskontrollAksjonspunkt,
  TotrinnskontrollSkjermlenkeContext,
} from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchFpsak, initFetchFptilbake } from '../../../.storybook/testdata/index';
import { FagsakRel, FagsakUrl, initFetchOptions, useFagsakApi, wrapUrl } from '../../data/fagsakApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { UtvidEllerMinskKnapp } from '../UtvidEllerMinskKnapp';
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
    besluttersBegrunnelse: 'begrunnelse',
    totrinnskontrollGodkjent: false,
    beregningDto: { fastsattVarigEndringNæring: false, faktaOmBeregningTilfeller: [] },
    vurderPaNyttArsaker: [],
    uttakPerioder: [],
  }) satisfies TotrinnskontrollAksjonspunkt;

const TOTRINNSKONTROLL_AKSJONSPUNKTER: TotrinnskontrollSkjermlenkeContext[] = [
  {
    skjermlenkeType: 'FAKTA_OM_FOEDSEL',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktKode.SJEKK_MANGLENDE_FØDSEL),
      createAksjonspunkt(AksjonspunktKode.SJEKK_TERMINBEKREFTELSE),
      createAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL),
      createAksjonspunkt(AksjonspunktKode.AUTO_VENT_PÅ_FØDSELREGISTRERING),
    ],
  },
  {
    skjermlenkeType: 'FAKTA_FOR_OMSORG',
    totrinnskontrollAksjonspunkter: [createAksjonspunkt(AksjonspunktKode.AVKLAR_LØPENDE_OMSORG)],
  },
  {
    skjermlenkeType: 'PUNKT_FOR_MEDLEMSKAP',
    totrinnskontrollAksjonspunkter: [
      createAksjonspunkt(AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET),
      createAksjonspunkt(AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR),
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
  vergeBehandlingsmeny: 'OPPRETT',

  behandlingKanMerkesHaster: false,
} satisfies BehandlingTillatteOperasjoner;

const BEHANDLING = {
  versjon: 2,
  uuid: '1',
  behandlingPåVent: false,
  type: 'BT-002',
  status: 'FVED',
  behandlendeEnhetId: '2323',
  behandlendeEnhetNavn: 'Nav Vikafossen',
  aktivPapirsøknad: false,
  toTrinnsBehandling: true,
  behandlingTillatteOperasjoner: BEHANDLING_TILLATTE_OPERASJONER,
  totrinnskontrollÅrsaker: TOTRINNSKONTROLL_AKSJONSPUNKTER,
  behandlingÅrsaker: [
    {
      behandlingArsakType: 'RE-ANNET',
      manueltOpprettet: false,
      erAutomatiskRevurdering: false,
    },
  ],

  opprettet: '',

  gjeldendeVedtak: false,

  behandlingHenlagt: false,

  språkkode: '-',

  ugunstAksjonspunkt: false,

  vilkår: [],
  links: [],
  brevmaler: [],
} satisfies FagsakBehandlingDto;

const FAGSAK = {
  saksnummer: '123',
  fagsakYtelseType: 'FP',
  status: 'UBEH',
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
  brukerManglerAdresse: false,

  fagsakMarkeringer: [],
  historikkinnslag: [],
  kontrollResultat: {
    kontrollresultat: '-',
  },
  harVergeIÅpenBehandling: false,
} satisfies Fagsak;

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
