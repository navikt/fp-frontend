import { type ComponentProps, useState } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingStatus,
  BehandlingType,
  FagsakMarkeringKode,
  FagsakYtelseType,
  KonsekvensForYtelsen,
  OppgaveType,
  RelasjonsRolleType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData, withRouter } from '@navikt/fp-storybook-utils';
import type {
  Aksjonspunkt,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  BrevOverstyring,
  Fagsak,
  OppgaveId,
  Vilkar,
} from '@navikt/fp-types';

import mal from '../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../.storybook/brevmal/redigertInnhold.html?raw';
import { VedtakEditeringProvider } from './VedtakEditeringContext';
import { VedtakProsessIndex } from './VedtakProsessIndex';

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
  },
] as Aksjonspunkt[];

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  språkkode: 'NB',
  behandlingsresultat: {
    type: BehandlingResultatType.INNVILGET,
  },
  behandlingPåVent: false,
  behandlingHenlagt: false,
  aksjonspunkt: defaultAksjonspunkter,
  behandlingÅrsaker: [
    {
      behandlingArsakType: BehandlingArsakType.ANNET,
    },
  ],
} as Behandling;

const defaultVilkar = [
  {
    lovReferanse: '§§Dette er en lovreferanse',
    vilkarType: VilkarType.FODSELSVILKARET_MOR,
    vilkarStatus: VilkarUtfallType.OPPFYLT,
    overstyrbar: true,
  },
] as Vilkar[];

const defaultberegningresultatDagytelse = {
  antallBarn: 1,
  beregnetTilkjentYtelse: 10000,
} as BeregningsresultatDagytelse;

const meta = {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withRouter],
  args: {
    vilkar: defaultVilkar,
    previewCallback: action('button-click'),
  },
  render: args => {
    const [redigertHtml, setRedigertHtml] = useState<string | null>(null);

    const mellomlagreBrevOverstyring = (redigert: string | null) => {
      setRedigertHtml(redigert);
      action('button-click')(redigert);
      return Promise.resolve();
    };

    return (
      <VedtakEditeringProvider
        behandling={args.behandling ?? defaultBehandling}
        hentBrevOverstyring={() => {
          return redigertHtml && args.brevOverstyring
            ? Promise.resolve({
                opprinneligHtml: args.brevOverstyring.opprinneligHtml,
                redigertHtml,
              })
            : Promise.resolve(args.brevOverstyring);
        }}
        hentBrevOverstyringIsPending={false}
        mellomlagreBrevOverstyring={mellomlagreBrevOverstyring}
      >
        <VedtakProsessIndex {...args} />
      </VedtakEditeringProvider>
    );
  },
} satisfies Meta<PanelDataArgs & { brevOverstyring: BrevOverstyring } & ComponentProps<typeof VedtakProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentForeldrepengerForSaksbehandler: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: BehandlingResultatType.INNVILGET,
        harRedigertVedtaksbrev: true,
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: redigertInnhold },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const AvslåttForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
        },
        {
          definisjon: AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
        },
        {
          definisjon: AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
          toTrinnsBehandling: true,
        },
      ],
    },
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
        },
      ],
    },
    oppgaver: [
      {
        oppgaveId: { id: '1' },
        oppgavetype: OppgaveType.VUR_KONSEKVENS,
        beskrivelser: [
          {
            header: null,
            kommentarer: ['VL: Se sto mottatt 24.02.25'],
          },
        ],
        dokumenter: [],
      },
      {
        oppgaveId: { id: '2' },
        oppgavetype: OppgaveType.VUR_KONSEKVENS,
        beskrivelser: [
          {
            header: '--- 19.03.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: [
              'Fullmektig tar kontakt. Ber om fristutsettelse 4 uker, ettersom bruker først mottok brevet i dag. ' +
                'Jeg har utsatt 14 dager, men han ønsker ytterligere 2 uker utover det, altså 28.09.24.',
              'Kan dere gi tilbakemelding på dette?',
            ],
          },
          {
            header: null,
            kommentarer: ['VL: Se sto mottatt 20.02.25'],
          },
        ],
        dokumenter: [],
      },
      {
        oppgaveId: { id: '3' },
        oppgavetype: OppgaveType.VUR_DOKUMENT,
        beskrivelser: [{ header: null, kommentarer: ['VL: Bekreftelse fra arbeidsgiver'] }],
        dokumenter: [
          {
            journalpostId: '123',
            dokumentId: '321',
            tittel: 'Dokumentasjon av mors deltakelse i kvalifiseringsprogrammet',
          },
          {
            journalpostId: '123',
            dokumentId: '987',
            tittel: 'Dokumentasjon på reiser til og fra Norge',
          },
          {
            journalpostId: '123',
            dokumentId: '678',
            tittel: 'Ettersendelse til søknad om foreldrepenger ved fødsel',
          },
        ],
      },
      {
        oppgaveId: { id: '4' },
        oppgavetype: OppgaveType.VUR_DOKUMENT,
        beskrivelser: [{ header: null, kommentarer: ['VL: Bekreftelse fra studiested/skole'] }],
        dokumenter: [
          {
            journalpostId: '123',
            dokumentId: '456',
            tittel: 'Dokumentasjon på at mor studerer på heltid',
          },
        ],
      },
      {
        oppgaveId: { id: '5' },
        oppgavetype: OppgaveType.VUR_DOKUMENT,
        beskrivelser: [
          {
            header: '--- 19.01.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: [
              'Bruker sier at han har søkt Foreldrepenger, han er i permisjon nå. Han har ikke fått svar, han skriver at saksnr er: 12341234.',
            ],
          },
          {
            header: null,
            kommentarer: [
              'Han har AAP, så det er greit å vite om han får Foreldrepenger før man evt stanser denne ytelsen.',
            ],
          },
          {
            header: '--- 19.02.2025 11:24 F_Z990245 E_Z990245 (Z990245, 0219) ---',
            kommentarer: ['Må ringe bruker for å avklare AAP og Foreldrepenger', 'Undersøk dette før vi går videre'],
          },
          { header: null, kommentarer: ['VL: Søknad om foreldrepenger ved fødsel'] },
        ],
        dokumenter: [
          {
            journalpostId: '321',
            dokumentId: '456',
            tittel: 'Dokumentasjon av termindato (lev. kun av mor), fødsel eller dato for omsorgsovertakelse',
          },
          {
            journalpostId: '321',
            dokumentId: '678',
            tittel: 'Ettersendelse til søknad om svangerskapspenger til selvstendig næringsdrivende og frilanser',
          },
        ],
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

