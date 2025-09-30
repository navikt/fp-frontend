import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode, AksjonspunktType, SivilstandType, VilkarType } from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  KjønnkodeEnum,
  type Personadresse,
  type PersonopplysningerBasis,
  type Ytelsefordeling,
} from '@navikt/fp-types';

import { OmsorgFaktaIndex } from './OmsorgFaktaIndex';

const adresse1 = {
  fom: '2023-01-01',
  tom: TIDENES_ENDE,
  adresseType: 'BOSTEDSADRESSE',
  adresselinje1: 'Industrigata 2B',
  postNummer: '4123',
  poststed: 'Bobygda',
  land: 'Norge',
} satisfies Personadresse;
const adresse2 = {
  fom: '2019-01-01',
  tom: '2023-01-01',
  adresseType: 'BOSTEDSADRESSE',
  adresselinje1: 'Veigata 1',
  postNummer: '0203',
  poststed: 'Bobygda',
  land: 'Norge',
} satisfies Personadresse;

const defaultBruker: PersonopplysningerBasis = {
  navn: 'Espen Utvikler',
  aktoerId: '1',
  kjønn: KjønnkodeEnum.MANN,
  sivilstand: SivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',

  adresser: [adresse1, adresse2],
};
const defaultAnnenPart: PersonopplysningerBasis = {
  navn: 'Petra Utvikler',
  aktoerId: '2',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.SAMBOER,
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
  sivilstand: SivilstandType.UGIFT,
};

const ytelsefordeling = {} as Ytelsefordeling;

const merknaderFraBeslutter = {
  notAccepted: false,
};

const meta = {
  title: 'fakta/fakta-omsorg',
  component: OmsorgFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    ytelsefordeling,
  },
  render: args => <OmsorgFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg: Story = {
  args: {
    personoversikt: { barn: [defaultBarn], annenPart: defaultAnnenPart, bruker: defaultBruker },
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
        status: 'OPPR',

        kanLoses: true,
        vilkarType: VilkarType.FODSELSVILKARET_MOR,
        toTrinnsBehandling: false,

        aksjonspunktType: AksjonspunktType.AUTOPUNKT,
        erAktivt: true,
      },
    ],
    alleMerknaderFraBeslutter: {
      [AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG]: merknaderFraBeslutter,
    },
  },
};
