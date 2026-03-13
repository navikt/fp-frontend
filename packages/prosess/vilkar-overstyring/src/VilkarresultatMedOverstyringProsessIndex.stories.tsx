import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  lagBehandling,
  lagFagsak,
  lagVilkår,
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    behandling: lagBehandling(),
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
    behandling: lagBehandling({ type: 'BT-004' }),
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET,
    vilkår: lagVilkår('FP_VK_2'),
    behandling: lagBehandling({
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET, { status: 'UTFO' })],
    }),
    status: 'IKKE_OPPFYLT',
    medlemskapManuellBehandlingResultat: {
      avslagskode: '1025',
      opphørFom: '2022-02-19',
    },
  },
};

export const OverstyringForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: lagFagsak({ fagsakYtelseType: 'ES' }),
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    vilkår: lagVilkår('FP_VK_2_F'),
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: lagFagsak({ fagsakYtelseType: 'ES' }),
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
    vilkår: lagVilkår('FP_VK_2_F'),
    behandling: lagBehandling({
      aksjonspunkt: [
        lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR, { status: 'UTFO' }),
      ],
    }),
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
    behandling: lagBehandling({
      behandlingsresultat: {
        avslagsarsak: '1002',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'AVSLÅTT',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET, { status: 'UTFO' })],
    }),
    status: 'IKKE_OPPFYLT',
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_FØDSELSVILKÅRET,
    vilkår: lagVilkår('FP_VK_1'),
  },
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert: Story = {
  args: {
    behandling: lagBehandling({
      behandlingsresultat: {
        avslagsarsak: '1035',
        harRedigertVedtaksbrev: false,
        id: 1,
        type: 'OPPHØR',
        vedtaksbrevStatus: 'INGEN_VEDTAKSBREV',
      },
    }),
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
    behandling: lagBehandling({
      aksjonspunkt: [lagAksjonspunkt(AksjonspunktKode.UTGÅTT_6012, { status: 'UTFO' })],
    }),
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
