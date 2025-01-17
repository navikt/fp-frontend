import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak } from '@navikt/fp-types';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import BeregningsresultatProsessIndex from './BeregningsresultatProsessIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const beregningsresultat = {
  beregnetTilkjentYtelse: 92000,
  antallBarn: 1,
  satsVerdi: 92000,
};

const defaultAksjonspunkter = [
  {
    definisjon: AksjonspunktKode.VURDER_FEILUTBETALING,
    begrunnelse: 'test',
  },
] as Aksjonspunkt[];

export default {
  title: 'prosess/prosess-beregningsresultat',
  component: BeregningsresultatProsessIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  kanOverstyreAccess: { isEnabled: boolean };
  submitCallback?: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  isReadOnly?: boolean;
}> = ({ aksjonspunkter, kanOverstyreAccess, submitCallback, isReadOnly = false }) => (
  <BeregningsresultatProsessIndex
    behandling={behandling}
    alleKodeverk={alleKodeverk as any}
    aksjonspunkter={aksjonspunkter}
    submitCallback={submitCallback || (action('button-click') as (data: any) => Promise<any>)}
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
    fagsak={{} as Fagsak}
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
  aksjonspunkter: [
    {
      definisjon: AksjonspunktKode.OVERSTYR_BEREGNING,
      begrunnelse: 'Dette er en begrunnelse',
    },
  ] as Aksjonspunkt[],
  kanOverstyreAccess: { isEnabled: true },
  isReadOnly: true,
};
