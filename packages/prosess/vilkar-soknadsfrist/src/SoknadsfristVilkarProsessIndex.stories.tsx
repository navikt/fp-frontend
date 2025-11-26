import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, FamilieHendelse, Soknad } from '@navikt/fp-types';

import { SoknadsfristVilkarProsessIndex } from './SoknadsfristVilkarProsessIndex';

const soknad = {
  mottattDato: '2019-01-01',
  begrunnelseForSenInnsending: 'Dette er en begrunnelse',
  søknadsfrist: {
    mottattDato: '2019-01-01',
    utledetSøknadsfrist: '2019-07-01',
    dagerOversittetFrist: 2,
  },
  manglendeVedlegg: [],
} as Soknad;

const familiehendelse = {
  fødselTermin: {
    fødselsdato: '2019-01-02',
  },
} as FamilieHendelse;

const meta = {
  title: 'prosess/prosess-vilkar-soknadsfrist',
  component: SoknadsfristVilkarProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    soknad,
    familiehendelse,
  },
  render: args => <SoknadsfristVilkarProsessIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof SoknadsfristVilkarProsessIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunkt: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET)],
    vilkårForPanel: [lagVilkår('FP_VK_3', { vilkarStatus: 'IKKE_VURDERT' })],
    isReadOnly: false,
  },
};

export const OppfyltVilkår: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er godkjent',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_3', { vilkarStatus: 'OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};

export const AvslåttVilkår: Story = {
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: '1007',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET, {
        status: 'UTFO',
        begrunnelse: 'Dette vilkåret er avslått',
      }),
    ],
    vilkårForPanel: [lagVilkår('FP_VK_3', { vilkarStatus: 'IKKE_OPPFYLT' })],
    isReadOnly: true,
    isSubmittable: false,
  },
};
