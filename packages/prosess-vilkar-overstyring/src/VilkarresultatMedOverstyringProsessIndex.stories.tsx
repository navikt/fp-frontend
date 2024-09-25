import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  vilkarUtfall,
  AksjonspunktCode,
  aksjonspunktStatus,
  OverstyringAksjonspunkter,
  behandlingType,
} from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Behandling, Medlemskap } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import VilkarresultatMedOverstyringProsessIndex from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: behandlingType.FORSTEGANGSSOKNAD,
} as Behandling;

const avslagsarsaker = [
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

export default {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
};

const Template: StoryFn<{
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  panelTittelKode: string;
  overstyringApKode: OverstyringAksjonspunkter;
  erMedlemskapsPanel: boolean;
  behandling?: Behandling;
  aksjonspunkter?: Aksjonspunkt[];
  status?: string;
}> = ({
  submitCallback,
  panelTittelKode,
  overstyringApKode,
  erMedlemskapsPanel,
  behandling = defaultBehandling,
  aksjonspunkter = [],
  status = vilkarUtfall.OPPFYLT,
}) => {
  const [erOverstyrt, toggleOverstyring] = React.useState(false);
  return (
    <VilkarresultatMedOverstyringProsessIndex
      aksjonspunkter={aksjonspunkter}
      alleKodeverk={alleKodeverk as any}
      submitCallback={submitCallback}
      isReadOnly={false}
      isAksjonspunktOpen
      readOnlySubmitButton={false}
      vilkar={[]}
      alleMerknaderFraBeslutter={{}}
      setFormData={() => undefined}
      behandling={behandling}
      medlemskap={
        {
          fom: '2019-01-01',
        } as Medlemskap
      }
      overrideReadOnly={false}
      kanOverstyreAccess={{
        isEnabled: true,
      }}
      toggleOverstyring={() => toggleOverstyring(!erOverstyrt)}
      erOverstyrt={erOverstyrt}
      avslagsarsaker={avslagsarsaker}
      status={status}
      panelTittelKode={panelTittelKode}
      lovReferanse="§§ Dette er en lovreferanse"
      overstyringApKode={overstyringApKode}
      erMedlemskapsPanel={erMedlemskapsPanel}
    />
  );
};

export const OverstyringspanelForFødsel = Template.bind({});
OverstyringspanelForFødsel.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_FODSELSVILKAR,
  erMedlemskapsPanel: false,
};

export const OverstyringspanelForMedlemskap = Template.bind({});
OverstyringspanelForMedlemskap.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR,
  erMedlemskapsPanel: true,
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
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  status: vilkarUtfall.IKKE_OPPFYLT,
  panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
  overstyringApKode: AksjonspunktCode.OVERSTYR_FODSELSVILKAR,
  erMedlemskapsPanel: false,
};
