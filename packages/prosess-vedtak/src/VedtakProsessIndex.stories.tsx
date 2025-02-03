import { ComponentProps } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingStatus,
  BehandlingType,
  FagsakYtelseType,
  KonsekvensForYtelsen,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { PanelContextArgs, withFormData, withPanelContext } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Vilkar,
} from '@navikt/fp-types';

import { VedtakProsessIndex } from './VedtakProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingType.FORSTEGANGSSOKNAD,
  status: BehandlingStatus.BEHANDLING_UTREDES,
  sprakkode: 'NO',
  behandlingsresultat: {
    type: BehandlingResultatType.INNVILGET,
  },
  behandlingPaaVent: false,
  behandlingHenlagt: false,
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

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.FORESLA_VEDTAK,
    status: AksjonspunktStatus.OPPRETTET,
    kanLoses: true,
  },
] as Aksjonspunkt[];

const defaultberegningresultatDagytelse = {
  antallBarn: 1,
  beregnetTilkjentYtelse: 10000,
} as BeregningsresultatDagytelse;

const meta = {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
  decorators: [withFormData, withPanelContext],
  args: {
    aksjonspunkterForPanel: defaultAksjonspunkter,
    vilkar: defaultVilkar,
    previewCallback: action('button-click') as any,
  },
  render: args => <VedtakProsessIndex {...args} />,
} satisfies Meta<PanelContextArgs & ComponentProps<typeof VedtakProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
  },
};

export const GodkjentForeldrepengerForSaksbehandler: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true,
  },
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      status: BehandlingStatus.AVSLUTTET,
      behandlingsresultat: {
        vedtaksbrev: 'FRITEKST',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: BehandlingResultatType.INNVILGET,
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
    isReadOnly: true,
  },
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt: Story = {
  args: {
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    behandling: defaultBehandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    aksjonspunkterForPanel: [
      ...defaultAksjonspunkter,
      {
        definisjon: AksjonspunktKode.VURDERE_ANNEN_YTELSE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
        toTrinnsBehandling: true,
      },
      {
        definisjon: AksjonspunktKode.VURDERE_DOKUMENT,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
      },
      {
        definisjon: AksjonspunktKode.VURDERE_INNTEKTSMELDING_KLAGE,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
      },
      {
        definisjon: AksjonspunktKode.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
        status: AksjonspunktStatus.OPPRETTET,
        begrunnelse: undefined,
        kanLoses: false,
        toTrinnsBehandling: true,
      },
    ],
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
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
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
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
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
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
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
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
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
    ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
    isReadOnly: false,
  },
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring: Story = {
  args: {
    behandling: defaultBehandling,
    ytelseTypeKode: FagsakYtelseType.SVANGERSKAPSPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
        vedtaksbrev: 'FRITEKST',
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: BehandlingResultatType.INNVILGET,
        konsekvenserForYtelsen: [KonsekvensForYtelsen.FORELDREPENGER_OPPHORER],
      },
    } as Behandling,
    beregningresultatDagytelse: defaultberegningresultatDagytelse,
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
    ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
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
