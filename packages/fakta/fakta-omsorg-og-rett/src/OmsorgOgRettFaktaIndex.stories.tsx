import type { ComponentProps } from 'react';

import { TIDENES_ENDE } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';

import {
  AdresseType,
  AksjonspunktKode,
  AksjonspunktStatus,
  RelasjonsRolleType,
  SivilstandType,
} from '@navikt/fp-kodeverk';
import { type PanelDataArgs, withFormData, withPanelData } from '@navikt/fp-storybook-utils';
import {
  type Aksjonspunkt,
  KjønnkodeEnum,
  type OmsorgOgRett,
  type PersonopplysningerBasis,
  Verdi,
} from '@navikt/fp-types';

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

const defaultOmsorgOgRett: OmsorgOgRett = {
  søknad: {
    søkerHarAleneomsorg: Verdi.NEI,
    annenpartIdent: 'ArubaFnr123',
    annenpartBostedsland: 'ABW',
    annenpartRettighet: {
      harRettNorge: Verdi.JA,
      harOppholdEØS: Verdi.JA,
      harRettEØS: Verdi.NEI,
      harUføretrygd: Verdi.JA,
    },
  },
  registerdata: {
    harAnnenpartUføretrygd: Verdi.IKKE_RELEVANT,
    harAnnenpartForeldrepenger: Verdi.NEI,
    harAnnenpartEngangsstønad: Verdi.NEI,
  },
  manuellBehandlingResultat: null,
  relasjonsRolleType: RelasjonsRolleType.FAR,
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
};

const meta = {
  title: 'fakta/fakta-omsorg-og-rett',
  component: OmsorgOgRettFaktaIndex,
  decorators: [withFormData, withPanelData],
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
    omsorgOgRett: {
      ...aleneOmsorgForOmsorgOgRett,
    },
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
    },
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
    },
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
    },
  },
};
