import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  alleKodeverk,
  type PanelDataArgs,
  type PanelOverstyringContextArgs,
  withMellomlagretFormData,
  withPanelData,
  withPanelOverstyring,
} from '@navikt/fp-storybook-utils';
import type { Aksjonspunkt, Behandling, Fagsak, KodeverkMedNavn, Medlemskap } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: 'BT-002',
  aksjonspunkt: [] as Aksjonspunkt[],
} as Behandling;

const defaultAvslagsårsaker = [
  {
    kode: '1099',
    navn: 'Dette er en avslagsårsak',
    kodeverk: '',
  },
  {
    kode: '1006',
    navn: 'Dette er en annen avslagsårsak',
    kodeverk: '',
  },
] satisfies KodeverkMedNavn<'Avslagsårsak'>[];

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withMellomlagretFormData, withPanelData, withPanelOverstyring],
  args: {
    behandling: defaultBehandling,
    kanOverstyreAccess: { isEnabled: true, employeeHasAccess: true },
    avslagsårsaker: defaultAvslagsårsaker,
    status: 'OPPFYLT',
    lovReferanse: '§ 1-2 3. ledd',
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
    overstyringApKode: '6003',
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: '6005',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2'],
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    } as Behandling,
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: '6005',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2'],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: '6005',
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: 'IKKE_OPPFYLT',
    medlemskap: {
      manuellBehandlingResultat: {
        avslagskode: '1025',
        opphørFom: '2022-02-19',
      },
    } as Medlemskap,
  },
};

export const OverstyringForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2_F'],
    overstyringApKode: '6017',
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: '6017',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2_F'],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: '6017',
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: 'IKKE_OPPFYLT',
    medlemskap: {
      manuellBehandlingResultat: {
        avslagskode: '1052',
        medlemFom: '2022-02-19',
      },
    } as Medlemskap,
  },
};

export const OverstyringspanelForOpptjening: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: '6011',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_23'],
  },
};

export const OverstyrtAksjonspunktSomErBekreftet: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1099',
      },
      aksjonspunkt: [
        {
          definisjon: '6003',
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        } as Aksjonspunkt,
      ],
    } as Behandling,
    status: 'IKKE_OPPFYLT',
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: '6003',
  },
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: '1020',
        type: 'OPPHØR',
      },
    } as Behandling,
    status: 'IKKE_VURDERT',
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: '6011',
  },
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: '6012',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2_L'],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: '6012',
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: 'OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: '6012',
    avslagsårsaker: alleKodeverk['Avslagsårsak']['FP_VK_2_L'],
    status: 'IKKE_OPPFYLT',
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
