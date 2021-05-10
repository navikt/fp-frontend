import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import sivilstandType from '@fpsak-frontend/kodeverk/src/sivilstandType';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import {
  Behandling, KjønnkodeEnum, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';

import alleKodeverk from '../mocks/alleKodeverk.json';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const soknad = {
  oppgittRettighet: {
    omsorgForBarnet: true,
    aleneomsorgForBarnet: true,
  },
} as Soknad;

const personoversikt = {
  bruker: {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: {
      kode: KjønnkodeEnum.MANN,
      kodeverk: '',
    },
    sivilstand: {
      kode: sivilstandType.SAMBOER,
      kodeverk: '',
    },
    fødselsdato: '1989-01-01',
    adresser: [],
  },
  annenPart: {
    navn: 'Petra Utvikler',
    adresser: [],
    aktoerId: '2',
    kjønn: {
      kode: KjønnkodeEnum.KVINNE,
      kodeverk: '',
    },
    sivilstand: {
      kode: sivilstandType.SAMBOER,
      kodeverk: '',
    },
    fødselsdato: '1989-01-01',
  },
  barn: [{
    navn: 'Tutta Utvikler',
    dødsdato: '2019-01-01',
    fødselsdato: '2018-01-01',
    adresser: [],
    aktoerId: '3',
    kjønn: {
      kode: KjønnkodeEnum.KVINNE,
      kodeverk: '',
    },
    sivilstand: {
      kode: sivilstandType.UGIFT,
      kodeverk: '',
    },
  }],
} as Personoversikt;

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: boolean('readOnly', false),
  harApneAksjonspunkter: boolean('harApneAksjonspunkter', true),
  submittable: boolean('submittable', true),
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
  decorators: [withKnobs],
};

export const visÅpentAksjonspunktForKontrollAvOmBrukerHarAleneomsorg = () => (
  <OmsorgFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    soknad={object('soknad', soknad)}
    personoversikt={object('personoversikt', personoversikt)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);

export const visÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg = () => (
  <OmsorgFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    soknad={object('soknad', soknad)}
    personoversikt={object('personoversikt', personoversikt)}
    aksjonspunkter={[{
      definisjon: {
        kode: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
        kodeverk: '',
      },
      status: {
        kode: aksjonspunktStatus.OPPRETTET,
        kodeverk: '',
      },
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: object('merknaderFraBeslutter', merknaderFraBeslutter),
    }}
  />
);
