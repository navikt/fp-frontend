import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  Avslagsarsak,
  BehandlingResultatType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
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
    kode: Avslagsarsak.INGEN_BEREGNINGSREGLER,
    navn: 'Dette er en avslagsårsak',
    kodeverk: '',
  },
  {
    kode: Avslagsarsak.MANN_ADOPTERER_IKKE_ALENE,
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
    status: VilkarUtfallType.OPPFYLT,
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
    overstyringApKode: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET],
    behandling: {
      ...defaultBehandling,
      type: 'BT-004',
    } as Behandling,
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: VilkarUtfallType.IKKE_OPPFYLT,
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
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: 'ES',
    } as Fagsak,
    panelTekstKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: VilkarUtfallType.IKKE_OPPFYLT,
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
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.OPPTJENINGSVILKARET],
  },
};

export const OverstyrtAksjonspunktSomErBekreftet: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER,
      },
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        } as Aksjonspunkt,
      ],
    } as Behandling,
    status: VilkarUtfallType.IKKE_OPPFYLT,
    panelTekstKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
  },
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.ÅRSAK_1020,
        type: BehandlingResultatType.OPPHOR,
      },
    } as Behandling,
    status: VilkarUtfallType.IKKE_VURDERT,
    panelTekstKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
  },
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
          status: 'UTFO',
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        },
      ],
    } as Behandling,
    status: VilkarUtfallType.OPPFYLT,
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt: Story = {
  args: {
    panelTekstKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    avslagsårsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    status: VilkarUtfallType.IKKE_OPPFYLT,
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
