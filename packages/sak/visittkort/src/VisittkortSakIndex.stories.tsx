import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { DiskresjonskodeType, FamilieHendelseType, NavBrukerKjonn } from '@navikt/fp-kodeverk';
import type { Person } from '@navikt/fp-types';

import { VisittkortSakIndex } from './VisittkortSakIndex';

const fagsakPersonFar: Person = {
  navn: 'Espen Utvikler',
  fødselsdato: '1979-01-01',
  dødsdato: null,
  fødselsnummer: '12345678910',
  kjønn: NavBrukerKjonn.MANN,
  aktørId: '234',
};

const fagsakPersonMor: Person = {
  navn: 'Klara Ku',
  fødselsdato: '1980-01-01',
  dødsdato: null,
  fødselsnummer: '65656578787',
  kjønn: NavBrukerKjonn.KVINNE,
  aktørId: 'test',
};

const meta = {
  title: 'sak/sak-visittkort',
  component: VisittkortSakIndex,
} satisfies Meta<typeof VisittkortSakIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const UtenAnnenPart: Story = {
  args: {
    erMor: false,
    bruker: fagsakPersonFar,
    familiehendelse: undefined,
  },
};

export const PersonopplysningerForBeggeParter: Story = {
  args: {
    erMor: false,
    bruker: fagsakPersonFar,
    annenPart: fagsakPersonMor,
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const PersonopplysningerForBeggeParterMedLangtNavn: Story = {
  args: {
    erMor: false,
    annenPart: { ...fagsakPersonMor, navn: 'Klara Kuuuuuuuuuuu' },
    bruker: {
      ...fagsakPersonFar,
      navn: 'Espen Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler Utvikler',
    },
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const MedDiskresjonskodeOgDødAnnenpart: Story = {
  args: {
    erMor: false,
    bruker: { ...fagsakPersonFar, diskresjonskode: DiskresjonskodeType.KODE6 },
    annenPart: { ...fagsakPersonMor, dødsdato: '2024-02-01' },
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const ForAnnenPartDerAktørIdErUkjent: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    annenPart: { ...fagsakPersonFar, aktørId: null },
    lenkeTilAnnenPart: 'testlenke til annen part',
  },
};

export const MedVergeOgBrukerUnder18: Story = {
  args: {
    harVergeIÅpenBehandling: true,
    bruker: { ...fagsakPersonMor, fødselsdato: dayjs().subtract(17, 'years').format(ISO_DATE_FORMAT) },
  },
};

export const FamilieMedFødtBarn: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    familiehendelse: {
      hendelseType: FamilieHendelseType.FODSEL,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};

export const FamilieMedDødfødtBarn: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    familiehendelse: {
      hendelseType: FamilieHendelseType.FODSEL,
      hendelseDato: '2020-01-21',
      dødfødsel: true,
      antallBarn: 1,
    },
  },
};

export const FamilieMedTermin: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    familiehendelse: {
      hendelseType: FamilieHendelseType.TERMIN,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};

export const FamilieMedOmsorgovertakelse: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    familiehendelse: {
      hendelseType: FamilieHendelseType.OMSORG,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};

export const FamilieMedAdopsjon: Story = {
  args: {
    erMor: true,
    bruker: fagsakPersonMor,
    familiehendelse: {
      hendelseType: FamilieHendelseType.ADOPSJON,
      hendelseDato: '2020-01-21',
      dødfødsel: false,
      antallBarn: 1,
    },
  },
};
