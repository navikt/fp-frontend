import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagVilkår,
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';
import type { BehandlingFpSak, Fagsak } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-002',
} as BehandlingFpSak;

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    behandling: defaultBehandling,
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    medlemskapManuellBehandlingResultat: undefined,
    aksjonspunkterForPanel: [],
  },
  render: props => {
    return <VilkarresultatMedOverstyringProsessIndex {...props} />;
  },
} satisfies Meta<
  PanelDataArgs & PanelOverstyringContextArgs & ComponentProps<typeof VilkarresultatMedOverstyringProsessIndex>
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const OverstyringspanelForFødsel: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_1', { vilkarStatus: 'OPPFYLT' })],
  },
};

export const OverstyringErUtførtForFødsel: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1002',
      },
    } as BehandlingFpSak,
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET, {
        status: 'UTFO',
      }),
    ],
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_1', { vilkarStatus: 'IKKE_OPPFYLT' })],
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_2', { vilkarStatus: 'OPPFYLT' })],
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    } as BehandlingFpSak,
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_2', { vilkarStatus: 'IKKE_OPPFYLT' })],
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET, {
        status: 'UTFO',
      }),
    ],
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1025',
      opphørFom: '2022-02-19',
    },
  },
};

export const OverstyringForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    vilkårForPanel: [lagVilkår('FP_VK_2_F', { vilkarStatus: 'OPPFYLT' })],
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
    vilkårForPanel: [lagVilkår('FP_VK_2_F', { vilkarStatus: 'IKKE_OPPFYLT' })],
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, {
        status: 'UTFO',
      }),
    ],
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1052',
      medlemFom: '2022-02-19',
    },
  },
};

export const OverstyringForOpptjening: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_23', { vilkarStatus: 'IKKE_OPPFYLT' })],
  },
};

export const OverstyringErUtførtForOpptjenings: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1035',
        type: 'OPPHØR',
      },
    } as BehandlingFpSak,
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkårForPanel: [lagVilkår('FP_VK_23', { vilkarStatus: 'OPPFYLT' })],
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET, {
        status: 'UTFO',
      }),
    ],
  },
};

export const OverstyringErUtførtForLøpendeMedlemskapReadOnlyMode: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkårForPanel: [lagVilkår('FP_VK_2_L')],
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6012, {
        status: 'UTFO',
      }),
    ],
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapIkkeErOverstyrt: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkårForPanel: [lagVilkår('FP_VK_2_L')],
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
