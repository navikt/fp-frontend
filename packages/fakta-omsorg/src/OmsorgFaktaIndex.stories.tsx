import React from 'react';
import { action } from '@storybook/addon-actions';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import sivilstandType from '@fpsak-frontend/kodeverk/src/sivilstandType';
import {
  Behandling, KjønnkodeEnum, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';

import OmsorgFaktaIndex from './OmsorgFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const soknad = {

} as Soknad;

const personoversikt = {
  bruker: {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: KjønnkodeEnum.MANN,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
    adresser: [],
  },
  annenPart: {
    navn: 'Petra Utvikler',
    adresser: [],
    aktoerId: '2',
    kjønn: KjønnkodeEnum.KVINNE,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
  },
  barn: [{
    navn: 'Tutta Utvikler',
    dødsdato: '2019-01-01',
    fødselsdato: '2018-01-01',
    adresser: [],
    aktoerId: '3',
    kjønn: KjønnkodeEnum.KVINNE,
    sivilstand: sivilstandType.UGIFT,
  }],
} as Personoversikt;

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const standardFaktaProps = {
  aksjonspunkter: [],
  submitCallback: action('button-click') as (data: any) => Promise<any>,
  readOnly: false,
  harApneAksjonspunkter: true,
  submittable: true,
  alleMerknaderFraBeslutter: {},
  setFormData: () => undefined,
};

export default {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
};

export const visÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg = () => (
  <OmsorgFaktaIndex
    {...standardFaktaProps}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    soknad={soknad}
    personoversikt={personoversikt}
    aksjonspunkter={[{
      definisjon: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
      erAktivt: true,
    }]}
    alleKodeverk={alleKodeverk as any}
    alleMerknaderFraBeslutter={{
      [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: merknaderFraBeslutter,
    }}
  />
);
