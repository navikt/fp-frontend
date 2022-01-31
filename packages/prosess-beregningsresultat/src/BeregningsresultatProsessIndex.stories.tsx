import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import BeregningsresultatProsessIndex from '@fpsak-frontend/prosess-beregningsresultat';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const beregningsresultat = {
  beregnetTilkjentYtelse: 100,
  antallBarn: 1,
  satsVerdi: 100,
};

const defaultAksjonspunkter = [{
  definisjon: aksjonspunktCodes.VURDER_FEILUTBETALING,
  begrunnelse: 'test',
}] as Aksjonspunkt[];

export default {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  kanOverstyreAccess: { isEnabled: boolean };
  submitCallback?: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  isReadOnly?: boolean;
}> = ({
  aksjonspunkter,
  kanOverstyreAccess,
  submitCallback,
  isReadOnly = false,
}) => (
  <BeregningsresultatProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback || action('button-click') as (data: any) => Promise<any>}
    isReadOnly={isReadOnly}
    isAksjonspunktOpen
    readOnlySubmitButton={false}
    status=""
    vilkar={[]}
    alleMerknaderFraBeslutter={{}}
    setFormData={() => undefined}
    beregningresultatEngangsstonad={beregningsresultat}
    overrideReadOnly={false}
    kanOverstyreAccess={kanOverstyreAccess}
    toggleOverstyring={action('button-click')}
  />
);

export const SaksbehandlerKanIkkeOverstyre = Template.bind({});
SaksbehandlerKanIkkeOverstyre.args = {
  aksjonspunkter: defaultAksjonspunkter,
  kanOverstyreAccess: { isEnabled: false },
};

export const SaksbehandlerKanOverstyre = Template.bind({});
SaksbehandlerKanOverstyre.args = {
  aksjonspunkter: defaultAksjonspunkter,
  kanOverstyreAccess: { isEnabled: true },
};

export const OverstyrtReadonlyPanel = Template.bind({});
OverstyrtReadonlyPanel.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.OVERSTYR_BEREGNING,
    begrunnelse: 'Dette er en begrunnelse',
  }] as Aksjonspunkt[],
  kanOverstyreAccess: { isEnabled: true },
  isReadOnly: true,
};
