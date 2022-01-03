import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import aksjonspunktCode, { OverstyringAksjonspunkter } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import { Aksjonspunkt, Behandling, Medlemskap } from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import VilkarresultatMedOverstyringProsessIndex from './VilkarresultatMedOverstyringProsessIndex';

const defaultBehandling = {
  uuid: '1',
  versjon: 1,
  type: {
    kode: behandlingType.FORSTEGANGSSOKNAD,
  },
} as Behandling;

const avslagsarsaker = [{
  kode: 'AVSLAG_TEST_1',
  navn: 'Dette er en avslagsårsak',
  kodeverk: '',
}, {
  kode: 'AVSLAG_TEST_2',
  navn: 'Dette er en annen avslagsårsak',
  kodeverk: '',
}];

export default {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
};

const Template: Story<{
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
  status = vilkarUtfallType.OPPFYLT,
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
      medlemskap={{
        fom: '2019-01-01',
      } as Medlemskap}
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
  overstyringApKode: aksjonspunktCode.OVERSTYR_FODSELSVILKAR,
  erMedlemskapsPanel: false,
};

export const OverstyringspanelForMedlemskap = Template.bind({});
OverstyringspanelForMedlemskap.args = {
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  panelTittelKode: 'Inngangsvilkar.Medlemskapsvilkaret',
  overstyringApKode: aksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR,
  erMedlemskapsPanel: true,
};

export const OverstyrtAksjonspunktSomErBekreftet = Template.bind({});
OverstyrtAksjonspunktSomErBekreftet.args = {
  behandling: {
    ...defaultBehandling,
    behandlingsresultat: {
      avslagsarsak: {
        kode: 'AVSLAG_TEST_1',
        kodeverk: '',
      },
    },
  } as Behandling,
  aksjonspunkter: [{
    definisjon: {
      kode: aksjonspunktCode.OVERSTYR_FODSELSVILKAR,
      kodeverk: '',
    },
    status: {
      kode: aksjonspunktStatus.UTFORT,
      kodeverk: '',
    },
    kanLoses: false,
    begrunnelse: 'Dette er en begrunnelse',
  } as Aksjonspunkt],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  status: vilkarUtfallType.IKKE_OPPFYLT,
  panelTittelKode: 'Inngangsvilkar.Fodselsvilkaret',
  overstyringApKode: aksjonspunktCode.OVERSTYR_FODSELSVILKAR,
  erMedlemskapsPanel: false,
};
