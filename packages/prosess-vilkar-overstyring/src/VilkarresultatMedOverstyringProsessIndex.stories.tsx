import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  AksjonspunktCode,
  aksjonspunktStatus,
  behandlingType,
  fagsakYtelseType,
  KodeverkType,
  OverstyringAksjonspunkter,
  VilkarType,
  vilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Fagsak, KodeverkMedNavn, MedlemskapV3 } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import VilkarresultatMedOverstyringProsessIndex from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

export default {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
};

const Template: StoryFn<{
  panelTittelKode: string;
  overstyringApKode: OverstyringAksjonspunkter;
  behandling?: Behandling;
  aksjonspunkter?: Aksjonspunkt[];
  medlemskap?: MedlemskapV3;
  status?: string;
  avslagsarsaker?: KodeverkMedNavn[];
  vilkarType: VilkarType;
  ytelse: string;
}> = ({
  panelTittelKode,
  overstyringApKode,
  behandling = defaultBehandling,
  medlemskap,
  aksjonspunkter = [],
  avslagsarsaker = [],
  vilkarType,
  status = vilkarUtfallType.OPPFYLT,
  ytelse = fagsakYtelseType.FORELDREPENGER,
}) => {
  const [erOverstyrt, toggleOverstyring] = React.useState(false);
  return (
    <VilkarresultatMedOverstyringProsessIndex
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk as any}
      submitCallback={action('button-click') as (data: any) => Promise<any>}
      isReadOnly={false}
      isAksjonspunktOpen
      readOnlySubmitButton={false}
      vilkar={[]}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
      behandling={behandling}
      medlemskap={medlemskap}
      overrideReadOnly={false}
      kanOverstyreAccess={{
        isEnabled: true,
      }}
      vilkarType={vilkarType}
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
  overstyringApKode: AksjonspunktCode.OVERSTYR_FODSELSVILKAR,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.FODSELSVILKARET_MOR],
  vilkarType: VilkarType.FODSELSVILKARET_MOR,
};

export const OverstyringspanelForMedlemskap = Template.bind({});
OverstyringspanelForMedlemskap.args = {
  ytelse: fagsakYtelseType.FORELDREPENGER,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.FODSELSVILKARET_MOR],
  vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
};

export const OverstyringErUtførtForMedlemskap = Template.bind({});
OverstyringErUtførtForMedlemskap.args = {
  ytelse: fagsakYtelseType.FORELDREPENGER,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET],
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR,
      status: aksjonspunktStatus.UTFORT,
      kanLoses: false,
      begrunnelse: 'Dette er en begrunnelse',
    },
  ],
  status: vilkarUtfallType.IKKE_OPPFYLT,
  medlemskap: {
    manuellBehandlingResultat: {
      avslagskode: '1025',
      opphørFom: '2022-02-19',
    },
  } as MedlemskapV3,
  vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
};

export const OverstyringForForutgåendeMedlemskap = Template.bind({});
OverstyringForForutgåendeMedlemskap.args = {
  ytelse: fagsakYtelseType.ENGANGSSTONAD,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
  overstyringApKode: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
  vilkarType: VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE,
};

export const OverstyringErUtførtForForutgåendeMedlemskap = Template.bind({});
OverstyringErUtførtForForutgåendeMedlemskap.args = {
  ytelse: fagsakYtelseType.ENGANGSSTONAD,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
  avslagsarsaker: alleKodeverk[KodeverkType.AVSLAGSARSAK][VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE],
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
      status: aksjonspunktStatus.UTFORT,
      kanLoses: false,
      begrunnelse: 'Dette er en begrunnelse',
    },
  ],
  status: vilkarUtfallType.IKKE_OPPFYLT,
  medlemskap: {
    manuellBehandlingResultat: {
      avslagskode: '1052',
      medlemFom: '2022-02-19',
    },
  } as MedlemskapV3,
  vilkarType: VilkarType.MEDLEMSKAPSVILKARET,
};

export const OverstyringspanelForOpptjening = Template.bind({});
OverstyringspanelForOpptjening.args = {
  panelTittelKode: 'Inngangsvilkar.Opptjeningsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
  vilkarType: VilkarType.OPPTJENINGSVILKARET,
  ytelse: fagsakYtelseType.FORELDREPENGER,
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
      definisjon: AksjonspunktCode.OVERSTYR_FODSELSVILKAR,
      status: aksjonspunktStatus.UTFORT,
      kanLoses: false,
      begrunnelse: 'Dette er en begrunnelse',
    } as Aksjonspunkt,
  ],
  status: vilkarUtfallType.IKKE_OPPFYLT,
  panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_FODSELSVILKAR,
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
  status: vilkarUtfallType.IKKE_VURDERT,
  panelTittelKode: 'Inngangsvilkar.Opptjeningsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYRING_AV_OPPTJENINGSVILKARET,
};
