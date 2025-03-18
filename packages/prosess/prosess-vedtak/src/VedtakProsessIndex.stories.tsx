import { type ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingStatus,
  BehandlingType,
  DokumentMalType,
  FagsakYtelseType,
  KonsekvensForYtelsen,
  OppgaveType,
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
  Fagsak,
  Vilkar,
} from '@navikt/fp-types';

import mal from '../.storybook/brevmal/mal.html?raw';
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
    hentBrevHtml: args => {
      action('button-click')(args);
      return Promise.resolve({ opprinneligHtml: mal, redigertHtml: null });
    },
    lagreManueltBrev: action('button-click') as (html: string | null) => Promise<void>,
  },
  render: args => <VedtakProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VedtakProsessIndex>>;
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
  },
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: DokumentMalType.FRITEKST_HTML,
        type: BehandlingResultatType.INNVILGET,
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
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
        oppgavetype: OppgaveType.VUR_KONSEKVENS,
        beskrivelse: 'Se sto mottatt 24.02.25',
      },
      {
        oppgavetype: OppgaveType.VUR_KONSEKVENS,
        beskrivelse:
          'Fullmektig tar kontakt. Ber om fristutsettelse 4 uker, ettersom bruker først mottok brevet i dag. ' +
          'Jeg har utsatt 14 dager, men han ønsker ytterligere 2 uker utover det, altså 28.09.24. ' +
          'Kan dere gi tilbakemelding på dette?',
      },
      {
        oppgavetype: OppgaveType.VUR_DOKUMENT,
        beskrivelse: 'Bekreftelse fra arbeidsgiver',
      },
      {
        oppgavetype: OppgaveType.VUR_DOKUMENT,
        beskrivelse: 'Søknad om foreldrepenger ved fødsel',
      },
    ],
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
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
          KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHORER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
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
          KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHORER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
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
          KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHORER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: false,
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
          KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          KonsekvensForYtelsen.FORELDREPENGER_OPPHORER,
        ],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
  },
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: DokumentMalType.FRITEKST_HTML,
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.FORELDREPENGER_OPPHORER],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    isReadOnly: true,
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
  },
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK],
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
  },
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
      behandlingsresultat: {
        type: BehandlingResultatType.AVSLATT,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK],
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
  },
};