/*
 * Førstegangssøknad - Engangsstøand
 */

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentEngangsstønadForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
    },
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const InnvilgetEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const AvslåttEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling,
    beregningresultatEngangsstonad: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.SVANGERSKAPSPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

/*
 * Revurdering - Foreldrepenger
 */

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsen.ENDRING_I_BEREGNING,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsen.ENDRING_I_BEREGNING,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsen.ENDRING_I_BEREGNING,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsen.ENDRING_I_BEREGNING,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.FORELDREPENGER_OPPHØRER],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling,
    beregningsresultatOriginalBehandling: {
      'beregningsresultat-foreldrepenger': {
        ...defaultberegningresultatDagytelse,
      },
    },
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
      },
    } as Behandling,
    beregningsresultatOriginalBehandling: {
      'beregningsresultat-foreldrepenger': {
        ...defaultberegningresultatDagytelse,
      },
    },
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING],
        avslagsarsak: '1007',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    vilkar: [
      {
        lovReferanse: '§§Dette er en lovreferanse',
        vilkarType: VilkarType.SOKNADFRISTVILKARET,
        vilkarStatus: VilkarUtfallType.IKKE_OPPFYLT,
        overstyrbar: true,
      },
    ],
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    beregningsgrunnlag: {
      beregningsgrunnlagPeriode: [
        {
          beregningsgrunnlagPrStatusOgAndel: [
            {
              overstyrtPrAar: 0,
            },
          ],
        },
      ],
    } as Beregningsgrunnlag,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const LegacyOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: BehandlingResultatType.INNVILGET,
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const LegacyOverstyringHarSendtTilbakeFraBeslutter: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.OPPRETTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        type: BehandlingResultatType.INNVILGET,
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};

export const SkalKunneRedigereFooterNårEnHarFagsakmarkeringPraksisUtsettelse: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      saksnummer: '1234567',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      bruker: { navn: 'Kari Nordmann' },
      annenPart: { navn: 'Ola Nordmann' },
      relasjonsRolleType: RelasjonsRolleType.MOR,
      annenpartBehandling: {
        relasjonsRolleType: RelasjonsRolleType.FAR,
      },
      fagsakMarkeringer: [
        {
          fagsakMarkering: FagsakMarkeringKode.PRAKSIS_UTSETTELSE,
          kortNavn: 'Utsettelse',
        },
      ],
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
    ferdigstillOppgave: action('button-click') as (oppgaveId: OppgaveId) => Promise<void>,
  },
};
