import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Behandling, KjønnkodeEnum, PersonopplysningerBasis, Ytelsefordeling } from '@navikt/fp-types';
import { sivilstandType, AdresseType, AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { Aksjonspunkt } from '@navikt/ft-types';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { TIDENES_ENDE } from '@navikt/ft-utils';

import OmsorgOgRettFaktaIndex from './OmsorgOgRettFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

export default {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
};

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
  fødselsdato: '2018-01-01',
  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: sivilstandType.UGIFT,
};

const Template: StoryFn<{
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}> = ({
  aksjonspunkter,
  submitCallback = action('button-click') as (data: any) => Promise<any>,
  annenPart = defaultAnnenPart,
  bruker = defaultBruker,
  barn = [defaultBarn],
}) => (
  <OmsorgOgRettFaktaIndex
    behandling={{ uuid: 'test' } as Behandling}
    personoversikt={{ barn, annenPart, bruker }}
    ytelsefordeling={{} as Ytelsefordeling}
    submittable
    harApneAksjonspunkter
    alleMerknaderFraBeslutter={{}}
    readOnly={false}
    aksjonspunkter={aksjonspunkter}
    alleKodeverk={alleKodeverk as any}
    submitCallback={submitCallback}
    setFormData={() => undefined}
  />
);

export const HarAksjonspunktForAvklarAleneomsorg = Template.bind({});
HarAksjonspunktForAvklarAleneomsorg.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
      kanLoses: true,
    },
  ] as Aksjonspunkt[],
};

export const HarAksjonspunktForAvklarAleneomsorgMedFlereBarn = Template.bind({});
HarAksjonspunktForAvklarAleneomsorgMedFlereBarn.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
      kanLoses: true,
    },
  ] as Aksjonspunkt[],
  barn: [
    defaultBarn,
    {
      ...defaultBarn,
      navn: 'Petter Tester',
      fødselsdato: '2018-01-01',
      aktoerId: '4',
      kjønn: KjønnkodeEnum.MANN,
    },
  ],
};

export const HarAksjonspunktForAvklarAnnenForelderRett = Template.bind({});
HarAksjonspunktForAvklarAnnenForelderRett.args = {
  aksjonspunkter: [
    {
      definisjon: AksjonspunktCode.AVKLAR_ANNEN_FORELDER_RETT,
      kanLoses: true,
    },
  ] as Aksjonspunkt[],
};
