import { TIDENES_ENDE } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { AdresseType, AksjonspunktKode, SivilstandType } from '@navikt/fp-kodeverk';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import { Aksjonspunkt, Behandling, KjønnkodeEnum, PersonopplysningerBasis, Ytelsefordeling } from '@navikt/fp-types';

import { OmsorgOgRettFaktaIndex } from './OmsorgOgRettFaktaIndex';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

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
  fødselsdato: '2018-01-01',
  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.UGIFT,
};

const meta = {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
  args: {
    behandling: { uuid: 'test' } as Behandling,
    personoversikt: { barn: [defaultBarn], annenPart: defaultAnnenPart, bruker: defaultBruker },
    ytelsefordeling: {} as Ytelsefordeling,
    submittable: true,
    harApneAksjonspunkter: true,
    alleMerknaderFraBeslutter: {},
    readOnly: false,
    alleKodeverk: alleKodeverk as any,
    submitCallback: action('button-click') as (data: any) => Promise<void>,
    setFormData: () => undefined,
  },
} satisfies Meta<typeof OmsorgOgRettFaktaIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HarAksjonspunktForAvklarAleneomsorg: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
  },
};

export const HarAksjonspunktForAvklarAleneomsorgMedFlereBarn: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
    personoversikt: {
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
      annenPart: defaultAnnenPart,
      bruker: defaultBruker,
    },
  },
};

export const HarAksjonspunktForAvklarAnnenForelderRett: Story = {
  args: {
    aksjonspunkter: [
      {
        definisjon: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
  },
};
