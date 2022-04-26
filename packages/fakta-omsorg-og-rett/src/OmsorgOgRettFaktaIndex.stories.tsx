import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { KjønnkodeEnum } from '@fpsak-frontend/types';
import sivilstandType from '@fpsak-frontend/kodeverk/src/sivilstandType';

import { OpplysningAdresseType } from '@navikt/ft-kodeverk';
import { Aksjonspunkt } from '@navikt/ft-types';
import { alleKodeverk } from '@fpsak-frontend/storybook-utils';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgRettFaktaIndex from './OmsorgOgRettFaktaIndex';

export default {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
};

const adresser = [{
  adresseType: OpplysningAdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Veigata 1',
  adresselinje2: 'Oddelandet',
  adresselinje3: 'Leilighet 2',
  postNummer: '0123',
  poststed: 'Bobygda',
  land: 'Norge',
}];

const personoversikt = {
  bruker: {
    navn: 'Espen Utvikler',
    aktoerId: '1',
    kjønn: KjønnkodeEnum.MANN,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
    adresser,
  },
  annenPart: {
    navn: 'Petra Utvikler',
    aktoerId: '2',
    kjønn: KjønnkodeEnum.KVINNE,
    sivilstand: sivilstandType.SAMBOER,
    fødselsdato: '1989-01-01',
    adresser,
  },
  barn: [{
    navn: 'Tutta Utvikler',
    dødsdato: '2019-01-01',
    fødselsdato: '2018-01-01',
    adresser,
    aktoerId: '3',
    kjønn: KjønnkodeEnum.KVINNE,
    sivilstand: sivilstandType.UGIFT,
  }],
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[],
}> = ({
  aksjonspunkter,
}) => (
  <OmsorgOgRettFaktaIndex
    personoversikt={personoversikt}
    readOnly={false}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk}
  />
);

export const HarAksjonspunktForAvklarAleneomsorg = Template.bind({});
HarAksjonspunktForAvklarAleneomsorg.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
    erAktivt: true,
    kanLoses: true,
  }] as Aksjonspunkt[],
};

export const HarAksjonspunktForAvklarAnnenForelderRett = Template.bind({});
HarAksjonspunktForAvklarAnnenForelderRett.args = {
  aksjonspunkter: [{
    definisjon: AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT,
    erAktivt: true,
    kanLoses: true,
  }] as Aksjonspunkt[],
};
