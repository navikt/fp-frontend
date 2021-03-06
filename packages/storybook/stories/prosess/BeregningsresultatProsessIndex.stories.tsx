import React from 'react';
import { action } from '@storybook/addon-actions';

import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const beregningsresultat = {
  beregnetTilkjentYtelse: 100,
  antallBarn: 1,
  satsVerdi: 100,
};

const aksjonspunkter = [{
  definisjon: {
    kode: aksjonspunktCodes.VURDER_FEILUTBETALING,
  },
  begrunnelse: 'test',
}] as Aksjonspunkt[];

const standardProsessProps = {
  behandling,
  alleKodeverk: alleKodeverk as any,
  aksjonspunkter,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
};

export const saksbehandlerKanIkkeOverstyre = () => (
  <BeregningsresultatProsessIndex
    {...standardProsessProps}
    beregningresultatEngangsstonad={beregningsresultat}
    overrideReadOnly={false}
    kanOverstyreAccess={{ isEnabled: false }}
    toggleOverstyring={action('button-click')}
  />
);

export const saksbehandlerKanOverstyre = () => (
  <BeregningsresultatProsessIndex
    {...standardProsessProps}
    beregningresultatEngangsstonad={beregningsresultat}
    aksjonspunkter={aksjonspunkter as Aksjonspunkt[]}
    overrideReadOnly={false}
    kanOverstyreAccess={{ isEnabled: true }}
    toggleOverstyring={action('button-click')}
  />
);

export const visOverstyrtReadonlyPanel = () => (
  <BeregningsresultatProsessIndex
    {...standardProsessProps}
    beregningresultatEngangsstonad={beregningsresultat}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.OVERSTYR_BEREGNING,
      },
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[]}
    overrideReadOnly={false}
    kanOverstyreAccess={{ isEnabled: true }}
    toggleOverstyring={action('button-click')}
  />
);
