import { type ComponentProps, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  AksjonspunktType,
  Avslagsarsak,
  BehandlingArsakTypeEnum,
  BehandlingResultatType,
  BehandlingStatusEnum,
  BehandlingTypeEnum,
  FagsakMarkeringKode,
  KonsekvensForYtelsenEnum,
  OppgaveType,
  RelasjonsRolleType,
  VedtakbrevType,
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
  Vilkar,
} from '@navikt/fp-types';

import mal from '../.storybook/brevmal/mal.html?raw';
import redigertInnhold from '../.storybook/brevmal/redigertInnhold.html?raw';
import { VedtakEditeringProvider } from './VedtakEditeringContext';
import { VedtakProsessIndex } from './VedtakProsessIndex';

const defaultAksjonspunkt = {
  definisjon: AksjonspunktKode.FORESLA_VEDTAK,
  status: AksjonspunktStatus.OPPRETTET,
  begrunnelse: null,
  kanLoses: true,
  toTrinnsBehandling: false,
  toTrinnsBehandlingGodkjent: null,
  vurderPaNyttArsaker: null,
  besluttersBegrunnelse: null,
  aksjonspunktType: AksjonspunktType.AUTOPUNKT,
  vilkarType: VilkarType.OMSORGSVILKARET,
  erAktivt: true,
  fristTid: null,
  endretTidspunkt: null,
  endretAv: null,
} satisfies Aksjonspunkt;
const defaultAksjonspunkter = [defaultAksjonspunkt];

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
  status: BehandlingStatusEnum.BEHANDLING_UTREDES,
  språkkode: 'NB',
  behandlingsresultat: {
    type: BehandlingResultatType.INNVILGET,
    vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
  },
  behandlingPåVent: false,
  behandlingHenlagt: false,
  aksjonspunkt: defaultAksjonspunkter,
  behandlingÅrsaker: [
    {
      behandlingArsakType: BehandlingArsakTypeEnum.ANNET,
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
    ferdigstillOppgave: action('button-click') as (oppgaveId: string) => Promise<void>,
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
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentForeldrepengerForSaksbehandler: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.AVSLUTTET,
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: VedtakbrevType.FRITEKST,
        type: BehandlingResultatType.INNVILGET,
        harRedigertVedtaksbrev: true,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: redigertInnhold },
  },
};

export const AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
  },
};

export const AvslåttForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
  },
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: null,
          kanLoses: false,
          toTrinnsBehandling: true,
        },
      ],
    },
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
  },
};

export const OppgaverForAksjonspunkterSomSaksbehandlerMåTaStillingTil: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        ...defaultAksjonspunkter,
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
          toTrinnsBehandling: true,
        },
        {
          ...defaultAksjonspunkt,
          definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
          status: AksjonspunktStatus.OPPRETTET,
          begrunnelse: 'Dette er en begrunnelse',
          kanLoses: false,
        },
      ],
    },
    oppgaver: [
      {
        oppgaveId: '1',
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
        oppgaveId: '2',
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
        oppgaveId: '3',
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
        oppgaveId: '4',
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
        oppgaveId: '5',
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
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Førstegangssøknad - Engangsstøand
 */

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentEngangsstønadForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.AVSLUTTET,
    },
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: 'ES',
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
  },
};

export const AvslåttEngangsstønadDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    fagsak: {
      fagsakYtelseType: 'SVP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

/*
 * Revurdering - Foreldrepenger
 */

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING,
          KonsekvensForYtelsenEnum.FORELDREPENGER_OPPHØRER,
        ],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING,
          KonsekvensForYtelsenEnum.FORELDREPENGER_OPPHØRER,
        ],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING,
          KonsekvensForYtelsenEnum.FORELDREPENGER_OPPHØRER,
        ],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [
          KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING,
          KonsekvensForYtelsenEnum.FORELDREPENGER_OPPHØRER,
        ],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: VedtakbrevType.FRITEKST,
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsenEnum.FORELDREPENGER_OPPHØRER],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    originaltBeregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING],
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
  },
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        konsekvenserForYtelsen: [KonsekvensForYtelsenEnum.ENDRING_I_BEREGNING],
        avslagsarsak: Avslagsarsak.MANN_ADOPTERER_IKKE_ALENE,
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
        avslagKode: null,
        evaluering: null,
        input: null,
      },
    ],
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingTypeEnum.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.OPPHOR,
        opphørsdato: '2024-11-01',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
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
  },
};

export const LegacyOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: VedtakbrevType.FRITEKST,
        type: BehandlingResultatType.INNVILGET,
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: true,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const LegacyOverstyringHarSendtTilbakeFraBeslutter: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatusEnum.OPPRETTET,
      behandlingsresultat: {
        vedtaksbrev: VedtakbrevType.FRITEKST,
        type: BehandlingResultatType.INNVILGET,
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er en fritekst',
        vedtaksbrevStatus: 'VEDTAKSBREV_PRODUSERES',
      },
    } as Behandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: 'FP',
    } as Fagsak,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};

export const SkalKunneRedigereFooterNårEnHarFagsakmarkeringPraksisUtsettelse: Story = {
  args: {
    behandling: defaultBehandling,
    beregningsresultat: defaultberegningresultatDagytelse,
    fagsak: {
      saksnummer: '1234567',
      fagsakYtelseType: 'FP',
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
  },
};

export const SkalIkkeProduseresBrev: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        avslagsarsakFritekst: 'Dette er ein fritekst',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    } as Behandling,
    beregningsresultat: {
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs,
    isReadOnly: false,
    brevOverstyring: { opprinneligHtml: mal, redigertHtml: null },
  },
};
