import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  FagsakYtelseType,
  KodeverkType,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk, withFormData } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, Medlemskap } from '@navikt/fp-types';

import { VilkarresultatMedOverstyringProsessIndex } from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const defaultAvslagsarsaker = [
  {
    kode: 'AVSLAG_TEST_1',
    navn: 'Dette er en avslagsårsak',
    kodeverk: '',
  },
  {
    kode: 'AVSLAG_TEST_2',
    navn: 'Dette er en annen avslagsårsak',
    kodeverk: '',
  },
];

const meta = {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
  decorators: [withFormData],
  args: {
    aksjonspunkter: [],
    alleKodeverk: alleKodeverk as any,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    isReadOnly: false,
    isAksjonspunktOpen: true,
    readOnlySubmitButton: false,
    vilkar: [],
    alleMerknaderFraBeslutter: {},
    behandling: defaultBehandling,
    overrideReadOnly: false,
    erOverstyrt: false,
    kanOverstyreAccess: { isEnabled: true },
    fagsak: {
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    } as Fagsak,
    toggleOverstyring: () => undefined,
    avslagsarsaker: defaultAvslagsarsaker,
    status: VilkarUtfallType.OPPFYLT,
    lovReferanse: '§ 1-2 3. ledd',
  },
  render: props => {
    const [erOverstyrt, setErOverstyrt] = useState(props.erOverstyrt);

    return (
      <VilkarresultatMedOverstyringProsessIndex
        {...props}
        erOverstyrt={erOverstyrt}
        toggleOverstyring={() => setErOverstyrt(!erOverstyrt)}
      />
    );
  },
} satisfies Meta<typeof VilkarresultatMedOverstyringProsessIndex>;
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET],
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET],
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: false,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: false,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.OPPTJENINGSVILKARET],
  },
};

export const OverstyrtAksjonspunktSomErBekreftet: Story = {
  args: {
    behandling: {
      ...defaultBehandling,
      behandlingsresultat: {
        avslagsarsak: 'AVSLAG_TEST_1',
      },
    } as Behandling,
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: false,
        begrunnelse: 'Dette er en begrunnelse',
      } as Aksjonspunkt,
    ],
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
        avslagsarsak: '1020',
        type: 'OPPHØR',
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
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
        status: AksjonspunktStatus.UTFORT,
        kanLoses: false,
        begrunnelse: 'Dette er en begrunnelse',
      },
    ],
    status: VilkarUtfallType.OPPFYLT,
    kanOverstyreAccess: { isEnabled: false },
    isReadOnly: true,
  },
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt: Story = {
  args: {
    panelTittelKode: 'Behandlingspunkt.FortsattMedlemskap',
    overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
    avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
    status: VilkarUtfallType.IKKE_OPPFYLT,
    kanOverstyreAccess: { isEnabled: false },
    isReadOnly: true,
  },
};
