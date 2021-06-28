import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import VilkarresultatMedOverstyringProsessIndex from '@fpsak-frontend/prosess-vilkar-overstyring';
import { Aksjonspunkt, Behandling, Medlemskap } from '@fpsak-frontend/types';
import behandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import alleKodeverk from '../mocks/alleKodeverk.json';

const avslagsarsaker = [{
  kode: 'AVSLAG_TEST_1',
  navn: 'Dette er en avslagsårsak',
  kodeverk: '',
}, {
  kode: 'AVSLAG_TEST_2',
  navn: 'Dette er en annen avslagsårsak',
  kodeverk: '',
}];

const standardProsessProps = {
  aksjonspunkter: [],
  alleKodeverk: alleKodeverk as any,
  submitCallback: action('button-click') as () => Promise<any>,
  isReadOnly: false,
  isAksjonspunktOpen: true,
  readOnlySubmitButton: false,
  status: '',
  vilkar: [],
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'prosess/prosess-vilkar-overstyring',
  component: VilkarresultatMedOverstyringProsessIndex,
};

export const visOverstyringspanelForFødsel = () => {
  const [erOverstyrt, toggleOverstyring] = React.useState(false);
  return (
    <VilkarresultatMedOverstyringProsessIndex
      {...standardProsessProps}
      behandling={{
        uuid: '1',
        versjon: 1,
        type: {
          kode: behandlingType.FORSTEGANGSSOKNAD,
        },
      } as Behandling}
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
      status={vilkarUtfallType.OPPFYLT}
      panelTittelKode="Inngangsvilkar.Fodselsvilkaret"
      lovReferanse="§§ Dette er en lovreferanse"
      overstyringApKode={aksjonspunktCode.OVERSTYR_FODSELSVILKAR}
      erMedlemskapsPanel={false}
    />
  );
};

export const visOverstyringspanelForMedlemskap = () => {
  const [erOverstyrt, toggleOverstyring] = React.useState(false);
  return (
    <VilkarresultatMedOverstyringProsessIndex
      {...standardProsessProps}
      behandling={{
        uuid: '1',
        versjon: 1,
        type: {
          kode: behandlingType.FORSTEGANGSSOKNAD,
        },
      } as Behandling}
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
      status={vilkarUtfallType.OPPFYLT}
      panelTittelKode="Inngangsvilkar.Medlemskapsvilkaret"
      lovReferanse="§§ Dette er en lovreferanse"
      overstyringApKode={aksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR}
      erMedlemskapsPanel
    />
  );
};

export const visOverstyrtAksjonspunktSomErBekreftet = () => (
  <VilkarresultatMedOverstyringProsessIndex
    {...standardProsessProps}
    behandling={{
      uuid: '1',
      versjon: 1,
      type: {
        kode: behandlingType.FORSTEGANGSSOKNAD,
      },
      behandlingsresultat: {
        avslagsarsak: {
          kode: 'AVSLAG_TEST_1',
        },
      },
    } as Behandling}
    medlemskap={{
      fom: '2019-01-01',
    } as Medlemskap}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCode.OVERSTYR_FODSELSVILKAR,
      },
      status: {
        kode: aksjonspunktStatus.UTFORT,
      },
      kanLoses: false,
      begrunnelse: 'Dette er en begrunnelse',
    }] as Aksjonspunkt[]}
    overrideReadOnly={false}
    kanOverstyreAccess={{
      isEnabled: true,
    }}
    toggleOverstyring={action('button-click')}
    erOverstyrt={false}
    avslagsarsaker={avslagsarsaker}
    status={vilkarUtfallType.IKKE_OPPFYLT}
    panelTittelKode="Inngangsvilkar.Fodselsvilkaret"
    lovReferanse="§§ Dette er en lovreferanse"
    overstyringApKode={aksjonspunktCode.OVERSTYR_FODSELSVILKAR}
    erMedlemskapsPanel={false}
  />
);
