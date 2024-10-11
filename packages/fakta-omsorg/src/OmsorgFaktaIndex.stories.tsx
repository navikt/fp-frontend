import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Aksjonspunkt } from '@navikt/ft-types';

import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AksjonspunktCode, sivilstandType, aksjonspunktStatus, AdresseType } from '@navikt/fp-kodeverk';
import { Behandling, KjønnkodeEnum, PersonopplysningerBasis, Ytelsefordeling } from '@navikt/fp-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import OmsorgFaktaIndex from './OmsorgFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const behandling = {
  uuid: '1',
  versjon: 1,
} as Behandling;

const adresse1 = {
  fom: '2023-01-01',
  tom: TIDENES_ENDE,
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Industrigata 2B',
  postNummer: '4123',
  poststed: 'Bobygda',
  land: 'Norge',
};
const adresse2 = {
  fom: '2019-01-01',
  tom: '2023-01-01',
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Veigata 1',
  postNummer: '0203',
  poststed: 'Bobygda',
  land: 'Norge',
};

const defaultBruker: PersonopplysningerBasis = {
  navn: 'Espen Utvikler',
  aktoerId: '1',
  kjønn: KjønnkodeEnum.MANN,
  sivilstand: sivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  adresser: [adresse1, adresse2],
};
const defaultAnnenPart: PersonopplysningerBasis = {
  navn: 'Petra Utvikler',
  aktoerId: '2',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: sivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  adresser: [adresse1, adresse2],
};
const defaultBarn: PersonopplysningerBasis = {
  navn: 'Tutta Utvikler',
  dødsdato: '2023-04-01',
  fødselsdato: '2023-04-01',
  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: sivilstandType.UGIFT,
};

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
  submitCallback?: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  bruker?: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn?: PersonopplysningerBasis[];
}> = ({
  aksjonspunkter,
  submitCallback = action('button-click') as (data: any) => Promise<any>,
  alleMerknaderFraBeslutter,
  annenPart = defaultAnnenPart,
  bruker = defaultBruker,
  barn = [defaultBarn],
}) => (
  <OmsorgFaktaIndex
    submitCallback={submitCallback}
    readOnly={false}
    harApneAksjonspunkter
    submittable
    setFormData={() => undefined}
    behandling={behandling}
    ytelsefordeling={ytelsefordeling}
    personoversikt={{ barn, annenPart, bruker }}
    aksjonspunkter={aksjonspunkter}
    alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
    alleKodeverk={alleKodeverk as any}
  />
);

export const ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg = Template.bind({});
ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg.args = {
  annenPart: defaultAnnenPart,
  bruker: defaultBruker,
  barn: [defaultBarn],
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
};
