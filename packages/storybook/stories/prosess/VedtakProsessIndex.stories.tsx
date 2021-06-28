import React from 'react';
import { action } from '@storybook/addon-actions';

import {
  Behandling, BeregningsresultatEs, Beregningsgrunnlag, BeregningsresultatFp, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import behandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';
import konsekvensForYtelsen from '@fpsak-frontend/kodeverk/src/konsekvensForYtelsen';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VedtakProsessIndex from '@fpsak-frontend/prosess-vedtak';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
    kodeverk: '',
  },
  status: {
    kode: behandlingStatus.BEHANDLING_UTREDES,
    kodeverk: '',
  },
  sprakkode: {
    kode: 'NO',
    kodeverk: '',
  },
  behandlingsresultat: {
    type: {
      kode: behandlingResultatType.INNVILGET,
      kodeverk: '',
    },
  },
  behandlingPaaVent: false,
  behandlingHenlagt: false,
  behandlingÅrsaker: [{
    behandlingArsakType: {
      kode: behandlingArsakType.ANNET,
      kodeverk: 'BEHANDLING_AARSAK',
    },
  }],
} as Behandling;

const vilkar = [{
  lovReferanse: '§§Dette er en lovreferanse',
  vilkarType: {
    kode: vilkarType.FODSELSVILKARET_MOR,
    kodeverk: kodeverkTyper.VILKAR_TYPE,
  },
  vilkarStatus: {
    kode: vilkarUtfallType.OPPFYLT,
    kodeverk: '',
  },
  overstyrbar: true,
}] as Vilkar[];

const beregningresultatForeldrepenger = {
  antallBarn: 1,
  beregnetTilkjentYtelse: 10000,
  sokerErMor: true,
} as BeregningsresultatFp;

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter: [],
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-vedtak',
  component: VedtakProsessIndex,
};

/*
 * Førstegangssøknad - Foreldrepenger
 */

export const visInnvilgetForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentForeldrepengerForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visInnvilgetForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentForeldrepengerForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        vedtaksbrev: {
          kode: 'FRITEKST',
          kodeverk: '',
        },
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visAvslåttForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentAvslagForForeldrepengerForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visInnvilgetForeldrepengerDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

export const visAvslåttForeldrepengerDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

export const visTeksterForAksjonspunkterSomSaksbehandlerMåTaStillingTil = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.VURDERE_ANNEN_YTELSE,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
      toTrinnsBehandling: true,
    }, {
      definisjon: {
        kode: aksjonspunktCodes.VURDERE_DOKUMENT,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }, {
      definisjon: {
        kode: aksjonspunktCodes.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
      toTrinnsBehandling: true,
    }]}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

/*
 * Førstegangssøknad - Engangsstøand
 */

export const visInnvilgetEngangsstønadTilGodkjenningForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
    alleKodeverk={alleKodeverk as any}
    beregningresultatEngangsstonad={{
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs}
  />
);

export const visGodkjentEngangsstønadForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
    } as Behandling}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
    alleKodeverk={alleKodeverk as any}
    beregningresultatEngangsstonad={{
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs}
  />
);

export const visInnvilgetEngangsstønadTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
    alleKodeverk={alleKodeverk as any}
    beregningresultatEngangsstonad={{
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs}
  />
);

export const visInnvilgetEngangsstønadDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
    alleKodeverk={alleKodeverk as any}
    beregningresultatEngangsstonad={{
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

export const visAvslåttEngangsstønadDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.ENGANGSSTONAD}
    alleKodeverk={alleKodeverk as any}
    beregningresultatEngangsstonad={{
      antallBarn: 2,
      beregnetTilkjentYtelse: 10000,
    } as BeregningsresultatEs}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

/*
 * Førstegangssøknad - Svangerskapspenger
 */

export const visInnvilgetSvangerskapspengerTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.SVANGERSKAPSPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visAvslåttSvangerskapspengerOgVisModal = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.SVANGERSKAPSPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

/*
 * Revurdering - Foreldrepenger
 */

export const visInnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }, {
          kode: konsekvensForYtelsen.FORELDREPENGER_OPPHORER,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentRevurderingForeldrepengerForSaksbehandlerUtenOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }, {
          kode: konsekvensForYtelsen.FORELDREPENGER_OPPHORER,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visInnvilgetRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }, {
          kode: konsekvensForYtelsen.FORELDREPENGER_OPPHORER,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentRevurderingForeldrepengerForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }, {
          kode: konsekvensForYtelsen.FORELDREPENGER_OPPHORER,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentRevurderingForeldrepengerMedManueltBrevForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        vedtaksbrev: {
          kode: 'FRITEKST',
          kodeverk: '',
        },
        overskrift: 'Dette er en overskrift',
        fritekstbrev: 'Dette er innholdet i brevet',
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.FORELDREPENGER_OPPHORER,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visAvslåttRevurderingForeldrepengerTilGodkjenningForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
        avslagsarsakFritekst: 'Dette er ein fritekst',
      },
    } as Behandling}
    beregningsresultatOriginalBehandling={{
      'beregningsresultat-foreldrepenger': {
        ...beregningresultatForeldrepenger,
      },
    }}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visGodkjentRevurderingAvslagForForeldrepengerForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      status: {
        kode: behandlingStatus.AVSLUTTET,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningsresultatOriginalBehandling={{
      'beregningsresultat-foreldrepenger': {
        ...beregningresultatForeldrepenger,
      },
    }}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    isReadOnly
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
  />
);

export const visOpphørForRevurderingForeldrepengerForSaksbehandlerMedOverstyring = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.OPPHOR,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    previewCallback={action('button-click') as any}
  />
);

export const visInnvilgetForRevurderingForeldrepengerDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.INNVILGET,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

export const visAvslåttForRevurderingForeldrepengerDerSøknadsfristvilkåretIkkeErOppfylt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
        konsekvenserForYtelsen: [{
          kode: konsekvensForYtelsen.ENDRING_I_BEREGNING_OG_UTTAK,
          kodeverk: 'KONSEKVENS_FOR_YTELSEN',
        }],
        avslagsarsak: {
          kode: '1007',
          kodeverk: 'AVSLAGSARSAK',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    vilkar={[{
      lovReferanse: '§§Dette er en lovreferanse',
      vilkarType: {
        kode: vilkarType.SOKNADFRISTVILKARET,
        kodeverk: 'VILKAR_TYPE',
      },
      vilkarStatus: {
        kode: vilkarUtfallType.IKKE_OPPFYLT,
        kodeverk: 'VILKAR_UTFALL_TYPE',
      },
      overstyrbar: true,
      merknadParametere: {},
    }]}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);

export const visOpphørForRevurderingForeldrepengerDerBeregningErManueltFastsatt = () => (
  <VedtakProsessIndex
    {...standardProsessProps}
    behandling={{
      ...behandling,
      type: {
        kode: behandlingType.REVURDERING,
        kodeverk: '',
      },
      behandlingsresultat: {
        type: {
          kode: behandlingResultatType.OPPHOR,
          kodeverk: '',
        },
      },
    } as Behandling}
    beregningresultatForeldrepenger={beregningresultatForeldrepenger}
    medlemskap={{ fom: '2019-01-01' } as Medlemskap}
    previewCallback={action('button-click') as any}
    ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
    alleKodeverk={alleKodeverk as any}
    beregningsgrunnlag={{
      beregningsgrunnlagPeriode: [{
        beregningsgrunnlagPrStatusOgAndel: [{
          overstyrtPrAar: 0,
        }],
      }],
    } as Beregningsgrunnlag}
  />
);
