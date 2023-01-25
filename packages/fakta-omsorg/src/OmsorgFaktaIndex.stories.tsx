import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';
import { OpplysningAdresseType } from '@navikt/ft-kodeverk';

import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import aksjonspunktStatus from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import sivilstandType from '@navikt/fp-kodeverk/src/sivilstandType';
import {
  Behandling, KjønnkodeEnum, Personoversikt, Ytelsefordeling,
} from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import OmsorgFaktaIndex from './OmsorgFaktaIndex';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

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
} as Personoversikt;

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
};

const Template: Story<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
}> = ({
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter,
}) => (
  <OmsorgFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    personoversikt={personoversikt}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    alleKodeverk={alleKodeverk as any}
  />
);

export const ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg = Template.bind({});
ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg.args = {
  aksjonspunkter: [{
    definisjon: aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
    status: aksjonspunktStatus.OPPRETTET,
    begrunnelse: undefined,
    kanLoses: true,
    erAktivt: true,
  }],
  alleMerknaderFraBeslutter: {
    [aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
