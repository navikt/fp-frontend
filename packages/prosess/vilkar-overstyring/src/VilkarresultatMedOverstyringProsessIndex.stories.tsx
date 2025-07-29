import { type ComponentProps } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  Avslagsarsak,
  BehandlingResultatType,
  BehandlingType,
  FagsakYtelseType,
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
  type: BehandlingType.FORSTEGANGSSOKNAD,
  aksjonspunkt: [] as Aksjonspunkt[],
} as Behandling;

const defaultAvslagsarsaker = [
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
    avslagsarsaker: defaultAvslagsarsaker,
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
    panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
  },
};

export const OverstyringspanelForMedlemskap: Story = {
  args: {
    panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET],
    behandling: {
      ...defaultBehandling,
      type: BehandlingType.REVURDERING,
    } as Behandling,
  },
};

export const OverstyringErUtførtForMedlemskap: Story = {
  args: {
    panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
          status: AksjonspunktStatus.UTFORT,
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
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
  },
};

export const OverstyringErUtførtForForutgåendeMedlemskap: Story = {
  args: {
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.ENGANGSSTONAD,
    } as Fagsak,
    panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
          status: AksjonspunktStatus.UTFORT,
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
    panelTittelKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.OPPTJENINGSVILKARET],
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
          status: AksjonspunktStatus.UTFORT,
          kanLoses: false,
          begrunnelse: 'Dette er en begrunnelse',
        } as Aksjonspunkt,
      ],
    } as Behandling,
    status: VilkarUtfallType.IKKE_OPPFYLT,
    panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
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
    panelTittelKode: 'Inngangsvilkar.Opptjeningsvilkaret',
    overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
  },
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode: Story = {
  args: {
    panelTittelKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    behandling: {
      ...defaultBehandling,
      aksjonspunkt: [
        {
          definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
          status: AksjonspunktStatus.UTFORT,
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
    panelTittelKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    avslagsarsaker: alleKodeverk['Avslagsårsak'][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    status: VilkarUtfallType.IKKE_OPPFYLT,
    kanOverstyreAccess: { isEnabled: false, employeeHasAccess: false },
    isReadOnly: true,
  },
};
