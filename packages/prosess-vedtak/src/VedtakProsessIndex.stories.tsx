import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

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
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import {
  Aksjonspunkt,
  Behandling,
  Beregningsgrunnlag,
  BeregningsresultatDagytelse,
  BeregningsresultatEs,
  Fagsak,
  Vilkar,
} from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VedtakProsessIndex from './VedtakProsessIndex';

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
    kanLoses: true,
  },
] as Aksjonspunkt[];

const defaultberegningresultatDagytelse = {
  antallBarn: 1,
  beregnetTilkjentYtelse: 10000,
} as BeregningsresultatDagytelse;

export default {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
};

const Template: StoryFn<{
  behandling: Behandling;
  beregningresultatDagytelse?: BeregningsresultatDagytelse;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
  ytelseTypeKode: string;
  isReadOnly: boolean;
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  beregningsgrunnlag?: Beregningsgrunnlag;
  aksjonspunkter?: Aksjonspunkt[];
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
    'beregningsresultat-foreldrepenger'?: BeregningsresultatDagytelse;
  };
  vilkar?: Vilkar[];
  previewCallback?: (data: any) => Promise<any>;
}> = ({
  behandling,
  beregningresultatDagytelse,
  beregningresultatEngangsstonad,
  ytelseTypeKode,
  isReadOnly,
  submitCallback,
  beregningsgrunnlag,
  aksjonspunkter,
  beregningsresultatOriginalBehandling,
  vilkar,
  previewCallback,
}) => (
  <VedtakProsessIndex
    behandling={behandling}
    aksjonspunkter={aksjonspunkter || defaultAksjonspunkter}
    submitCallback={submitCallback}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={vilkar || defaultVilkar}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    beregningresultatDagytelse={beregningresultatDagytelse}
    beregningresultatEngangsstonad={beregningresultatEngangsstonad}
    previewCallback={previewCallback || (action('button-click') as any)}
    ytelseTypeKode={ytelseTypeKode}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={beregningsgrunnlag}
    beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling}
    fagsak={{} as Fagsak}
  />
);

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler = Template.bind({});
InnvilgetForeldrepengerTilGodkjenningForSaksbehandler.args = {
  behandling: defaultBehandling,
  beregningresultatDagytelse: defaultberegningresultatDagytelse,
  ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentForeldrepengerForSaksbehandler = Template.bind({});
GodkjentForeldrepengerForSaksbehandler.args = {
  behandling: {
    ...defaultBehandling,
    status: BehandlingStatus.AVSLUTTET,
  } as Behandling,
  beregningresultatDagytelse: defaultberegningresultatDagytelse,
  ytelseTypeKode: FagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
InnvilgetForeldrepengerDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
AvslåttForeldrepengerDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil = Template.bind({});
TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil.args = {
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
  aksjonspunkter: [
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

/*
 * Førstegangssøknad - Engangsstøand
 */

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring = Template.bind({});
InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring.args = {
  behandling: defaultBehandling,
  beregningresultatEngangsstonad: {
    antallBarn: 2,
    beregnetTilkjentYtelse: 10000,
  } as BeregningsresultatEs,
  ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentEngangsstønadForSaksbehandlerUtenOverstyring = Template.bind({});
GodkjentEngangsstønadForSaksbehandlerUtenOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
InnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: defaultBehandling,
  beregningresultatEngangsstonad: {
    antallBarn: 2,
    beregnetTilkjentYtelse: 10000,
  } as BeregningsresultatEs,
  ytelseTypeKode: FagsakYtelseType.ENGANGSSTONAD,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetEngangsstønadDerBeregningErManueltFastsatt = Template.bind({});
InnvilgetEngangsstønadDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttEngangsstønadDerBeregningErManueltFastsatt = Template.bind({});
AvslåttEngangsstønadDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: defaultBehandling,
  ytelseTypeKode: FagsakYtelseType.SVANGERSKAPSPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

/*
 * Revurdering - Foreldrepenger
 */

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring = Template.bind({});
InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt = Template.bind({});
AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt.args = {
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
