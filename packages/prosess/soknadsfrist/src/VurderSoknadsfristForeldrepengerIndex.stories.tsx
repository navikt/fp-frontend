import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { Soknad } from '@navikt/fp-types';

import { VurderSoknadsfristForeldrepengerIndex } from './VurderSoknadsfristForeldrepengerIndex';

const soknad = {
  mottattDato: '2019-01-01',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    dagerOversittetFrist: 2,
    søknadsperiodeStart: '2019-01-01',
    søknadsperiodeSlutt: '2019-01-10',
    utledetSøknadsfrist: '2019-10-01',
  },
} as Soknad;

const meta = {
  title: 'prosess/prosess-soknadsfrist',
  component: VurderSoknadsfristForeldrepengerIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRIST)],
  },
  render: args => <VurderSoknadsfristForeldrepengerIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof VurderSoknadsfristForeldrepengerIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const PanelForSoknadsfrist: Story = {};
