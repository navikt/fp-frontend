import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktCode, sivilstandType, aksjonspunktStatus, AdresseType } from '@navikt/fp-kodeverk';
import { Behandling, KjønnkodeEnum, Personoversikt, Ytelsefordeling } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';

import OmsorgFaktaIndex from './OmsorgFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const adresser = [
  {
    adresseType: AdresseType.BOSTEDSADRESSE,
    adresselinje1: 'Veigata 1',
    adresselinje2: 'Oddelandet',
    adresselinje3: 'Leilighet 2',
    postNummer: '0123',
    poststed: 'Bobygda',
    land: 'Norge',
  },
];

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
  barn: [
    {
      navn: 'Tutta Utvikler',
      dødsdato: '2019-01-01',
      fødselsdato: '2018-01-01',
      adresser,
      aktoerId: '3',
      kjønn: KjønnkodeEnum.KVINNE,
      sivilstand: sivilstandType.UGIFT,
    },
  ],
} as Personoversikt;

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

export default {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
}> = ({ aksjonspunkter, submitCallback, alleMerknaderFraBeslutter }) => (
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
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
      status: aksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true,
    },
  ],
  alleMerknaderFraBeslutter: {
    [AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: merknaderFraBeslutter,
  },
  submitCallback: action('button-click') as (data: any) => Promise<any>,
};
