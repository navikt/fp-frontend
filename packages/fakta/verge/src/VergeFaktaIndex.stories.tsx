import type { ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  alleKodeverk,
  alleKodeverkTilbakekreving,
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';

import { VergeFaktaIndex } from './VergeFaktaIndex';

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-verge',
  component: VergeFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_VERGE)],
    alleKodeverk: { ...alleKodeverk, ...alleKodeverkTilbakekreving },
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.AVKLAR_VERGE]: merknaderFraBeslutter,
    },
  },
  render: args => <VergeFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VergeFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonpunkt: Story = {
  args: {
    verge: undefined,
    isReadOnly: false,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_VERGE)],
  },
};

export const ReadOnlyUtført: Story = {
  args: {
    verge: {
      vergeType: 'ADVOKAT',
      navn: 'Ola Nordmann',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
    },
    isReadOnly: true,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_VERGE, { status: 'UTFO' })],
  },
};

export const UtenAksjonpunkt: Story = {
  args: {
    verge: {
      vergeType: 'ADVOKAT',
      navn: 'Ola Nordmann',
      organisasjonsnummer: '123456789',
      gyldigFom: '2025-01-01',
      gyldigTom: '2025-12-31',
    },
    isReadOnly: true,
    aksjonspunkterForPanel: [],
  },
};
