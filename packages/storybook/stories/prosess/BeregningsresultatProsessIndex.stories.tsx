import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';

import alleKodeverk from '../mocks/alleKodeverk.json';
import withReduxProvider from '../../decorators/withRedux';

const behandling = {
  id: 1,
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
  isReadOnly: boolean('readOnly', false),
  isAksjonspunktOpen: boolean('harApneAksjonspunkter', true),
  readOnlySubmitButton: boolean('readOnly', false),
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
};

export default {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
  decorators: [withKnobs, withReduxProvider],
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
    overrideReadOnly={boolean('readOnly', false)}
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
