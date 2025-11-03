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
import type { Aksjonspunkt, BehandlingFpSak, Fagsak } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-002',
  aksjonspunkt: [] as Aksjonspunkt[],
} as BehandlingFpSak;

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    behandling: defaultBehandling,
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    status: 'OPPFYLT',
    medlemskapManuellBehandlingResultat: undefined,
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
    vilkår: lagVilkår('FP_VK_1'),
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkår: lagVilkår('FP_VK_2'),
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
    vilkår: lagVilkår('FP_VK_2'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET, {
          status: 'UTFO',
        }),
      ],
    } as BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
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
    vilkår: lagVilkår('FP_VK_2_F'),
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
    vilkår: lagVilkår('FP_VK_2_F'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, {
          status: 'UTFO',
        }),
      ],
    } as BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1052',
      medlemFom: '2022-02-19',
    },
  },
};

export const OverstyringspanelForOpptjening: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkår: lagVilkår('FP_VK_23'),
  },
};

export const OverstyrtAksjonspunktSomErBekreftet: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1002',
      },
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET, {
          status: 'UTFO',
        }),
      ],
    } as BehandlingFpSak,
    status: 'IKKE_OPPFYLT',
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkår: lagVilkår('FP_VK_1'),
  },
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1035',
        type: 'OPPHØR',
      },
    } as BehandlingFpSak,
    status: 'IKKE_VURDERT',
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET,
    vilkår: lagVilkår('FP_VK_23'),
  },
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkår: lagVilkår('FP_VK_2_L'),
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6012, {
          status: 'UTFO',
        }),
      ],
    } as BehandlingFpSak,
    status: 'OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.UTGÅTT_6012,
    vilkår: lagVilkår('FP_VK_2_L'),
    status: 'IKKE_OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
