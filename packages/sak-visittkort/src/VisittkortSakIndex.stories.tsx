import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import {
  DiskresjonskodeType,
  FagsakStatus,
  FagsakYtelseType,
  FamilieHendelseType,
  NavBrukerKjonn,
  PersonstatusType,
  RelasjonsRolleType,
} from '@navikt/fp-kodeverk';
import { Fagsak } from '@navikt/fp-types';

import { VisittkortSakIndex } from './VisittkortSakIndex';

import '@navikt/ds-css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

const defaultFagsak = {
  saksnummer: '123456',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  relasjonsRolleType: RelasjonsRolleType.MOR,
  status: FagsakStatus.LOPENDE,
  dekningsgrad: 100,
} as Fagsak;

const fagsakPerson = {
  navn: 'Espen Utvikler',
  fødselsdato: '1979-01-01',
  fødselsnummer: '12345678910',
  kjønn: NavBrukerKjonn.MANN,
  aktørId: '234',
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonAnnenPartUkjent = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  fødselsnummer: '65656578787',
  kjønn: NavBrukerKjonn.KVINNE,
  personstatusType: PersonstatusType.BOSATT,
};

const fagsakPersonAnnenPart = {
  ...fagsakPersonAnnenPartUkjent,
  aktørId: 'test',
};

const fagsakPersonerUtenAnnenPart = {
  bruker: fagsakPerson,
};

const fagsakPersonerMedAnnenPart = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPart,
};

const fagsakPersonerMedAnnenPartUkjent = {
  bruker: fagsakPerson,
  annenPart: fagsakPersonAnnenPartUkjent,
};

const meta = {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
} satisfies Meta<typeof VisittkortSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtenAnnenPart: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: fagsakPersonerUtenAnnenPart,
  },
};

export const PersonopplysningerForBeggeParter: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: fagsakPersonerMedAnnenPart,
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const PersonopplysningerForBeggeParterMedLangtNavn: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      annenPart: { ...fagsakPersonAnnenPart, navn: 'Klara Kuuuuuuuuuuu' },
      bruker: {
        ...fagsakPerson,
        navn: 'Espen Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler',
      },
    },
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const MedDiskresjonskodeOgDødAnnenpart: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      bruker: { ...fagsakPerson, diskresjonskode: DiskresjonskodeType.KODE6 },
      annenPart: { ...fagsakPersonAnnenPart, dødsdato: '2024-02-01' },
    },
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const ForAnnenPartDerAktørIdErUkjent: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: fagsakPersonerMedAnnenPartUkjent,
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const MedVergeOgBrukerUnder18: Story = {
  args: {
    fagsak: defaultFagsak,
    harVerge: true,
    fagsakPersoner: {
      bruker: { ...fagsakPerson, fødselsdato: dayjs().subtract(17, 'years').format(ISO_DATE_FORMAT) },
    },
  },
};

export const FamilieMedDødfødtBarn: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      bruker: fagsakPerson,
      familiehendelse: {
        hendelseType: FamilieHendelseType.FODSEL,
        hendelseDato: '2020-01-21',
        dødfødsel: true,
        antallBarn: 1,
      },
    },
  },
};

export const FamilieMedTermin: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      bruker: fagsakPerson,
      familiehendelse: {
        hendelseType: FamilieHendelseType.TERMIN,
        hendelseDato: '2020-01-21',
        dødfødsel: false,
        antallBarn: 1,
      },
    },
  },
};

export const FamilieMedOmsorgovertakelse: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      bruker: fagsakPerson,
      familiehendelse: {
        hendelseType: FamilieHendelseType.OMSORG,
        hendelseDato: '2020-01-21',
        dødfødsel: false,
        antallBarn: 1,
      },
    },
  },
};

export const FamilieMedAdopsjon: Story = {
  args: {
    fagsak: defaultFagsak,
    fagsakPersoner: {
      bruker: fagsakPerson,
      familiehendelse: {
        hendelseType: FamilieHendelseType.ADOPSJON,
        hendelseDato: '2020-01-21',
        dødfødsel: false,
        antallBarn: 1,
      },
    },
  },
};
