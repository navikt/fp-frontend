import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import {
  Behandling, BeregningsresultatEs, Beregningsgrunnlag, BeregningsresultatFp, Medlemskap, Vilkar, Aksjonspunkt,
} from '@fpsak-frontend/types';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakProsessIndex from '@fpsak-frontend/prosess-vedtak';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
  status: behandlingStatus.BEHANDLING_UTREDES,
  sprakkode: 'NO',
  behandlingsresultat: {
    type: behandlingResultatType.INNVILGET,
  },
  behandlingPaaVent: false,
  behandlingHenlagt: false,
  behandlingÅrsaker: [{
    behandlingArsakType: behandlingArsakType.ANNET,
  }],
} as Behandling;

const defaultVilkar = [{
  lovReferanse: '§§Dette er en lovreferanse',
  vilkarType: vilkarType.FODSELSVILKARET_MOR,
  vilkarStatus: vilkarUtfallType.OPPFYLT,
  overstyrbar: true,
}] as Vilkar[];

const defaultAksjonspunkter = [{
  definisjon: aksjonspunktCodes.FORESLA_VEDTAK,
  kanLoses: true,
}] as Aksjonspunkt[];

const defaultBeregningresultatForeldrepenger = {
  antallBarn: 1,
  beregnetTilkjentYtelse: 10000,
  sokerErMor: true,
} as BeregningsresultatFp;

export default {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
};

const Template: Story<{
  behandling: Behandling;
  beregningresultatForeldrepenger?: BeregningsresultatFp;
  beregningresultatEngangsstonad?: BeregningsresultatEs;
  ytelseTypeKode: string;
  isReadOnly: boolean;
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  beregningsgrunnlag?: Beregningsgrunnlag;
  aksjonspunkter?: Aksjonspunkt[];
  beregningsresultatOriginalBehandling?: {
    'beregningsresultat-engangsstonad'?: BeregningsresultatEs;
    'beregningsresultat-foreldrepenger'?: BeregningsresultatFp;
  };
  vilkar?: Vilkar[];
  previewCallback?: (data: any) => Promise<any>,
}> = ({
  behandling,
  beregningresultatForeldrepenger,
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
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    beregningresultatEngangsstonad={beregningresultatEngangsstonad}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={previewCallback || action('button-click') as any}
    ytelseTypeKode={ytelseTypeKode}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={beregningsgrunnlag}
    beregningsresultatOriginalBehandling={beregningsresultatOriginalBehandling}
  />
);

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const InnvilgetForeldrepengerTilGodkjenningForSaksbehandler = Template.bind({});
InnvilgetForeldrepengerTilGodkjenningForSaksbehandler.args = {
  behandling: defaultBehandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentForeldrepengerForSaksbehandler = Template.bind({});
GodkjentForeldrepengerForSaksbehandler.args = {
  behandling: {
    ...defaultBehandling,
    status: behandlingStatus.AVSLUTTET,
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      vedtaksbrev: 'FRITEKST',
      overskrift: 'Dette er en overskrift',
      fritekstbrev: 'Dette er innholdet i brevet',
      type: behandlingResultatType.INNVILGET,
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
AvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
      avslagsarsakFritekst: 'Dette er ein fritekst',
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
InnvilgetForeldrepengerDerBeregningErManueltFastsatt.args = {
  behandling: defaultBehandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
AvslåttForeldrepengerDerBeregningErManueltFastsatt.args = {
  behandling: {
    ...defaultBehandling,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
      avslagsarsakFritekst: 'Dette er ein fritekst',
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil = Template.bind({});
TeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil.args = {
  behandling: defaultBehandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  aksjonspunkter: [...defaultAksjonspunkter, {
    definisjon: aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: false,
    erAktivt: true,
    toTrinnsBehandling: true,
  }, {
    definisjon: aksjonspunktCodes.VURDERE_DOKUMENT,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: false,
    erAktivt: true,
  }, {
    definisjon: aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: false,
    erAktivt: true,
    toTrinnsBehandling: true,
  }],
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
  ytelseTypeKode: fagsakYtelseType.ENGANGSSTONAD,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentEngangsstønadForSaksbehandlerUtenOverstyring = Template.bind({});
GodkjentEngangsstønadForSaksbehandlerUtenOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    status: behandlingStatus.AVSLUTTET,
  },
  beregningresultatEngangsstonad: {
    antallBarn: 2,
    beregnetTilkjentYtelse: 10000,
  } as BeregningsresultatEs,
  ytelseTypeKode: fagsakYtelseType.ENGANGSSTONAD,
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
  ytelseTypeKode: fagsakYtelseType.ENGANGSSTONAD,
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
  ytelseTypeKode: fagsakYtelseType.ENGANGSSTONAD,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttEngangsstønadDerBeregningErManueltFastsatt = Template.bind({});
AvslåttEngangsstønadDerBeregningErManueltFastsatt.args = {
  behandling: {
    ...defaultBehandling,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
      avslagsarsakFritekst: 'Dette er ein fritekst',
    },
  } as Behandling,
  beregningresultatEngangsstonad: {
    antallBarn: 2,
    beregnetTilkjentYtelse: 10000,
  } as BeregningsresultatEs,
  ytelseTypeKode: fagsakYtelseType.ENGANGSSTONAD,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
InnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: defaultBehandling,
  ytelseTypeKode: fagsakYtelseType.SVANGERSKAPSPENGER,
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
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, konsekvensForYtelsen.FORELDREPENGER_OPPHORER],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, konsekvensForYtelsen.FORELDREPENGER_OPPHORER],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
InnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, konsekvensForYtelsen.FORELDREPENGER_OPPHORER],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK, konsekvensForYtelsen.FORELDREPENGER_OPPHORER],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      vedtaksbrev: 'FRITEKST',
      overskrift: 'Dette er en overskrift',
      fritekstbrev: 'Dette er innholdet i brevet',
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.FORELDREPENGER_OPPHORER],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = Template.bind({});
AvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
      avslagsarsakFritekst: 'Dette er ein fritekst',
    },
  } as Behandling,
  beregningsresultatOriginalBehandling: {
    'beregningsresultat-foreldrepenger': {
      ...defaultBeregningresultatForeldrepenger,
    },
  },
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
GodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    status: behandlingStatus.AVSLUTTET,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
    },
  } as Behandling,
  beregningsresultatOriginalBehandling: {
    'beregningsresultat-foreldrepenger': {
      ...defaultBeregningresultatForeldrepenger,
    },
  },
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring = Template.bind({});
OpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.OPPHOR,
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  isReadOnly: true,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
InnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.INNVILGET,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK],
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt = Template.bind({});
AvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.AVSLATT,
      konsekvenserForYtelsen: [konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK],
      avslagsarsak: '1007',
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  vilkar: [{
    lovReferanse: '§§Dette er en lovreferanse',
    vilkarType: vilkarType.SOKNADFRISTVILKARET,
    vilkarStatus: vilkarUtfallType.IKKE_OPPFYLT,
    overstyrbar: true,
    merknadParametere: {},
  }],
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};

export const OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt = Template.bind({});
OpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt.args = {
  behandling: {
    ...defaultBehandling,
    type: behandlingType.REVURDERING,
    behandlingsresultat: {
      type: behandlingResultatType.OPPHOR,
    },
  } as Behandling,
  beregningresultatForeldrepenger: defaultBeregningresultatForeldrepenger,
  ytelseTypeKode: fagsakYtelseType.FORELDREPENGER,
  beregningsgrunnlag: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: [{
        overstyrtPrAar: 0,
      }],
    }],
  } as Beregningsgrunnlag,
  isReadOnly: false,
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
