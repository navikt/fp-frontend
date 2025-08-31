import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AdresseType,
  AksjonspunktKode,
  AksjonspunktStatus,
  Landkode,
  RelasjonsRolleType,
  SivilstandType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withMellomlagretFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  type Aksjonspunkt,
  KjønnkodeEnum,
  type OmsorgOgRett,
  type Personadresse,
  type PersonopplysningerBasis,
  Rettighetstype,
  Verdi,
} from '@navikt/fp-types';

import { OmsorgOgRettFaktaIndex } from './OmsorgOgRettFaktaIndex';

const adresse1 = {
  fom: '2023-01-01',
  tom: TIDENES_ENDE,
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Industrigata 2B',
  postNummer: '4123',
  poststed: 'Bobygda',
  land: 'Norge',
  adresselinje2: null,
  adresselinje3: null,
} satisfies Personadresse;

const adresse2 = {
  fom: '2019-01-01',
  tom: '2023-01-01',
  adresseType: AdresseType.BOSTEDSADRESSE,
  adresselinje1: 'Veigata 1',
  postNummer: '0203',
  poststed: 'Bobygda',
  land: 'Norge',
  adresselinje2: null,
  adresselinje3: null,
} satisfies Personadresse;

const defaultBruker: PersonopplysningerBasis = {
  navn: 'Espen Utvikler',
  aktoerId: '1',
  kjønn: KjønnkodeEnum.MANN,
  sivilstand: SivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  dødsdato: null,
  adresser: [adresse1, adresse2],
};

const defaultAnnenPart: PersonopplysningerBasis = {
  navn: 'Petra Utvikler',
  aktoerId: '2',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.SAMBOER,
  fødselsdato: '1989-01-01',
  dødsdato: null,
  adresser: [adresse1, adresse2],
};

const defaultBarn: PersonopplysningerBasis = {
  navn: 'Tutta Utvikler',
  fødselsdato: '2018-01-01',
  dødsdato: null,
  adresser: [adresse2],
  aktoerId: '3',
  kjønn: KjønnkodeEnum.KVINNE,
  sivilstand: SivilstandType.UGIFT,
};

const defaultOmsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: Verdi.NEI,
    annenpartIdent: 'ArubaFnr123',
    annenpartBostedsland: Landkode.ARUBA,
    annenpartRettighet: {
      harRettNorge: Verdi.JA,
      harOppholdEØS: Verdi.IKKE_RELEVANT,
      harRettEØS: Verdi.IKKE_RELEVANT,
      harUføretrygd: Verdi.IKKE_RELEVANT,
    },
  },
  registerdata: {
    harAnnenpartUføretrygd: Verdi.IKKE_RELEVANT,
    harAnnenpartForeldrepenger: Verdi.NEI,
    harAnnenpartEngangsstønad: Verdi.NEI,
  },
  manuellBehandlingResultat: null,
  relasjonsRolleType: RelasjonsRolleType.FAR,
  rettighetstype: Rettighetstype.BEGGE_RETT,
};

const aleneOmsorgForOmsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: Verdi.JA,
    annenpartIdent: null,
    annenpartBostedsland: null,
    annenpartRettighet: null,
  },
  registerdata: null,
  manuellBehandlingResultat: null,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  rettighetstype: Rettighetstype.ALENEOMSORG,
};

const meta = {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
  decorators: [withMellomlagretFormData, withPanelData],
  args: {
    personoversikt: { barn: [defaultBarn], annenPart: defaultAnnenPart, bruker: defaultBruker },
    omsorgOgRett: {
      ...defaultOmsorgOgRett,
      relasjonsRolleType: RelasjonsRolleType.FAR,
    },
    submittable: true,
  },
  render: args => <OmsorgOgRettFaktaIndex {...args} />,
} satisfies Meta<PanelDataArgs & ComponentProps<typeof OmsorgOgRettFaktaIndex>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const HarAksjonspunktForAvklarAleneomsorg: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
    omsorgOgRett: aleneOmsorgForOmsorgOgRett,
    kanOverstyre: false,
  },
};

export const HarAksjonspunktForAvklarAleneomsorgMedFlereBarn: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
        status: AksjonspunktStatus.OPPRETTET,
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
    kanOverstyre: false,
  },
};

export const HarAksjonspunktForAvklarAnnenForelderRett: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
        status: AksjonspunktStatus.OPPRETTET,
        kanLoses: true,
      },
    ] as Aksjonspunkt[],
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: Verdi.NEI,
        annenpartIdent: null,
        annenpartBostedsland: null,
        annenpartRettighet: {
          harRettNorge: Verdi.JA,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.IKKE_RELEVANT,
          harUføretrygd: Verdi.IKKE_RELEVANT,
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: Verdi.IKKE_RELEVANT,
        harAnnenpartForeldrepenger: Verdi.NEI,
        harAnnenpartEngangsstønad: Verdi.NEI,
      },
      manuellBehandlingResultat: null,
      relasjonsRolleType: RelasjonsRolleType.FAR,
      rettighetstype: Rettighetstype.BEGGE_RETT,
    },
    kanOverstyre: false,
  },
};

