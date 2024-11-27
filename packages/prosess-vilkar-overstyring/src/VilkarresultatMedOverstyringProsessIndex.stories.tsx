import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  FagsakYtelseType,
  KodeverkType,
  OverstyringAksjonspunkter,
  VilkarType,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, Fagsak, KodeverkMedNavn, Medlemskap } from '@navikt/fp-types';

import VilkarresultatMedOverstyringProsessIndex from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: BehandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
};

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

const Template: StoryFn<{
  panelTittelKode: string;
  overstyringApKode: OverstyringAksjonspunkter;
  behandling?: Behandling;
  aksjonspunkter?: Aksjonspunkt[];
  medlemskap?: Medlemskap;
  status?: string;
  avslagsarsaker?: KodeverkMedNavn[];
  vilkarType: VilkarType;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  isReadOnly: boolean;
  ytelse: string;
  submitCallback?: (data: any) => Promise<any>;
}> = ({
  panelTittelKode,
  overstyringApKode,
  behandling = defaultBehandling,
  medlemskap,
  aksjonspunkter = [],
  avslagsarsaker = defaultAvslagsarsaker,
  status = VilkarUtfallType.OPPFYLT,
  ytelse = FagsakYtelseType.FORELDREPENGER,
  isReadOnly = false,
  kanOverstyreAccess = { isEnabled: true },
  submitCallback = action('button-click') as (data: any) => Promise<any>,
}) => {
  const [erOverstyrt, toggleOverstyring] = React.useState(false);
  return (
    <VilkarresultatMedOverstyringProsessIndex
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk as any}
      submitCallback={submitCallback}
      isReadOnly={isReadOnly}
      isAksjonspunktOpen
      readOnlySubmitButton={isReadOnly}
      vilkar={[]}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
      behandling={behandling}
      medlemskap={medlemskap}
      overrideReadOnly={isReadOnly}
      kanOverstyreAccess={kanOverstyreAccess}
      fagsak={
        {
          fagsakYtelseType: ytelse,
        } as Fagsak
      }
      toggleOverstyring={() => toggleOverstyring(!erOverstyrt)}
      erOverstyrt={erOverstyrt}
      avslagsarsaker={avslagsarsaker}
      status={status}
      panelTittelKode={panelTittelKode}
      lovReferanse="§ 1-2 3. ledd"
      overstyringApKode={overstyringApKode}
    />
  );
};

export const OverstyringspanelForFødsel = Template.bind({});
OverstyringspanelForFødsel.args = {
  panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
  overstyringApKode: AksjonspunktKode.OVERSTYR_FODSELSVILKAR,
};

export const OverstyringspanelForMedlemskap = Template.bind({});
OverstyringspanelForMedlemskap.args = {
  ytelse: FagsakYtelseType.FORELDREPENGER,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET],
  behandling: {
    ...defaultBehandling,
    type: BehandlingType.REVURDERING,
  } as Behandling,
};

export const OverstyringErUtførtForMedlemskap = Template.bind({});
OverstyringErUtførtForMedlemskap.args = {
  ytelse: FagsakYtelseType.FORELDREPENGER,
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
};

export const OverstyringForForutgåendeMedlemskap = Template.bind({});
OverstyringForForutgåendeMedlemskap.args = {
  ytelse: FagsakYtelseType.ENGANGSSTONAD,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
  overstyringApKode: AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
};

export const OverstyringErUtførtForForutgåendeMedlemskap = Template.bind({});
OverstyringErUtførtForForutgåendeMedlemskap.args = {
  ytelse: FagsakYtelseType.ENGANGSSTONAD,
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
};

export const OverstyringspanelForOpptjening = Template.bind({});
OverstyringspanelForOpptjening.args = {
  panelTittelKode: 'Inngangsvilkar.Opptjeningsvilkaret',
  overstyringApKode: AksjonspunktKode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
  ytelse: FagsakYtelseType.FORELDREPENGER,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.OPPTJENINGSVILKARET],
};

export const OverstyrtAksjonspunktSomErBekreftet = Template.bind({});
OverstyrtAksjonspunktSomErBekreftet.args = {
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
};

export const OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert = Template.bind({});
OverstyringAvOpptjeningsvilkåretSomIkkeErVurdert.args = {
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
};

export const LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode = Template.bind({});
LøpendeMedlemskapSomErOverstyrtVisesBareIReadOnlyMode.args = {
  ytelse: FagsakYtelseType.FORELDREPENGER,
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
};

export const LøpendeMedlemskapVisningSomIkkeErOverstyrt = Template.bind({});
LøpendeMedlemskapVisningSomIkkeErOverstyrt.args = {
  ytelse: FagsakYtelseType.FORELDREPENGER,
  panelTittelKode: 'Behandlingspunkt.FortsattMedlemskap',
  overstyringApKode: AksjonspunktKode.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE],
  status: VilkarUtfallType.IKKE_OPPFYLT,
  kanOverstyreAccess: { isEnabled: false },
  isReadOnly: true,
};
