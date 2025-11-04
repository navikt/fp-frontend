import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  lagAksjonspunkt,
  type PanelDataArgs,
  withMellomlagretFormData,
  withPanelData,
} from '@navikt/fp-storybook-utils';
import { KjønnkodeEnum, type OmsorgOgRett, type Personadresse, type PersonopplysningerBasis } from '@navikt/fp-types';

import { OmsorgOgRettFaktaIndex } from './OmsorgOgRettFaktaIndex';

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
  sivilstand: 'SAMB',
  fødselsdato: '1989-01-01',

  adresser: [adresse1, adresse2],
};

const defaultAnnenPart: PersonopplysningerBasis = {
  navn: 'Petra Utvikler',
  aktoerId: '2',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: 'SAMB',
  fødselsdato: '1989-01-01',

  adresser: [adresse1, adresse2],
};

const defaultBarn: PersonopplysningerBasis = {
  navn: 'Tutta Utvikler',
  fødselsdato: '2018-01-01',

  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: 'UGIF',
};

const defaultOmsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: 'NEI',
    annenpartIdent: 'ArubaFnr123',
    annenpartBostedsland: 'ABW',
    annenpartRettighet: {
      harRettNorge: 'JA',
      harOppholdEØS: 'IKKE_RELEVANT',
      harRettEØS: 'IKKE_RELEVANT',
      harUføretrygd: 'IKKE_RELEVANT',
    },
  },
  registerdata: {
    harAnnenpartUføretrygd: 'IKKE_RELEVANT',
    harAnnenpartForeldrepenger: 'NEI',
    harAnnenpartEngangsstønad: 'NEI',
  },

  relasjonsRolleType: 'FARA',
  rettighetstype: 'BEGGE_RETT',
};

const aleneOmsorgForOmsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: 'JA',
  },

  relasjonsRolleType: 'MORA',
  rettighetstype: 'ALENEOMSORG',
};

const meta = {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    personoversikt: { barn: [defaultBarn], annenPart: defaultAnnenPart, bruker: defaultBruker },
    omsorgOgRett: {
      ...defaultOmsorgOgRett,
      relasjonsRolleType: 'FARA',
    },
  },
  render: args => <OmsorgOgRettFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgOgRettFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HarAksjonspunktForAvklarAleneomsorg: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG)],
    omsorgOgRett: aleneOmsorgForOmsorgOgRett,
    kanOverstyre: false,
  },
};

export const HarAksjonspunktForAvklarAleneomsorgMedFlereBarn: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG)],
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
    kanOverstyre: false,
  },
};

export const HarAksjonspunktForAvklarAnnenForelderRett: Story = {
  args: {
    aksjonspunkterForPanel: [lagAksjonspunkt(AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT)],
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: 'NEI',

        annenpartRettighet: {
          harRettNorge: 'JA',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'IKKE_RELEVANT',
          harUføretrygd: 'IKKE_RELEVANT',
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: 'IKKE_RELEVANT',
        harAnnenpartForeldrepenger: 'NEI',
        harAnnenpartEngangsstønad: 'NEI',
      },

      relasjonsRolleType: 'FARA',
      rettighetstype: 'BEGGE_RETT',
    },
    kanOverstyre: false,
  },
};

export const AvklarAnnenForelderRettBareFarRett: Story = {
  args: {
    aksjonspunkterForPanel: [
      lagAksjonspunkt(AksjonspunktKode.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT, {
        status: 'UTFO',
        begrunnelse: 'Mor har ikke rett og er uføretrygded i pesys.',
      }),
    ],
    isReadOnly: true,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: 'NEI',

        annenpartRettighet: {
          harRettNorge: 'NEI',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'IKKE_RELEVANT',
          harUføretrygd: 'JA',
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: 'JA',
        harAnnenpartForeldrepenger: 'NEI',
        harAnnenpartEngangsstønad: 'NEI',
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: 'IKKE_RELEVANT',
        annenpartRettighet: {
          harRettNorge: 'NEI',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'IKKE_RELEVANT',
          harUføretrygd: 'IKKE_RELEVANT',
        },
      },
      relasjonsRolleType: 'FARA',
      rettighetstype: 'BARE_FAR_RETT_MOR_UFØR',
    },
    kanOverstyre: false,
  },
};

export const RevurderingManuell: Story = {
  args: {
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: 'NEI',

        annenpartRettighet: {
          harRettNorge: 'NEI',
          harOppholdEØS: 'JA',
          harRettEØS: 'NEI',
          harUføretrygd: 'IKKE_RELEVANT',
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: 'NEI',
        harAnnenpartForeldrepenger: 'NEI',
        harAnnenpartEngangsstønad: 'NEI',
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: 'IKKE_RELEVANT',
        annenpartRettighet: {
          harRettNorge: 'NEI',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'NEI',
          harUføretrygd: 'JA',
        },
      },
      relasjonsRolleType: 'MMOR',
      rettighetstype: 'BARE_FAR_RETT_MOR_UFØR',
    },
    kanOverstyre: false,
  },
};
export const KanOverstyreMor: Story = {
  args: {
    aksjonspunkterForPanel: [],
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: 'NEI',

        annenpartRettighet: {
          harRettNorge: 'JA',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'IKKE_RELEVANT',
          harUføretrygd: 'IKKE_RELEVANT',
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: 'NEI',
        harAnnenpartForeldrepenger: 'NEI',
        harAnnenpartEngangsstønad: 'NEI',
      },

      relasjonsRolleType: 'MORA',
      rettighetstype: 'BEGGE_RETT',
    },
    kanOverstyre: true,
  },
};
export const KanOverstyreFarOgAlleredeLøstAP: Story = {
  args: {
    aksjonspunkterForPanel: [],
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: 'NEI',

        annenpartRettighet: {
          harRettNorge: 'JA',
          harOppholdEØS: 'IKKE_RELEVANT',
          harRettEØS: 'IKKE_RELEVANT',
          harUføretrygd: 'IKKE_RELEVANT',
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: 'NEI',
        harAnnenpartForeldrepenger: 'NEI',
        harAnnenpartEngangsstønad: 'NEI',
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: 'IKKE_RELEVANT',
        annenpartRettighet: {
          harRettNorge: 'NEI',
          harOppholdEØS: 'NEI',
          harRettEØS: 'NEI',
          harUføretrygd: 'NEI',
        },
      },
      relasjonsRolleType: 'FARA',
      rettighetstype: 'BARE_FAR_RETT',
    },
    kanOverstyre: true,
  },
};