export const AvklarAnnenForelderRettBareFarRett: Story = {
  args: {
    aksjonspunkterForPanel: [
      {
        definisjon: AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT,
        status: AksjonspunktStatus.UTFORT,
        begrunnelse: 'Mor har ikke rett og er uføretrygded i pesys.',
        kanLoses: false,
      },
    ] as Aksjonspunkt[],
    isReadOnly: true,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: Verdi.NEI,
        annenpartIdent: null,
        annenpartBostedsland: null,
        annenpartRettighet: {
          harRettNorge: Verdi.NEI,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.IKKE_RELEVANT,
          harUføretrygd: Verdi.JA,
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: Verdi.JA,
        harAnnenpartForeldrepenger: Verdi.NEI,
        harAnnenpartEngangsstønad: Verdi.NEI,
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: Verdi.IKKE_RELEVANT,
        annenpartRettighet: {
          harRettNorge: Verdi.NEI,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.IKKE_RELEVANT,
          harUføretrygd: Verdi.IKKE_RELEVANT,
        },
      },
      relasjonsRolleType: RelasjonsRolleType.FAR,
      rettighetstype: Rettighetstype.BARE_FAR_RETT_MOR_UFØR,
    },
    kanOverstyre: false,
  },
};

export const RevurderingManuell: Story = {
  args: {
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: Verdi.NEI,
        annenpartIdent: null,
        annenpartBostedsland: null,
        annenpartRettighet: {
          harRettNorge: Verdi.NEI,
          harOppholdEØS: Verdi.JA,
          harRettEØS: Verdi.NEI,
          harUføretrygd: Verdi.IKKE_RELEVANT,
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: Verdi.NEI,
        harAnnenpartForeldrepenger: Verdi.NEI,
        harAnnenpartEngangsstønad: Verdi.NEI,
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: Verdi.IKKE_RELEVANT,
        annenpartRettighet: {
          harRettNorge: Verdi.NEI,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.NEI,
          harUføretrygd: Verdi.JA,
        },
      },
      relasjonsRolleType: RelasjonsRolleType.MEDMOR,
      rettighetstype: Rettighetstype.BARE_FAR_RETT_MOR_UFØR,
    },
    kanOverstyre: false,
  },
};
export const KanOverstyreMor: Story = {
  args: {
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: Verdi.NEI,
        annenpartIdent: null,
        annenpartBostedsland: null,
        annenpartRettighet: {
          harRettNorge: Verdi.JA,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.IKKE_RELEVANT,
          harUføretrygd: Verdi.IKKE_RELEVANT,
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: Verdi.NEI,
        harAnnenpartForeldrepenger: Verdi.NEI,
        harAnnenpartEngangsstønad: Verdi.NEI,
      },
      manuellBehandlingResultat: null,
      relasjonsRolleType: RelasjonsRolleType.MOR,
      rettighetstype: Rettighetstype.BEGGE_RETT,
    },
    kanOverstyre: true,
  },
};
export const KanOverstyreFarOgAlleredeLøstAP: Story = {
  args: {
    aksjonspunkterForPanel: [] as Aksjonspunkt[],
    isReadOnly: false,
    omsorgOgRett: {
      søknad: {
        søkerHarAleneomsorg: Verdi.NEI,
        annenpartIdent: null,
        annenpartBostedsland: null,
        annenpartRettighet: {
          harRettNorge: Verdi.JA,
          harOppholdEØS: Verdi.IKKE_RELEVANT,
          harRettEØS: Verdi.IKKE_RELEVANT,
          harUføretrygd: Verdi.IKKE_RELEVANT,
        },
      },
      registerdata: {
        harAnnenpartUføretrygd: Verdi.NEI,
        harAnnenpartForeldrepenger: Verdi.NEI,
        harAnnenpartEngangsstønad: Verdi.NEI,
      },
      manuellBehandlingResultat: {
        søkerHarAleneomsorg: Verdi.IKKE_RELEVANT,
        annenpartRettighet: {
          harRettNorge: Verdi.NEI,
          harOppholdEØS: Verdi.NEI,
          harRettEØS: Verdi.NEI,
          harUføretrygd: Verdi.NEI,
        },
      },
      relasjonsRolleType: RelasjonsRolleType.FAR,
      rettighetstype: Rettighetstype.BARE_FAR_RETT,
    },
    kanOverstyre: true,
  },
};
